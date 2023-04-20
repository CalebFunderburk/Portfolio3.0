import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Link, useMediaQuery } from '@mui/material'
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

    const projects = [
        {
            title: "Chunk'd",
            link: 'https://chunkd-aj.herokuapp.com/signup',
            repo: 'https://github.com/PuppetAJ/ReactMC',
            image: 'src/assets/images/screenshots/chunkd-screenshot.png',
            role: 'Backend Developer',
            desc: 'MERN stack Minecraft clone where users save & share their builds.',
            tech: 'React, Express, Node, MongoDB, GraphQL, ThreeJS, JWT, Tailwind, Heroku'
        },
        {
            title: 'PicMe',
            link: 'https://picme1.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/PicMe',
            image: 'src/assets/images/screenshots/picme-screenshot.png',
            role: 'Lead Developer',
            desc: 'MVC social media application built for photographers.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: 'Tech Talk',
            link: 'https://tech-talk-0.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/Tech-Talk',
            image: 'src/assets/images/screenshots/techtalk-screenshot.png',
            role: 'Full Stack Developer',
            desc: 'MVC forum application built for trends in technology.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: 'Weather On The Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            image: 'src/assets/images/screenshots/onthego-screenshot.png',
            role: 'Lead Developer',
            desc: 'Open Weather API weather application.',
            tech: 'HTML, CSS, JQuery, MomentJS, Bulma'
        },

    ]

    // Notes:
    // Really like the Carousel on the mobile viewport, maybe include it in desktop version?
    // Projects look really scrunched together on mobile view, specifically 300px


    return (
        <>
            {!mobileViewport ?
                <Box id='projects' py='10vh' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Grid container justifyContent='center' rowGap={2} columnSpacing={2}>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>
                                <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[0].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[0].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[0].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[0].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[0].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[0].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[0].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[1].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[1].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[1].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[1].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[1].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[1].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[1].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[2].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[2].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[2].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[2].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[2].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[2].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[2].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card elevation={9} sx={{ minHeight: '40vh' }}>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[3].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[3].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[3].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[3].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[3].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[3].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[3].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                :
                <Box id='projects' py='25vh' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Carousel responsive={responsive} infinite={true} centerMode={true}>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[0].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[0].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[0].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[0].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[0].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[0].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[0].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[1].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[1].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[1].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[1].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[1].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[1].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[1].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[2].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[2].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[2].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[2].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[2].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[2].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[2].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Typography>
                        </Card>
                        <Card elevation={9} sx={{ minHeight: '50vh', mx: 1 }}>
                            <Typography>
                            <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='140'
                                    image={projects[3].image}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='div' gutterBottom>{projects[3].title}</Typography>
                                    <Typography variant='subtitle1' gutterBottom>{projects[3].role}</Typography>
                                    <Typography variant='body2' gutterBottom>{projects[3].desc}</Typography>
                                    <Typography variant='body2'>Built with: {projects[3].tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={projects[3].link} target='_blank'>
                                        <Button size='small'>Visit Application</Button>
                                    </Link>
                                    <Link href={projects[3].repo} target='_blank'>
                                        <Button size='small'>GitHub Repo</Button>
                                    </Link>
                                </CardActions>
                            </Typography>
                        </Card>
                    </Carousel>
                </Box>
            }
        </>
    )

}

export default Projects