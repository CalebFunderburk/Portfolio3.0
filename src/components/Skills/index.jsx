import { Typography, Box, useMediaQuery } from '@mui/material'

const Skills = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='skills' sx={{ backgroundColor: '#4caf50', height: '95.5vh' }}>
                    <Typography>Skills Section</Typography>
                </Box>
                :
                <Box id='skills' sx={{ backgroundColor: '#4caf50', height: '95vh' }}>
                    <Typography>Skills Section</Typography>
                </Box>
            }
        </>
    )
}

export default Skills