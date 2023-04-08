import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Stack, Typography, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import { Menu, Close } from '@mui/icons-material'

const drawerWidth = 240

const Header = (props) => {

    const [open, setOpen] = useState(false)

    const mobileResponse = useMediaQuery('(max-width:600px)')

    const { window } = props

    const close = () => {
        setOpen(!open)
    }

    const drawer = (
        <List>
            <Divider />
            <ListItem>
                <Button color='inherit' onClick={close}>Skills</Button>
            </ListItem>
            <ListItem>
                <Button color='inherit' onClick={close}>Projects</Button>
            </ListItem>
            <ListItem>
                <Button color='inherit' onClick={close}>Resume</Button>
            </ListItem>
            <ListItem>
                <Button color='inherit' onClick={close}>Contact</Button>
            </ListItem>
            <Divider />
        </List>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <>
            {!mobileResponse ?
                <>
                    <AppBar position='fixed' sx={{ zIndex: 1201 }}>
                        <Toolbar>
                            <Typography sx={{ flexGrow: 1 }}>Caleb Funderburk</Typography>
                            <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Button color='inherit'>Skills</Button>
                                <Button color='inherit'>Projects</Button>
                                <Button color='inherit'>Resume</Button>
                                <Button color='inherit'>Contact</Button>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </>
            :
                <>
                    <AppBar position='fixed' sx={{ zIndex: 1201 }}>
                        <Toolbar>
                            <Typography sx={{ flexGrow: 1 }}>Caleb Funderburk</Typography>
                            <Stack direction='row' spacing={{ xs: 1, sm: 2, md: 3 }}>
                                {!open ?
                                    <IconButton>
                                        <Menu color='inherit' onClick={setOpen}/>
                                    </IconButton>
                                :
                                    <IconButton>
                                        <Close color='inherit' onClick={close}/>
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