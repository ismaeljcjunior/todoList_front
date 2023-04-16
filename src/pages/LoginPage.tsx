import React, { useState } from 'react'
import { Typography, TextField, Button, Box, Container } from '@mui/material'
import axios from 'axios'
const API_URL = 'https://example.com/api'

export const LoginPage = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setErrorMessage('')
        try {
            if (isCreatingAccount) {
                const response = await axios.post(`${API_URL}/users`, {
                    username,
                    password,
                    name,
                })
                console.log(response.data)
                // Redirect to success page
            } else {
                const response = await axios.post(`${API_URL}/auth`, {
                    username,
                    password,
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
                        <TextField margin="normal" fullWidth id="name" label="Name" name="name" autoComplete="name" autoFocus value={name} onChange={(event) => setName(event.target.value)}
                        />
                    )}
                    <TextField margin="normal" fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus value={username} onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField margin="normal" fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)}
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
