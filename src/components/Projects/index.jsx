import { Typography, Box, Grid, Card, Stack, useMediaQuery } from '@mui/material'

const Projects = () => {

    const mobileViewport = useMediaQuery('(max-width:800px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='projects' sx={{ backgroundColor: '#f44336', height: '95.5vh' }}>
                    <Grid container justifyContent='center' rowGap={2} columnSpacing={2} sx={{ py: '5%' }}>
                        <Grid item xs={5}>
                            <Card sx={{ minHeight: '40vh' }}>1</Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card sx={{ minHeight: '40vh' }}>2</Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card sx={{ minHeight: '40vh' }}>3</Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card sx={{ minHeight: '40vh' }}>4</Card>
                        </Grid>
                    </Grid>
                </Box>
                :
                <Box id='projects' sx={{ backgroundColor: '#f44336', height: '95vh' }}>
                    <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} sx={{ py: 2 }}>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>1</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>2</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>3</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>4</Typography>
                        </Card>
                    </Stack>
                </Box>
            }
        </>
    )

}

export default Projects