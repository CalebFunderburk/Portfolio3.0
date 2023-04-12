import { Typography, Box, Card, Stack, useMediaQuery } from '@mui/material'

const Skills = () => {

    const mobileViewport = useMediaQuery('(max-width:775px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='skills' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#4caf50', height: '95.5vh' }}>
                    <Card sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                        <Typography>Front End</Typography>
                    </Card>
                    <Card sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                        <Typography>Back End</Typography>
                    </Card>
                    <Card sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                        <Typography>Tools</Typography>
                    </Card>
                </Box>
                :
                <Box id='skills' sx={{ backgroundColor: '#4caf50', height: '95vh' }}>
                    <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} sx={{ py: 2 }}>
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