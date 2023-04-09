import { Typography, Box, useMediaQuery } from '@mui/material'

const Projects = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='projects' sx={{ backgroundColor: '#f44336', height: '95.5vh' }}>
                    <Typography>Projects Section</Typography>
                </Box>
                :
                <Box id='projects' sx={{ backgroundColor: '#f44336', height: '95vh' }}>
                    <Typography>Projects Section</Typography>
                </Box>
            }
        </>
    )

}

export default Projects