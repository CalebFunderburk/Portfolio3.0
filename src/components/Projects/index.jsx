import { Typography, Box, Grid, Card, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Projects = () => {

    const mobileViewport = useMediaQuery('(max-width:900px)')

    const responsive = {
        mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    }

    // Notes:
    // Really like the Carousel on the mobile viewport, maybe include it in desktop version? 

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
                    <Carousel responsive={responsive} partialVisible={true}>
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '60%', mx:1 }}>
                            <Typography>1</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '60%', mx:1  }}>
                            <Typography>2</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '60%', mx:1  }}>
                            <Typography>3</Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', minWidth: '60%', mx:1  }}>
                            <Typography>4</Typography>
                        </Card>
                    </Carousel>
                </Box>
            }
        </>
    )

}

export default Projects