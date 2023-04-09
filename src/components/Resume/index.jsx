import { Typography, Box, useMediaQuery } from '@mui/material'

const Resume = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box sx={{ backgroundColor: '#673ab7', height: '94vh' }}>
                    <Typography>Resume Section</Typography>
                </Box>
                :
                <Box sx={{ backgroundColor: '#673ab7', height: '95vh' }}>
                    <Typography>Resume Section</Typography>
                </Box>
            }
        </>
    )

}

export default Resume