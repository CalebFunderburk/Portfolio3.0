import { useState, useRef } from 'react'
import { Typography, Box, Grid, Card, TextField, Button, Alert, useMediaQuery } from '@mui/material'
import { Send } from '@mui/icons-material'
import { validateEmail } from '../../utils/helpers'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const form = useRef()

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)

            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log('Handle Form', formState)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log('Submit Form', formState)
        }

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                e.target.reset()
            }, (error) => {
                console.log(error.text)
            })
    }

    // Notes:
    // Need to add value & onChange events to input fields, as well as a onSubmit function for the form.
    // Error & Success messages would look good as toast components
    // Form is looking a little large on wide desktop views

    return (
        <>
            {!mobileViewport ?
                <Box id='contact' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ maxWidth: '80%', minHeight: '40vh' }}>
                        <Typography variant='h3' align='center'>Contact</Typography>
                        <Grid align='center'>
                            {errorMessage ?
                                <Alert severity='error' variant='filled' sx={{ mx: '17%' }}>{errorMessage}</Alert>
                                :
                                null
                            }
                            <form ref={form} onSubmit={handleSubmit} action='https://formsubmit.co/calebfunderburk@icloud.com' method='POST'>
                                <TextField id='name' variant='filled' sx={{ m: 1, width: '65%' }} label='Name' name='name' placeholder='Enter your name' type='text' margin='normal' fullWidth required onChange={handleChange} onBlur={handleChange} />
                                <TextField id='email' variant='filled' sx={{ m: 1, width: '65%' }} label='Email' name='email' placeholder='Enter your email' type='email' margin='normal' fullWidth required onChange={handleChange} onBlur={handleChange} />
                                <TextField id='message' variant='filled' sx={{ m: 1, width: '65%' }} label='Message' name='message' placeholder='Enter your message' type='text' margin='normal' fullWidth multiline rows={7} required onChange={handleChange} onBlur={handleChange} />
                                <br />
                                <Button type='submit' variant='contained' endIcon={<Send />} size='large' sx={{ width: '20%', my: '2%' }}>Send</Button>
                            </form>
                        </Grid>
                    </Card>
                </Box>
                :
                <Box id='contact' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight: '40vh' }}>
                        <Typography variant='h3' align='center'>Contact</Typography>
                        <Grid align='center'>
                            <form>
                                <TextField id='name' variant='filled' sx={{ m: 1, width: '80%' }} label='Name' name='name' placeholder='Enter your name' type='text' margin='normal' fullWidth required />
                                <TextField id='email' variant='filled' sx={{ m: 1, width: '80%' }} label='Email' name='email' placeholder='Enter your email' type='email' margin='normal' fullWidth required />
                                <TextField id='message' variant='filled' sx={{ m: 1, width: '80%' }} label='Message' name='message' placeholder='Enter your message' type='text' margin='normal' fullWidth multiline rows={7} required />
                            </form>
                            <Button variant='contained' endIcon={<Send />} size='large' sx={{ width: '40%', my: '2%' }}>Send</Button>
                        </Grid>
                    </Card>
                </Box>
            }
        </>
    )

}

export default Contact