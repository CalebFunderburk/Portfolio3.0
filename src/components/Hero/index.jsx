import { Container, Typography, Box, useMediaQuery } from '@mui/material'

const Hero = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box sx={{ backgroundColor: '#ff9800', height: '94vh' }}>
                    <Typography>Hero Section</Typography>
                </Box>
                :
                <Box sx={{ backgroundColor: '#ff9800', height: '95vh' }}>
                    <Typography>Hero Section</Typography>
                </Box>
            }
        </>
    )

}

export default Hero