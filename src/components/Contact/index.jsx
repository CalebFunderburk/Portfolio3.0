import { Typography, Box, Grid, Card, TextField, Button, useMediaQuery } from '@mui/material'
import { Send } from '@mui/icons-material'

const Contact = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    // Notes:
    // Need to add value & onChange events to input fields, as well as a onSubmit function for the form.
    // Error & Success messages would look good as toast components
    // Form is looking a little large on wide desktop views

    return (
        <>
            {!mobileViewport ?
                <Box id='contact' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography variant='h3' align='center'>Contact</Typography>
                        <Grid align='center'>
                            <form>
                                <TextField id='name' variant='filled' sx={{ m: 1, width: '65%' }} label='Name' name='name' placeholder='Enter your name' type='text' margin='normal' fullWidth required/>
                                <TextField id='email' variant='filled' sx={{ m: 1, width: '65%' }} label='Email' name='email' placeholder='Enter your email' type='email' margin='normal' fullWidth required/>
                                <TextField id='message' variant='filled' sx={{ m: 1, width: '65%' }} label='Message' name='message' placeholder='Enter your message' type='text' margin='normal' fullWidth multiline rows={7} required/>
                            </form>
                            <Button variant='contained' endIcon={<Send/>} size='large' sx={{ width: '20%', my: '2%' }}>Send</Button>
                        </Grid>
                    </Card>
                </Box>
                :
                <Box id='contact' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight:'50vh' }}>
                        <Typography variant='h3' align='center'>Contact</Typography>
                        <Grid align='center'>
                            <form>
                                <TextField id='name' variant='filled' sx={{ m: 1, width: '80%' }} label='Name' name='name' placeholder='Enter your name' type='text' margin='normal' fullWidth required/>
                                <TextField id='email' variant='filled' sx={{ m: 1, width: '80%' }} label='Email' name='email' placeholder='Enter your email' type='email' margin='normal' fullWidth required/>
                                <TextField id='message' variant='filled' sx={{ m: 1, width: '80%' }} label='Message' name='message' placeholder='Enter your message' type='text' margin='normal' fullWidth multiline rows={7} required/>
                            </form>
                            <Button variant='contained' endIcon={<Send/>} size='large' sx={{ width: '40%', my: '2%' }}>Send</Button>
                        </Grid>
                    </Card>
                </Box>
            }
        </>
    )

}

export default Contact