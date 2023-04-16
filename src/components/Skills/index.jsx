import { Typography, Box, Grid, Card, Stack, useMediaQuery } from '@mui/material'

const Skills = () => {

    const mobileViewport = useMediaQuery('(max-width:775px)')

    // Notes:
    // Currently using mt to keep skills boxes away from the top of the parent container

    return (
        <>
            {!mobileViewport ?
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center'>Skills</Typography>
                    <Grid display='flex' justifyContent='center' alignItems='center' mt={15} >
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <Typography variant='h4' align='center'>Front End</Typography>
                            <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2} mt={5}>
                                <Grid item align='center' xs={4}>
                                    <img src='src\assets\images\js.png' alt='javascript' width='80px' />
                                </Grid>
                                <Grid item align='center' xs={4}>
                                    <img src='src\assets\images\react.png' alt='react' width='80px' />
                                </Grid>
                                <Grid item align='center' xs={4}>
                                    <img src='src\assets\images\vite.png' alt='vite' width='80px' />
                                </Grid>
                                <Grid item align='center' xs={4}>
                                    <img src='src\assets\images\html.png' alt='html' width='80px' />
                                </Grid>
                                <Grid item align='center' xs={4}>
                                    <img src='src\assets\images\css.png' alt='css' width='90px' />
                                </Grid>
                            </Grid>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <Typography variant='h4' align='center'>Back End</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <Typography variant='h4' align='center'>Tools</Typography>
                        </Card>
                    </Grid>
                </Box>
                :
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} sx={{ py: 1 }}>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>Front End</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>Back End</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '30vh', minWidth: '85%' }}>
                            <Typography>Tools</Typography>
                        </Card>
                    </Stack>
                </Box>
            }
        </>
    )
}

export default Skills