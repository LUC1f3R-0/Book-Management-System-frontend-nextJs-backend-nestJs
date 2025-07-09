    'use client';

    import React, { useState } from 'react';
    import {
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Container,
    Alert,
    InputAdornment,
    IconButton,
    Link,
    Divider,
    FormControlLabel,
    Checkbox,
    CircularProgress
    } from '@mui/material';
    import {
    Visibility,
    VisibilityOff,
    Email,
    Lock,
    Google,
    GitHub
    } from '@mui/icons-material';
    import { useRouter } from 'next/navigation';

    const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('error');
    
    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};
        
        // Email validation
        if (!formData.email) {
        newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        }
        
        // Password validation
        if (!formData.password) {
        newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: name === 'rememberMe' ? checked : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setLoading(true);
        setAlertMessage('');
        
        try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock authentication logic
        if (formData.email === 'admin@example.com' && formData.password === 'password123') {
            setAlertMessage('Login successful! Redirecting...');
            setAlertSeverity('success');
            
            // Simulate redirect
            setTimeout(() => {
            // router.push('/dashboard');
            console.log('Redirecting to dashboard...');
            }, 1000);
        } else {
            setAlertMessage('Invalid email or password. Please try again.');
            setAlertSeverity('error');
        }
        } catch (error) {
        setAlertMessage('An error occurred. Please try again.');
        setAlertSeverity('error');
        } finally {
        setLoading(false);
        }
    };

    const handleSocialLogin = (provider) => {
        console.log(`Logging in with ${provider}`);
        // Implement social login logic here
    };

    return (
        <Container component="main" maxWidth="sm">
        <Box
            sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: 4
            }}
        >
            <Paper
            elevation={6}
            sx={{
                p: 4,
                borderRadius: 2,
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
            }}
            >
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                variant="h4"
                component="h1"
                sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1
                }}
                >
                Welcome Back
                </Typography>
                <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
                >
                Sign in to your account to continue
                </Typography>
            </Box>

            {/* Alert Message */}
            {alertMessage && (
                <Alert
                severity={alertSeverity}
                sx={{ mb: 3 }}
                onClose={() => setAlertMessage('')}
                >
                {alertMessage}
                </Alert>
            )}

            {/* Login Form */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <Email color="action" />
                    </InputAdornment>
                    ),
                }}
                sx={{ mb: 2 }}
                />

                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <Lock color="action" />
                    </InputAdornment>
                    ),
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                sx={{ mb: 2 }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Link
                    href="#"
                    variant="body2"
                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                    Forgot password?
                </Link>
                </Box>

                <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                    mt: 2,
                    mb: 3,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #0288D1 90%)',
                    },
                }}
                >
                {loading ? (
                    <CircularProgress size={24} color="inherit" />
                ) : (
                    'Sign In'
                )}
                </Button>

                <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                    Or continue with
                </Typography>
                </Divider>

                {/* Social Login Buttons */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Google />}
                    onClick={() => handleSocialLogin('Google')}
                    sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem'
                    }}
                >
                    Google
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GitHub />}
                    onClick={() => handleSocialLogin('GitHub')}
                    sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem'
                    }}
                >
                    GitHub
                </Button>
                </Box>

                {/* Sign Up Link */}
                <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    Don't have an account?{' '}
                    <Link
                    href="#"
                    variant="body2"
                    sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        fontWeight: 600,
                        '&:hover': { textDecoration: 'underline' }
                    }}
                    >
                    Sign up here
                    </Link>
                </Typography>
                </Box>
            </Box>

            {/* Demo Credentials */}
            <Box
                sx={{
                mt: 3,
                p: 2,
                bgcolor: 'grey.50',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'grey.200'
                }}
            >
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                Demo Credentials:
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary">
                Email: admin@example.com
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary">
                Password: password123
                </Typography>
            </Box>
            </Paper>
        </Box>
        </Container>
    );
    };

    export default LoginForm;