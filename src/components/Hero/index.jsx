import { Link } from 'react-scroll'
import { Typography, Box, Card, Grid, ButtonGroup, Button, useMediaQuery } from '@mui/material'

const Hero = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='hero' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Grid sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography variant='h1'>Welcome, I'm <Typography variant='h' color='#1976d2'>Caleb</Typography>.</Typography>
                        <Typography variant='h1'>I'm a full stack developer.</Typography>
                        <Link to='projects' spy={true} smooth={true} offset={-56} duration={500}>
                            <Button variant='contained' size='large' sx={{ my: 3, mx: 1 }}>View my work</Button>
                        </Link>
                        <Link to='contact' spy={true} smooth={true} offset={-56} duration={500}>
                            <Button variant='contained' size='large' sx={{ my: 3, mx: 1 }}>Contact me</Button>
                        </Link>
                    </Grid>
                </Box>
                :
                <Box id='hero' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography>Welcome, I'm Caleb.</Typography>
                        <Typography>I'm a full stack developer.</Typography>
                    </Card>
                </Box>
            }
        </>
    )
}

export default Hero