import { useState } from 'react'
import { Typography, Box, Card, CardMedia, Button, Modal, Fade, Backdrop, useMediaQuery } from '@mui/material'
import { Preview, Download, Close } from '@mui/icons-material'

const Resume = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 3
    }

    const modal = (
        <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500
                }
            }}
        >
            <Fade in={open}>
                <Card align='right' sx={modalStyle}>
                <Button variant='contained' startIcon={<Close/>} onClick={handleClose} sx={{ mb: 3 }} >Close</Button>
                    <CardMedia component='iframe' src='src\assets\pdfs\Full Stack Development Resume.pdf' alt='resume' height='95%' width='100%'/>
                </Card>
            </Fade>
        </Modal>
    )

    return (
        <>
            {!mobileViewport ?
                <Box id='resume' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Typography variant='h2' align='center' pt='10%'>My Resume</Typography>
                    <Card elevation={9} align='center' sx={{ minWidth: '85%', minHeight:'50vh', mx: '4%', mt: '10%', p: '15vh' }}>
                        <Button variant='contained' size='large' endIcon={<Preview/>} onClick={handleOpen}>View in Browser</Button>
                        {modal}
                        <Typography variant='h5'>or</Typography>
                        <a download href='src\assets\pdfs\Full Stack Development Resume.pdf'><Button variant='contained' size='large' endIcon={<Download/>}>Download</Button></a>
                    </Card>
                </Box>
                :
                <Box id='resume' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography>View or download my resume here!</Typography>
                    </Card>
                </Box>
            }
        </>
    )

}

export default Resume