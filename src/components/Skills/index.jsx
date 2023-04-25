import { Typography, Box, Grid, Card, CardContent, CardHeader, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Skills = () => {

    const mobileViewport = useMediaQuery('(max-width:950px)')

    const responsive = {
        mobile: {
            breakpoint: { max: 950, min: 0 },
            items: 1
        }
    }

    // Notes:
    // Currently using mt to keep skills boxes away from the top of the parent container
    // Currently mobile view makes icons too small initially, might need 3 break points
    // Need to figure out why %'s wont work for card minHeight, would like to get rid of blank space

    return (
        <>
            {!mobileViewport ?
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center' pt='10%'>Skills</Typography>
                    <Grid display='flex' justifyContent='center' alignItems='center' mt='5%' >
                        <Card container elevation={9} sx={{ minHeight: '58vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Front End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\js.png' alt='javascript' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>JavaScript</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\react.png' alt='react' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>React</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\vite.png' alt='vite' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Vite</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\html.png' alt='html' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>HTML</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\css.png' alt='css' width='55%' />
                                        <br />
                                        <Typography variant='subtitle1'>CSS</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ minHeight: '58vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Back End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\node.png' alt='node' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Node</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\express.png' alt='express' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Express</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\mysql.png' alt='mysql' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>MySQL</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\sequelize.png' alt='sequelize' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Sequelize</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\mongodb.png' alt='mongodb' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>MongoDB</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\mongoose.png' alt='mongoose' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Mongoose</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\graphql.png' alt='graphql' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>GraphQL</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ minHeight: '58vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Tools'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\git.png' alt='git' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Git</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\heroku.png' alt='heroku' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Heroku</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\jest.png' alt='jest' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Jest</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\webpack.png' alt='webpack' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Webpack</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\insomnia.png' alt='insomnia' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>Insomnia</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\vscode.png' alt='vscode' width='50%' />
                                        <br />
                                        <Typography variant='subtitle1'>VS Code</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
                :
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Typography variant='h2' align='center' py='10%'>Skills</Typography>
                    <Carousel responsive={responsive} infinite={true} centerMode={true}>
                        <Card container elevation={9} sx={{ minHeight: '63vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Front End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\js.png' alt='javascript' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>JavaScript</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\react.png' alt='react' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>React</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\vite.png' alt='vite' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Vite</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\html.png' alt='html' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>HTML</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\css.png' alt='css' width='55%' />
                                        <br />
                                        <Typography variant='subtitle2'>CSS</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ minHeight: '63vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Back End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\node.png' alt='node' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Node</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\express.png' alt='express' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Express</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\mysql.png' alt='mysql' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>MySQL</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\sequelize.png' alt='sequelize' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Sequelize</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\mongodb.png' alt='mongodb' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>MongoDB</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\mongoose.png' alt='mongoose' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Mongoose</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\graphql.png' alt='graphql' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>GraphQL</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ minHeight: '63vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Tools'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\git.png' alt='git' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Git</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\heroku.png' alt='heroku' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Heroku</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\jest.png' alt='jest' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Jest</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\webpack.png' alt='webpack' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Webpack</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\insomnia.png' alt='insomnia' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>Insomnia</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\vscode.png' alt='vscode' width='50%' />
                                        <br />
                                        <Typography variant='subtitle2'>VS Code</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Carousel>
                </Box>
            }
        </>
    )
}

export default Skills