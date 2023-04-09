import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Stack, Box, Container, Typography, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import { Menu, Close, LinkedIn, GitHub, YouTube, Fullscreen } from '@mui/icons-material'

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
            position: 'absolute',
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
                <Button aria-label='Skills' color='inherit' onClick={close}>Skills</Button>
            </ListItem>
            <Divider />
            <ListItem>
                <Button aria-label='Projects' color='inherit' onClick={close}>Projects</Button>
            </ListItem>
            <Divider />
            <ListItem>
                <Button aria-label='Resume' color='inherit' onClick={close}>Resume</Button>
            </ListItem>
            <Divider />
            <ListItem>
                <Button aria-label='Contact' color='inherit' onClick={close}>Contact</Button>
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
                            <Typography sx={{ flexGrow: 1 }}>Caleb Funderburk</Typography>
                            <Stack direction='row' spacing={{ sm: 1, md: 4 }}>
                                <Button aria-label='Skills' color='inherit'>Skills</Button>
                                <Button aria-label='Projects' color='inherit'>Projects</Button>
                                <Button aria-label='Resume' color='inherit'>Resume</Button>
                                <Button aria-label='Contact' color='inherit'>Contact</Button>
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