import { Typography, Box, Grid, Paper, Card, ImageList, ImageListItem, ImageListItemBar, Stack, CardContent, CardHeader, useMediaQuery } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Skills = () => {

    const mobileViewport = useMediaQuery('(max-width:1200px)')

    const responsive = {
        mobile: {
            breakpoint: { max: 1200, min: 0 },
            items: 1
        }
    }

    const skillsFront = [
        {
            name: 'JavaScript',
            img: 'src/assets/images/skills/js.png'
        },
        {
            name: 'React',
            img: 'src/assets/images/skills/react.png'
        },
        {
            name: 'Vite',
            img: 'src/assets/images/skills/vite.png'
        },
        {
            name: 'Material UI',
            img: 'src/assets/images/skills/materialui.png'
        },
        {
            name: 'HTML',
            img: 'src/assets/images/skills/html.png'
        },
        {
            name: 'CSS',
            img: 'src/assets/images/skills/css.png'
        }
    ]

    const skillsBack = [
        {
            name: 'Node',
            img: 'src/assets/images/skills/node.png'
        },
        {
            name: 'Express',
            img: 'src/assets/images/skills/express.png'
        },
        {
            name: 'MySQL',
            img: 'src/assets/images/skills/mysql.png'
        },
        {
            name: 'Sequelize',
            img: 'src/assets/images/skills/sequelize.png'
        },
        {
            name: 'MongoDB',
            img: 'src/assets/images/skills/mongodb.png'
        },
        {
            name: 'GraphQL',
            img: 'src/assets/images/skills/graphql.png'
        }
    ]

    const tools = [
        {
            name: 'Git',
            img: 'src/assets/images/skills/git.png'
        },
        {
            name: 'Heroku',
            img: 'src/assets/images/skills/heroku.png'
        },
        {
            name: 'Jest',
            img: 'src/assets/images/skills/jest.png'
        },
        {
            name: 'Webpack',
            img: 'src/assets/images/skills/webpack.png'
        },
        {
            name: 'Insomnia',
            img: 'src/assets/images/skills/insomnia.png'
        },
        {
            name: 'VS Code',
            img: 'src/assets/images/skills/vscode.png'
        }
    ]

    // Notes:
    // Currently using mt to keep skills boxes away from the top of the parent container
    // Currently mobile view makes icons too small initially, might need 3 break points
    // Need to figure out why %'s wont work for card minHeight, would like to get rid of blank space

    return (
        <>
            {!mobileViewport ?
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center' sx={{ pt: '20px' }}>Skills</Typography>
                    <Paper elevation={9} sx={{ backgroundColor: '#575969', height: '80vh', mx: 3, pt: 2 }}>
                        <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={2}>
                            <Card elevation={5} sx={{ p: 1 }}>
                                <Typography variant='h4' align='center'>Front End</Typography>
                                <ImageList sx={{ width: 340, height: 640 }} cols={2} rowHeight={175}>
                                    {skillsFront.map((skill) => (
                                        <ImageListItem key={skill.name}>
                                            <img
                                                src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={skill.name}
                                                loading='lazy'
                                            />
                                            <ImageListItemBar
                                                title={skill.name}
                                                position='below'
                                                align='center'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Card>
                            <Card elevation={5} sx={{ p: 1 }}>
                                <Typography variant='h4' align='center'>Back End</Typography>
                                <ImageList sx={{ width: 340, height: 640 }} cols={2} rowHeight={175}>
                                    {skillsBack.map((skill) => (
                                        <ImageListItem key={skill.name}>
                                            <img
                                                src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={skill.name}
                                                loading='lazy'
                                            />
                                            <ImageListItemBar
                                                title={skill.name}
                                                position='below'
                                                align='center'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Card>
                            <Card elevation={5} sx={{ p: 1 }}>
                                <Typography variant='h4' align='center'>Tools</Typography>
                                <ImageList sx={{ width: 340, height: 640 }} cols={2} rowHeight={175}>
                                    {tools.map((skill) => (
                                        <ImageListItem key={skill.name}>
                                            <img
                                                src={`${skill.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${skill.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={skill.name}
                                                loading='lazy'
                                            />
                                            <ImageListItemBar
                                                title={skill.name}
                                                position='below'
                                                align='center'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Card>
                        </Stack>
                    </Paper>
                </Box>
                :
                <Box id='skills' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Typography variant='h2' >Skills</Typography>
                    <Carousel responsive={responsive} infinite={true} centerMode={true}>
                        <Card container elevation={9} sx={{ maxHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Front End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\js.png' alt='javascript' width='46.5%' />
                                        <br />
                                        <Typography>JavaScript</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\react.png' alt='react' width='50%' />
                                        <br />
                                        <Typography>React</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\vite.png' alt='vite' width='50%' />
                                        <br />
                                        <Typography>Vite</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\html.png' alt='html' width='50%' />
                                        <br />
                                        <Typography>HTML</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\css.png' alt='css' width='55%' />
                                        <br />
                                        <Typography>CSS</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ maxHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Back End'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\node.png' alt='node' width='45%' />
                                        <br />
                                        <Typography>Node</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\express.png' alt='express' width='45%' />
                                        <br />
                                        <Typography>Express</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\mysql.png' alt='mysql' width='50%' />
                                        <br />
                                        <Typography>MySQL</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\sequelize.png' alt='sequelize' width='45%' />
                                        <br />
                                        <Typography>Sequelize</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\mongodb.png' alt='mongodb' width='50%' />
                                        <br />
                                        <Typography>MongoDB</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\graphql.png' alt='graphql' width='45%' />
                                        <br />
                                        <Typography>GraphQL</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card container elevation={9} sx={{ maxHeight: '50vh', minWidth: '30%', mx: '1%' }}>
                            <CardHeader
                                title='Tools'
                                align='center'
                            />
                            <CardContent sx={{ marginTop: '10%' }}>
                                <Grid container direction='row' justifyContent='center' alignItems='center' rowGap={3}>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\git.png' alt='git' width='50%' />
                                        <br />
                                        <Typography>Git</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\heroku.png' alt='heroku' width='50%' />
                                        <br />
                                        <Typography>Heroku</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\jest.png' alt='jest' width='50%' />
                                        <br />
                                        <Typography>Jest</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\webpack.png' alt='webpack' width='50%' />
                                        <br />
                                        <Typography>Webpack</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\insomnia.png' alt='insomnia' width='45%' />
                                        <br />
                                        <Typography>Insomnia</Typography>
                                    </Grid>
                                    <Grid item align='center' xs={5}>
                                        <img src='src\assets\images\skills\vscode.png' alt='vscode' width='45%' />
                                        <br />
                                        <Typography>VS Code</Typography>
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