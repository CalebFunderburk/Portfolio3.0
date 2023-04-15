import { Typography, Box, Card, useMediaQuery } from '@mui/material'

const Resume = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    return (
        <>
            {!mobileViewport ?
                <Box id='resume' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#673ab7', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography>View or download my resume here!</Typography>
                    </Card>
                </Box>
                :
                <Box id='resume' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#673ab7', height: '95vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography>Welcome, I'm Caleb.</Typography>
                        <Typography>I'm a full stack developer.</Typography>
                    </Card>
                </Box>
            }
        </>
    )

}

export default Resume