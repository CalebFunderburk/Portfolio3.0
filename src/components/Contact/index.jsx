import { Typography, Box, useMediaQuery } from '@mui/material'

const Contact = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box sx={{ backgroundColor: '#ffeb3b', height: '94vh' }}>
                    <Typography>Contact Section</Typography>
                </Box>
                :
                <Box sx={{ backgroundColor: '#ffeb3b', height: '95vh' }}>
                    <Typography>Contact Section</Typography>
                </Box>
            }
        </>
    )

}

export default Contact