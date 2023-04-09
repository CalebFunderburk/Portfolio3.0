import { useState } from 'react'
import { Link } from 'react-scroll'
import { AppBar, Toolbar, IconButton, Stack, Box, Container, Typography, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import { Menu, Close, LinkedIn, GitHub, YouTube, MusicNote } from '@mui/icons-material'

const drawerWidth = 240

const Header = (props) => {

    const [open, setOpen] = useState(false)

    const mobileViewport = useMediaQuery('(max-width:600px)')

    const { window } = props

    const close = () => {
        setOpen(!open)
    }

    const socials = (
        <Box sx={{
            width: 330,
            height: 75,
            borderBottomLeftRadius: 100,
            backgroundColor: '#1976d2',
            position: 'fixed',
            right: '0',
            zIndex: 1201
        }}>
            <Stack sx={{ flexGrow: 2 }} direction='row' spacing={5} py={1.5} pr={3} justifyContent='flex-end'>
                <IconButton aria-label='LinkedIn'>
                    <LinkedIn fontSize='large' />
                </IconButton>
                <IconButton aria-label='GitHub'>
                    <GitHub fontSize='large' />
                </IconButton>
                <IconButton aria-label='YouTube'>
                    <YouTube fontSize='large' />
                </IconButton>
            </Stack>
        </Box>
    )

    const drawer = (
        <List>
            <Divider />
            <ListItem alignItems='center'>
                <Link to='skills' spy={true} smooth={true} offset={-56} duration={500}> 
                    <Button aria-label='Skills' color='inherit' onClick={close}>Skills</Button>
                </Link>
            </ListItem>
            <Divider />
            <ListItem>
                <Link to='projects' spy={true} smooth={true} offset={-56} duration={500}>
                    <Button aria-label='Projects' color='inherit' onClick={close}>Projects</Button>
                </Link>
            </ListItem>
            <Divider />
            <ListItem>
                <Link to='resume' spy={true} smooth={true} offset={-56} duration={500}>
                    <Button aria-label='Resume' color='inherit' onClick={close}>Resume</Button>
                </Link>
            </ListItem>
            <Divider />
            <ListItem>
                <Link to='contact' spy={true} smooth={true} offset={-56} duration={500}>
                    <Button aria-label='Contact' color='inherit' onClick={close}>Contact</Button>
                </Link>
            </ListItem>
            <Divider />
            <Stack direction='row' justifyContent='space-around'>
                <IconButton aria-label='LinkedIn'>
                    <LinkedIn fontSize='large' />
                </IconButton>
                <IconButton aria-label='GitHub'>
                    <GitHub fontSize='large' />
                </IconButton>
                <IconButton aria-label='YouTube'>
                    <YouTube fontSize='large' />
                </IconButton>
            </Stack>
        </List>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <>
            {!mobileViewport ?
                <>
                    <AppBar position='fixed' sx={{ zIndex: 1201 }}>
                        <Toolbar>
                            <Link to='hero' spy={true} smooth={true} offset={-64} duration={500}>
                                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                                    <MusicNote />
                                </IconButton>
                            </Link>
                            <Typography sx={{ flexGrow: 1 }}>Caleb Funderburk</Typography>
                            <Stack direction='row' spacing={{ sm: 1, md: 4 }}>
                                <Link to='skills' spy={true} smooth={true} offset={-64} duration={500}>
                                    <Button aria-label='Skills' color='inherit'>Skills</Button>
                                </Link>
                                <Link to='projects' spy={true} smooth={true} offset={-64} duration={500}>
                                    <Button aria-label='Projects' color='inherit'>Projects</Button>
                                </Link>
                                <Link to='resume' spy={true} smooth={true} offset={-64} duration={500}>
                                    <Button aria-label='Resume' color='inherit'>Resume</Button>
                                </Link>
                                <Link to='contact' spy={true} smooth={true} offset={-64} duration={500}>
                                    <Button aria-label='Contact' color='inherit'>Contact</Button>
                                </Link>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                    <Container position='relative' maxWidth={false} disableGutters display='flex'>
                        {socials}
                    </Container>
                </>
                :
                <>
                    <AppBar position='fixed' sx={{ zIndex: 1201 }}>
                        <Toolbar>
                            {/* Check why this isn't working */}
                            <Link to='hero' spy={true} smooth={true} offset={-56} duration={500}>
                                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                                    <MusicNote />
                                </IconButton>
                            </Link>
                            <Typography align='center' sx={{ flexGrow: 1 }}>Caleb Funderburk</Typography>
                            <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 3 }}>
                                {!open ?
                                    <IconButton aria-label='Menu' onClick={setOpen}>
                                        <Menu color='inherit' />
                                    </IconButton>
                                    :
                                    <IconButton aria-label='Close' onClick={close}>
                                        <Close color='inherit' />
                                    </IconButton>
                                }
                            </Stack>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        container={container}
                        variant='temporary'
                        anchor='right'
                        open={open}
                        onClose={close}
                        PaperProps={{ elevation: 6 }}
                        ModalProps={{
                            keepMounted: true
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                        }}
                    >
                        <Toolbar />
                        <Divider />
                        {drawer}
                    </Drawer>
                </>
            }
        </>
    )
}

export default Header