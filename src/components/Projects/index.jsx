import { Typography, Box, Grid, Card, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Projects = () => {

    const mobileViewport = useMediaQuery('(max-width:1100px)')

    const responsive = {
        mobile: {
            breakpoint: { max: 1100, min: 0 },
            items: 1
        }
    }

    // Notes:
    // Really like the Carousel on the mobile viewport, maybe include it in desktop version?
    // Projects look really scrunched together on mobile view, specifically 300px


    return (
        <>
            {!mobileViewport ?
                <Box id='projects' py='10vh' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Grid container justifyContent='center' rowGap={2} columnSpacing={2}>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>1</Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>2</Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>3</Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>4</Card>
                        </Grid>
                    </Grid>
                </Box>
                :
                <Box id='projects' py='25vh' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Carousel responsive={responsive} infinite={true} centerMode={true}>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>1</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>2</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>3</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>4</Typography>
                        </Card>
                    </Carousel>
                </Box>
            }
        </>
    )

}

export default Projects