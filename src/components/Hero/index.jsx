import { Typography, Box, useMediaQuery } from '@mui/material'

const Hero = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='hero' sx={{ backgroundColor: '#ff9800', height: '95.5vh' }}>
                    <Typography>Hero Section</Typography>
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