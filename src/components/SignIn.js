import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const SignIn = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      alert('Login successful!');
      console.log(response);
      navigate('/dashboard'); // Redirect after login
    } catch (error) {
      alert(error.detail || 'Error during login.');
    }
  };

  return (
    <Container maxWidth="lg" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(90deg, rgba(36,198,255,1) 0%, rgba(69,114,248,1) 100%)' }}>
      <div style={{ width: '100%', maxWidth: '500px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
          Don't have an account? <Link component="button" variant="body2" onClick={() => navigate('/signup')}>Sign Up</Link>
        </Typography>
      </div>
    </Container>
  );
};

export default SignIn;
