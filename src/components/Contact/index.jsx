import { Typography, Box, Grid, Card, TextField, Button, useMediaQuery } from '@mui/material'
import { Send } from '@mui/icons-material'

const Contact = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    // Notes:
    // Need to add value & onChange events to input fields, as well as a onSubmit function for the form.
    // Error & Success messages would look good as toast components

    return (
        <>
            {!mobileViewport ?
                <Box id='contact' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#ffeb3b', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography variant='h3' align='center'>Contact</Typography>
                        <Grid align='center'>
                            <form>
                                <TextField id='name' variant='filled' sx={{ m: 1, width: '65%' }} label='Name' name='name' placeholder='Enter your name' type='text' margin='normal' fullWidth required/>
                                <TextField id='email' variant='filled' sx={{ m: 1, width: '65%' }} label='Email' name='email' placeholder='Enter your email' type='email' margin='normal' fullWidth required/>
                                <TextField id='message' variant='filled' sx={{ m: 1, width: '65%' }} label='Message' name='message' placeholder='Enter your message' type='text' margin='normal' fullWidth multiline rows={7} required/>
                            </form>
                            <Button variant='contained' endIcon={<Send/>} size='large' sx={{ width: '20%' }}>Send</Button>
                        </Grid>
                    </Card>
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