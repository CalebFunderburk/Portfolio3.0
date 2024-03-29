import { useState } from 'react'
import { Typography, Box, Grid, Stack, Card, Modal, Fade, Backdrop, CardMedia, CardContent, CardActions, Button, Link, useMediaQuery } from '@mui/material'
import { Close } from '@mui/icons-material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import chunkd from '../../assets/images/screenshots/chunkd-screenshot.png'
import picme from '../../assets/images/screenshots/picme-screenshot.png'
import techtalk from '../../assets/images/screenshots/techtalk-screenshot.png'
import onthego from '../../assets/images/screenshots/onthego-screenshot.png'


const Projects = () => {

    const desktopViewport = useMediaQuery('(min-width: 2001px)')
    const tabletViewport = useMediaQuery('(max-width: 2000px) and (min-width: 601px)')
    const mobileViewport = useMediaQuery('(max-width: 600px)')

    const responsive = {
        tablet: {
            breakpoint: { max: 2000, min: 0 },
            items: 1
        }
    }

    const projects = [
        {
            title: "Chunk'd",
            link: 'https://chunkd-aj.herokuapp.com/signup',
            repo: 'https://github.com/PuppetAJ/ReactMC',
            image: chunkd,
            role: 'Backend Developer',
            desc: 'MERN stack Minecraft clone where users can create, save, & share their builds.',
            tech: 'React, Express, Node, MongoDB, GraphQL, ThreeJS, JWT, Tailwind, Heroku'
        },
        {
            title: 'PicMe',
            link: 'https://picme1.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/PicMe',
            image: picme,
            role: 'Lead Developer',
            desc: 'MVC social media application built for photographers.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: 'Tech Talk',
            link: 'https://tech-talk-0.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/Tech-Talk',
            image: techtalk,
            role: 'Lead Developer',
            desc: 'MVC forum application built for trends in technology.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: 'On The Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            image: onthego,
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
                <Box id='projects' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh', pt: 10  }}>
                    <Typography variant='h2' align='center' py='2%'>My Work</Typography>
                    <Carousel responsive={responsive} infinite={true} centerMode={true}>
                        {projects.map((project) => (
                            <Card key={project.name} elevation={4} sx={{ minHeight: '485px', mx: 2 }}>
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
                                    <Typography variant='body2' fontStyle='italic' gutterBottom>{project.desc}</Typography>
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
                    <Box id='projects' sx={{ backgroundColor: '#e0e0e0', height: '95vh', pt: 15 }}>
                            <Typography variant='h3' align='center' py='2%'>My Work</Typography>
                            <Carousel responsive={responsive} infinite={true} centerMode={true}>
                                {projects.map((project) => (
                                    <Card key={project.name} elevation={4} sx={{ minHeight: '350px', mx: 1 }}>
                                        <CardMedia
                                            component='img'
                                            alt='screenshot'
                                            height='100'
                                            image={project.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom>{project.title}</Typography>
                                            <Button variant='contained' fullWidth onClick={handleOpen} sx={{ my: 2 }}>Details</Button>
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
                                                            <Typography fontStyle='italic' gutterBottom>{project.desc}</Typography>
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
                    <Box id='projects' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh', pt: 15 }}>
                        <Typography variant='h2' align='center' sx={{ pt: '20px' }}>My Work</Typography>
                        <Grid container justifyContent='center' rowGap={1} rowSpacing={1} columnSpacing={2} sx={{ p: 2 }}>
                            {projects.map((project) => (
                                <Grid item key={project.name} xs={6}>
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
                                            <Typography variant='body2' fontStyle='italic' gutterBottom>{project.desc}</Typography>
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