import { useState } from 'react'
import { AppBar, Toolbar, IconButton, Stack, Typography, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material"

const drawerWidth = 240

const Header = (props) => {

    const [ open, setOpen ] = useState(false)

    const { window } = props

    const close = () => {
        setOpen(!open)
    }

    const drawer = (
        <List>
            <Divider/>
            <Button color='inherit' onClick={close}>Skills</Button>
            <Button color='inherit' onClick={close}>Projects</Button>
            <Button color='inherit' onClick={close}>Resume</Button>
            <Button color='inherit' onClick={close}>Contact</Button>
            <Divider/>
        </List>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
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
            <Drawer
                container={container}
                anchor='right'
                variant='temporary'
                open={open}
                onClose={close}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
            <Toolbar/>
            <Divider/>

            </Drawer>
        </>
    )
}

export default Header