'use client';

import React from 'react';
import { Box, Typography, Button, Container, Paper, Grid, Avatar, Fade } from '@mui/material';
import { Login, PersonAdd, Security, Speed, Verified } from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Simple animations
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

const HomePage = () => {
  const handleAuth = (type: 'login' | 'register') => {
    console.log(`Navigating to ${type} page`);
    // Add your navigation logic here
    // router.push(`/${type}`);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Welcome Content */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3rem' },
                    fontWeight: 700,
                    color: 'white',
                    mb: 3,
                    lineHeight: 1.2
                  }}
                >
                  Welcome to
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    AuthFlow
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 4,
                    fontWeight: 300,
                    lineHeight: 1.4
                  }}
                >
                  Secure and beautiful authentication experience
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PersonAdd />}
                    onClick={() => handleAuth('register')}
                    sx={{
                      py: 2,
                      px: 4,
                      borderRadius: 3,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      bgcolor: 'white',
                      color: 'primary.main',
                      animation: `${pulse} 3s infinite`,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Login />}
                    onClick={() => handleAuth('login')}
                    sx={{
                      py: 2,
                      px: 4,
                      borderRadius: 3,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Sign In
                  </Button>
                </Box>

                {/* Features */}
                <Box sx={{ display: 'flex', gap: 4, color: 'white' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Security sx={{ fontSize: 20, color: '#FFD700' }} />
                    <Typography variant="body2">Secure</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Speed sx={{ fontSize: 20, color: '#FFD700' }} />
                    <Typography variant="body2">Fast</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Verified sx={{ fontSize: 20, color: '#FFD700' }} />
                    <Typography variant="body2">Reliable</Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Right Side - Auth Card */}
          <Grid item xs={12} md={6}>
            <Fade in timeout={1500}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  animation: `${float} 4s ease-in-out infinite`
                }}
              >
                <Paper
                  elevation={20}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    maxWidth: 400,
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'primary.main',
                      mx: 'auto',
                      mb: 3,
                      fontSize: '2rem'
                    }}
                  >
                    🚀
                  </Avatar>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 2
                    }}
                  >
                    Ready to Start?
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 4,
                      lineHeight: 1.6
                    }}
                  >
                    Join thousands of users who trust AuthFlow for their authentication needs
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      startIcon={<PersonAdd />}
                      onClick={() => handleAuth('register')}
                      sx={{
                        py: 2,
                        borderRadius: 2,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1976D2 30%, #0288D1 90%)',
                        }
                      }}
                    >
                      Create Account
                    </Button>

                    <Button
                      variant="outlined"
                      fullWidth
                      size="large"
                      startIcon={<Login />}
                      onClick={() => handleAuth('login')}
                      sx={{
                        py: 2,
                        borderRadius: 2,
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.dark',
                          backgroundColor: 'primary.main',
                          color: 'white'
                        }
                      }}
                    >
                      Sign In
                    </Button>
                  </Box>

                  <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="caption" color="text.secondary">
                      🔒 Your data is secure with us
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;