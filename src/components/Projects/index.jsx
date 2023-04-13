import { Typography, Box, Grid, Card, Stack, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Projects = (props) => {

    const mobileViewport = useMediaQuery('(max-width:800px)')

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

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
                    <Carousel responsive={responsive}>
                        <Card elevation={9} sx={{ minHeight: '40vh', minWidth: '85%' }}>
                            <Typography>1</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '40vh', minWidth: '85%' }}>
                            <Typography>2</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '40vh', minWidth: '85%' }}>
                            <Typography>3</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '40vh', minWidth: '85%' }}>
                            <Typography>4</Typography>
                        </Card>
                    </Carousel>
                </Box>
            }
        </>
    )

}

export default Projects