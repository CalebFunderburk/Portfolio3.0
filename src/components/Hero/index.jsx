import { Typography, Box, Paper, Card, useMediaQuery } from '@mui/material'

const Hero = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='hero' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#ff9800', height: '95.5vh' }}>
                    <Card elevation={6} sx={{ minWidth: 550, minHeight:'50vh' }}>
                        <Typography>Welcome, I'm Caleb.</Typography>
                        <Typography>I'm a full stack developer.</Typography>
                    </Card>
                </Box>
                :
                <Box id='hero' sx={{ backgroundColor: '#ff9800', height: '95vh' }}>
                    <Typography>Hero Section</Typography>
                </Box>
            }
        </>
    )
}

export default Hero