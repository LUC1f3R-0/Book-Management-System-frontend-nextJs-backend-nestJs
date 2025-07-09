'use client';

import React from 'react';
import {  Box,  CircularProgress,  Typography,  Container,  Paper,  LinearProgress,  Skeleton,  Fade} from '@mui/material';
import { keyframes } from '@mui/system';

// Custom animations
const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

interface LoadingProps {
  variant?: 'default' | 'form' | 'page' | 'skeleton';
  message?: string;
  progress?: number;
  showProgress?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  variant = 'default',
  message = 'Loading...',
  progress,
  showProgress = false
}) => {
  // Default Loading (Full Screen)
  if (variant === 'default') {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          zIndex: 9999
        }}
      >
        <Fade in timeout={500}>
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              animation: `${float} 3s ease-in-out infinite`
            }}
          >
            <Box
              sx={{
                mb: 3,
                animation: `${pulse} 2s ease-in-out infinite`
              }}
            >
              <CircularProgress
                size={80}
                thickness={4}
                sx={{
                  color: 'white',
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round',
                  }
                }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
                letterSpacing: '0.5px'
              }}
            >
              {message}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.8,
                maxWidth: '300px'
              }}
            >
              Please wait while we set things up for you
            </Typography>
          </Box>
        </Fade>
      </Box>
    );
  }

  // Form Loading (Overlay for forms)
  if (variant === 'form') {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          borderRadius: 2,
          zIndex: 10
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: 'primary.main',
            mb: 2
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 1
          }}
        >
          {message}
        </Typography>
        {showProgress && progress !== undefined && (
          <Box sx={{ width: '200px', mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                }
              }}
            />
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: 'center',
                mt: 1,
                color: 'text.secondary'
              }}
            >
              {Math.round(progress)}% Complete
            </Typography>
          </Box>
        )}
      </Box>
    );
  }

  // Page Loading (Content area)
  if (variant === 'page') {
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
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
              textAlign: 'center'
            }}
          >
            <Box
              sx={{
                mb: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-flex'
                }}
              >
                <CircularProgress
                  size={80}
                  thickness={4}
                  sx={{
                    color: 'primary.main',
                    animation: `${pulse} 2s ease-in-out infinite`
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700
                    }}
                  >
                    {progress ? `${Math.round(progress)}%` : '...'}
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                mb: 2
              }}
            >
              {message}
            </Typography>
            
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              We're preparing your experience
            </Typography>

            {showProgress && (
              <Box sx={{ width: '100%', mt: 3 }}>
                <LinearProgress
                  variant={progress !== undefined ? "determinate" : "indeterminate"}
                  value={progress}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 3,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                    }
                  }}
                />
              </Box>
            )}

            <Box
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                gap: 1
              }}
            >
              {[0, 1, 2].map((index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    animation: `${pulse} 1.5s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  }

  // Skeleton Loading (Content placeholder)
  if (variant === 'skeleton') {
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
            {/* Header skeleton */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Skeleton
                variant="text"
                width="60%"
                height={40}
                sx={{
                  mx: 'auto',
                  mb: 2,
                  background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                  backgroundSize: '200% 100%',
                  animation: `${shimmer} 1.5s infinite`
                }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={24}
                sx={{
                  mx: 'auto',
                  mb: 3,
                  background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                  backgroundSize: '200% 100%',
                  animation: `${shimmer} 1.5s infinite`
                }}
              />
            </Box>

            {/* Form skeleton */}
            <Box sx={{ mb: 3 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={56}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                  backgroundSize: '200% 100%',
                  animation: `${shimmer} 1.5s infinite`
                }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={56}
                sx={{
                  mb: 2,
                  borderRadius: 1,
                  background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                  backgroundSize: '200% 100%',
                  animation: `${shimmer} 1.5s infinite`
                }}
              />
            </Box>

            {/* Button skeleton */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={48}
              sx={{
                mb: 3,
                borderRadius: 2,
                background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                backgroundSize: '200% 100%',
                animation: `${shimmer} 1.5s infinite`
              }}
            />

            {/* Social buttons skeleton */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Skeleton
                variant="rectangular"
                width="50%"
                height={48}
                sx={{
                  borderRadius: 2,
                  background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                  backgroundSize: '200% 100%',
                  animation: `${shimmer} 1.5s infinite`
                }}
              />
              <Skeleton
                variant="rectangular"
                width="50%"
                height={48}
                sx={{
                  borderRadius: 2,
                  background: `linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)`,
                  backgroundSize: '200% 100%',
                  animation: `${shimmer} 1.5s infinite`
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  }

  return null;
};

export default Loading;