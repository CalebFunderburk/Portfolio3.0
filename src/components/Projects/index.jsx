import { useState } from 'react'
import { Typography, Box, Grid, Stack, Card, Modal, Fade, Backdrop, CardMedia, CardContent, CardActions, Button, Link, useMediaQuery } from '@mui/material'
import { Close } from '@mui/icons-material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Projects = () => {

    const desktopViewport = useMediaQuery('(min-width: 1201px)')
    const tabletViewport = useMediaQuery('(max-width: 1200px) and (min-width: 601px)')
    const mobileViewport = useMediaQuery('(max-width: 600px)')

    const responsive = {
        tablet: {
            breakpoint: { max: 1200, min: 0 },
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
            desc: 'MERN stack Minecraft clone where users can create, save, & share their builds.',
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
            role: 'Lead Developer',
            desc: 'MVC forum application built for trends in technology.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: 'On The Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            image: 'src/assets/images/screenshots/onthego-screenshot.png',
            role: 'Lead Developer',
            desc: 'Open Weather API weather application.',
            tech: 'HTML, CSS, JQuery, MomentJS, Bulma'
        },

    ]

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '515px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24
    }

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    // Notes:
    // Really like the Carousel on the mobile viewport, maybe include it in desktop version?
    // Projects look really scrunched together on mobile view, specifically 300px
    // Would make code a lot cleaner if you used a for loop to display each project in the project array
    // For mobile, you could make a modal that displays details for the project



    return (
        <>
            {tabletViewport ?
                <Box id='projects' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center' py='2%'>My Work</Typography>
                    <Carousel responsive={responsive} infinite={true} centerMode={true}>
                        {projects.map((project) => (
                            <Card elevation={4} sx={{ minHeight: '485px', mx: 2 }}>
                                <CardMedia
                                    component='img'
                                    alt='screenshot'
                                    height='175'
                                    image={project.image}
                                />
                                <CardContent>
                                    <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                                        <Typography variant='h5' component='div'>{project.title}</Typography>
                                        <Typography gutterBottom>{project.role}</Typography>
                                    </Stack>
                                    <Typography variant='body2' gutterBottom>{project.desc}</Typography>
                                    <Typography>Built with:</Typography>
                                    <Typography variant='body2'>{project.tech}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={project.link} target='_blank'>
                                        <Button size='small'>Visit App</Button>
                                    </Link>
                                    <Link href={project.repo} target='_blank'>
                                        <Button size='small'>View Repo</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        ))}
                    </Carousel>
                </Box>
                : mobileViewport ?
                    <Box id='projects' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                        <Typography variant='h2' align='center' py='2%'>My Work</Typography>
                        <Carousel responsive={responsive} infinite={true} centerMode={true}>
                            {projects.map((project) => (
                                <Card elevation={4} sx={{ minHeight: '350px', mx: 1 }}>
                                    <CardMedia
                                        component='img'
                                        alt='screenshot'
                                        height='100'
                                        image={project.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom>{project.title}</Typography>
                                        <Button variant='contained' onClick={handleOpen} sx={{ my: 2 }}>Click here for Details</Button>
                                        <Modal
                                            aria-labelledby='transition-modal-title'
                                            aria-describedby='transition-modal-description'
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            slots={{ backdrop: Backdrop }}
                                            slotProps={{
                                                backdrop: {
                                                    timeout: 500
                                                }
                                            }}
                                        >
                                            <Fade in={open}>
                                                <Card sx={modalStyle}>
                                                    <CardMedia
                                                        component='img'
                                                        alt='screenshot'
                                                        height='200'
                                                        image={project.image}
                                                    />
                                                    <CardContent>
                                                        <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                                                            <Typography variant='h5' component='div'>{project.title}</Typography>
                                                            <Typography gutterBottom>{project.role}</Typography>
                                                        </Stack>
                                                        <Typography gutterBottom>{project.desc}</Typography>
                                                        <Typography variant='h5' gutterBottom>Built with:</Typography>
                                                        <Typography>{project.tech}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Link href={project.link} target='_blank'>
                                                            <Button size='small'>Visit App</Button>
                                                        </Link>
                                                        <Link href={project.repo} target='_blank'>
                                                            <Button size='small'>View Repo</Button>
                                                        </Link>
                                                    </CardActions>
                                                    <Button variant='contained' fullWidth endIcon={<Close/>} onClick={handleClose}>Close</Button>
                                                </Card>
                                            </Fade>
                                        </Modal>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={project.link} target='_blank'>
                                            <Button size='small'>Visit App</Button>
                                        </Link>
                                        <Link href={project.repo} target='_blank'>
                                            <Button size='small'>View Repo</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            ))}
                        </Carousel>
                    </Box>
                    :
                    <Box id='projects' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                        <Typography variant='h2' align='center' sx={{ pt: '20px' }}>My Work</Typography>
                        <Grid container justifyContent='center' rowGap={1} rowSpacing={1} columnSpacing={2} sx={{ p: 2 }}>
                            {projects.map((project) => (
                                <Grid item xs={6}>
                                    <Card elevation={9}>
                                        <CardMedia
                                            component='img'
                                            alt='screenshot'
                                            height='175'
                                            image={project.image}
                                        />
                                        <CardContent>
                                            <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={2}>
                                                <Typography variant='h4' component='div'>{project.title}</Typography>
                                                <Typography variant='h6' gutterBottom>{project.role}</Typography>
                                            </Stack>
                                            <Typography variant='body2' gutterBottom>{project.desc}</Typography>
                                            <Typography>Built with:</Typography>
                                            <Typography variant='body2'>{project.tech}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link href={project.link} target='_blank'>
                                                <Button size='small'>Visit App</Button>
                                            </Link>
                                            <Link href={project.repo} target='_blank'>
                                                <Button size='small'>View Repo</Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
            }

        </>
    )

}

export default Projects