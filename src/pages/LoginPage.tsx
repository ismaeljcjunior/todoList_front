
import React, { useState } from 'react'
import { Typography, TextField, Button, Box, Container } from '@mui/material'
import axios from 'axios'
import api from './../services/apiService';
const API_URL = 'http://localhost:3333'

export const LoginPage = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)
    const [login_user, setLogin_User] = useState('')
    const [password_user, setPassword_User] = useState('')
    const [name_user, setName_User] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setErrorMessage('')
        try {
            if (isCreatingAccount) {
                const response = await axios.post(`${API_URL}/newUser`, {
                    login_user,
                    password_user,
                    name_user,
                })
                console.log(response.data)
                // Redirect to success page
            } else {
                const response = await axios.post(`${API_URL}/login`, {
                    login_user,
                    password_user,
                })
                console.log(response.data)
                // Redirect to success page
            }
        } catch (error) {
            setErrorMessage('Invalid username or password')
            console.error(error)
        }
    }
    return (
        <Container maxWidth="sm">
            <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }}
            >
                <Typography component="h1" variant="h5">
                    {isCreatingAccount ? 'Create account' : 'Login'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    {isCreatingAccount && (
                        <TextField margin="normal" fullWidth id="name" label="Name" name="name" autoComplete="name" autoFocus value={name_user} onChange={(event) => setName_User(event.target.value)}
                        />
                    )}
                    <TextField margin="normal" fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus value={login_user} onChange={(event) => setLogin_User(event.target.value)}
                    />
                    <TextField margin="normal" fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password_user} onChange={(event) => setPassword_User(event.target.value)}
                    />
                    {errorMessage && (
                        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                            {errorMessage}
                        </Typography>
                    )}
                    <Button
                        type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}          >
                        {isCreatingAccount ? 'Create account' : 'Login'}
                    </Button>
                    <Button
                        fullWidth variant="outlined" onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                    >
                        {isCreatingAccount ? 'Back to Login' : 'Create Account'}

                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
