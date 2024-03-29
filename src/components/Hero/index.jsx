import { Link } from 'react-scroll'
import { Typography, Stack, Box, Grid, Button, useMediaQuery } from '@mui/material'

const Hero = () => {

    const mobileViewport = useMediaQuery('(max-width:1100px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='hero' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Grid sx={{ minWidth: '50%', minHeight:'50vh' }}>
                        <Typography variant='h1'>Welcome, I'm <Typography variant='h' color='#1976d2'>Caleb</Typography>.</Typography>
                        <Typography variant='h1'>I'm a full stack developer.</Typography>
                        <Link to='projects' spy={true} smooth={true} offset={-56} duration={500}>
                            <Button variant='contained' size='large' sx={{ my: 3, mx: 1 }}>My work</Button>
                        </Link>
                        <Link to='contact' spy={true} smooth={true} offset={-56} duration={500}>
                            <Button variant='contained' size='large' sx={{ my: 3, mx: 1 }}>Contact me</Button>
                        </Link>
                    </Grid>
                </Box>
                :
                <Box id='hero' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Stack direction='column' justifyContent='center' alignItems='center' spacing={2} sx={{mx: 5}}>
                        <Typography variant='h3'>Welcome, I'm <Typography variant='h' color='#1976d2'>Caleb</Typography>.</Typography>
                        <Typography variant='h3'>I'm a full stack developer.</Typography>
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                            <Link to='projects' spy={true} smooth={true} offset={-56} duration={500}>
                                <Button variant='contained' size='large' sx={{ my: 3 }}>My work</Button>
                            </Link>
                            <Link to='contact' spy={true} smooth={true} offset={-56} duration={500}>
                                <Button variant='contained' size='large' sx={{ my: 3}}>Contact me</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            }
        </>
    )
}

export default Hero