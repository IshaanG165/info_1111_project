import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      light: '#34495e',
      dark: '#1a252f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3498db',
      light: '#5dade2',
      dark: '#2980b9',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    error: {
      main: '#e74c3c',
    },
    success: {
      main: '#2ecc71',
    },
    warning: {
      main: '#f39c12',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#2c3e50',
      fontSize: '2.125rem',
    },
    h6: {
      fontWeight: 500,
      color: '#2c3e50',
      fontSize: '1.25rem',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.05)',
    '0 4px 8px rgba(0,0,0,0.05)',
    '0 6px 12px rgba(0,0,0,0.1)',
    '0 8px 16px rgba(0,0,0,0.1)',
    '0 10px 20px rgba(0,0,0,0.1)',
    '0 12px 24px rgba(0,0,0,0.1)',
    '0 14px 28px rgba(0,0,0,0.1)',
    '0 16px 32px rgba(0,0,0,0.1)',
    '0 18px 36px rgba(0,0,0,0.1)',
    '0 20px 40px rgba(0,0,0,0.1)',
    '0 22px 44px rgba(0,0,0,0.1)',
    '0 24px 48px rgba(0,0,0,0.1)',
    '0 26px 52px rgba(0,0,0,0.1)',
    '0 28px 56px rgba(0,0,0,0.1)',
    '0 30px 60px rgba(0,0,0,0.1)',
    '0 32px 64px rgba(0,0,0,0.1)',
    '0 34px 68px rgba(0,0,0,0.1)',
    '0 36px 72px rgba(0,0,0,0.1)',
    '0 38px 76px rgba(0,0,0,0.1)',
    '0 40px 80px rgba(0,0,0,0.1)',
    '0 42px 84px rgba(0,0,0,0.1)',
    '0 44px 88px rgba(0,0,0,0.1)',
    '0 46px 92px rgba(0,0,0,0.1)',
    '0 48px 96px rgba(0,0,0,0.1)',
  ],
});

export default theme;
