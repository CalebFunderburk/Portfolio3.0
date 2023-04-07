import { AppBar, Toolbar, IconButton, Stack, Typography, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const Header = () => {

    return (
        <AppBar position='fixed' sx={{ zIndex: 1201 }}>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>Caleb Funderburk</Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Skills</Button>
                    <Button color='inherit'>Projects</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Contact</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header