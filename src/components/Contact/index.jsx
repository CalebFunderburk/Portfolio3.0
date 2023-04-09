import { Typography, Box, useMediaQuery } from '@mui/material'

const Contact = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='contact' sx={{ backgroundColor: '#ffeb3b', height: '95.5vh' }}>
                    <Typography>Contact Section</Typography>
                </Box>
                :
                <Box id='contact' sx={{ backgroundColor: '#ffeb3b', height: '96vh' }}>
                    <Typography>Contact Section</Typography>
                </Box>
            }
        </>
    )

}

export default Contact