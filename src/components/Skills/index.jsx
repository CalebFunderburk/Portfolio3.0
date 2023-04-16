import { Typography, Box, Grid, Card, CardContent, CardHeader, Stack, useMediaQuery } from '@mui/material'

const Skills = () => {

    const mobileViewport = useMediaQuery('(max-width:900px)')

    // Notes:
    // Currently using mt to keep skills boxes away from the top of the parent container
    // Need to replace icons that have tech name printed in or under logo
    // Vite label is acting weird, but I think it's because all icons are sharing some sort of space
    // Need some margin around back end icons

    return (
        <>
            {!mobileViewport ?
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center'>Skills</Typography>
                    <Grid display='flex' justifyContent='center' alignItems='center' mt='10%' >
                        <Card container elevation={9} sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Front End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\js.png' alt='javascript' width='80px' />
                                        <br />
                                        <label>JavaScript</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\react.png' alt='react' width='80px' />
                                        <br />
                                        <label>React</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\vite.png' alt='vite' width='80px' />
                                        <br />
                                        <label>Vite</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\html.png' alt='html' width='80px' />
                                        <br />
                                        <label>HTML</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\css.png' alt='css' width='95px' />
                                        <br />
                                        <label>CSS</label>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Back End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\node.png' alt='node' width='80px' />
                                        <br />
                                        <label>Node</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\express.png' alt='express' width='80px' />
                                        <br />
                                        <label>Express</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\mysql.png' alt='mysql' width='80px' />
                                        <br />
                                        <label>MySQL</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\sequelize.png' alt='sequelize' width='80px' />
                                        <br />
                                        <label>Sequelize</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\mongodb.png' alt='mongodb' width='80px' />
                                        <br />
                                        <label>MongoDB</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\mongoose.png' alt='mongoose' width='80px' />
                                        <br />
                                        <label>Mongoose</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\graphql.png' alt='graphql' width='80px' />
                                        <br />
                                        <label>GraphQL</label>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ minHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Tools'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\git.png' alt='git' width='80px' />
                                        <br />
                                        <label>Git</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\heroku.png' alt='heroku' width='80px' />
                                        <br />
                                        <label>Heroku</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\jest.png' alt='jest' width='80px' />
                                        <br />
                                        <label>Jest</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\webpack.png' alt='webpack' width='80px' />
                                        <br />
                                        <label>Webpack</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\insomnia.png' alt='insomnia' width='80px' />
                                        <br />
                                        <label>Insomnia</label>
                                    </Grid>
                                    <Grid item align='center' xs={4}>
                                        <img src='src\assets\images\skills\vscode.png' alt='vscode' width='80px' />
                                        <br />
                                        <label>VS Code</label>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
                :
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Stack direction='column' justifyContent='center' alignItems='center' spacing={1} sx={{ py: 1 }}>
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