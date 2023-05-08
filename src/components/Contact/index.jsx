import { useState, useRef } from 'react'
import { Typography, Box, Grid, Card, TextField, Button, Alert, Snackbar, IconButton, useMediaQuery } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Send, Close } from '@mui/icons-material'
import { validateEmail } from '../../utils/helpers'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const mobileViewport = useMediaQuery('(max-width:600px)')

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openFailure, setOpenFailure] = useState(false)
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

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                e.target.reset()
                setOpenSuccess(true)
            }, (error) => {
                console.log(error.text)
                setOpenFailure(true)
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSuccess(false)
        setOpenFailure(false)
    }

    // const action = (
    //     <>
    //         <IconButton
    //             size='small'
    //             aria-label='close'
    //             onClick={handleClose}
    //         >
    //             <Close fontSize='small' />
    //         </IconButton>
    //     </>
    // )

    // Notes:
    // Need to add value & onChange events to input fields, as well as a onSubmit function for the form.
    // Error & Success messages would look good as toast components
    // Form is looking a little large on wide desktop views
    // Can't figure out how to get icon button on alert snackbar, action is not working
    // Would like to implement loading status on send button, if not change LoadingButton back to regular button

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
                                <LoadingButton type='submit' variant='contained' endIcon={<Send />} size='large' sx={{ width: '20%', my: '2%' }}>Send</LoadingButton>
                                <Snackbar
                                    open={openSuccess}
                                    autoHideDuration={5000}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                >
                                    <Alert severity='success' variant='filled' sx={{ width: '100%' }}>
                                        Email sent successfully!
                                    </Alert>
                                </Snackbar>
                                <Snackbar
                                    open={openFailure}
                                    autoHideDuration={5000}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                >
                                    <Alert severity='error' variant='filled' sx={{ width: '100%' }}>
                                        Something went wrong, please try again!
                                    </Alert>
                                </Snackbar>
                            </form>
                        </Grid>
                    </Card>
                </Box>
                :
                <Box id='contact' display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#e0e0e0', height: '95.5vh' }}>
                    <Card elevation={9} sx={{ minWidth: '85%', minHeight: '40vh' }}>
                        <Typography variant='h3' align='center'>Contact</Typography>
                        <Grid align='center'>
                            {errorMessage ?
                                <Alert severity='error' variant='filled' sx={{ mx: '17%' }}>{errorMessage}</Alert>
                                :
                                null
                            }
                            <form ref={form} onSubmit={handleSubmit} action='https://formsubmit.co/calebfunderburk@icloud.com' method='POST'>
                                <TextField id='name' variant='filled' sx={{ m: 1, width: '80%' }} label='Name' name='name' placeholder='Enter your name' type='text' margin='normal' fullWidth required onChange={handleChange} onBlur={handleChange} />
                                <TextField id='email' variant='filled' sx={{ m: 1, width: '80%' }} label='Email' name='email' placeholder='Enter your email' type='email' margin='normal' fullWidth required onChange={handleChange} onBlur={handleChange} />
                                <TextField id='message' variant='filled' sx={{ m: 1, width: '80%' }} label='Message' name='message' placeholder='Enter your message' type='text' margin='normal' fullWidth multiline rows={7} required onChange={handleChange} onBlur={handleChange} />
                                <LoadingButton type='submit' variant='contained' endIcon={<Send />} size='large' sx={{ width: '40%', my: '2%' }}>Send</LoadingButton>
                                <Snackbar
                                    open={openSuccess}
                                    autoHideDuration={5000}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                >
                                    <Alert severity='success' variant='filled' sx={{ width: '100%' }}>
                                        Email sent successfully!
                                    </Alert>
                                </Snackbar>
                                <Snackbar
                                    open={openFailure}
                                    autoHideDuration={5000}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                >
                                    <Alert severity='error' variant='filled' sx={{ width: '100%' }}>
                                        Something went wrong, please try again!
                                    </Alert>
                                </Snackbar>
                            </form>
                        </Grid>
                    </Card>
                </Box>
            }
        </>
    )

}

export default Contact