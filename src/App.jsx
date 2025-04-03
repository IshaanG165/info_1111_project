import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, Box, CircularProgress } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Committee from './pages/Committee';
import Finance from './pages/Finance';
import Maintenance from './pages/Maintenance';
import Contact from './pages/Contact';
import Documents from './pages/Documents';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '60vh',
          textAlign: 'center',
          p: 3
        }}>
          <h1>Something went wrong</h1>
          <p>Please try refreshing the page or contact support if the problem persists.</p>
        </Box>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner = () => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '60vh' 
  }}>
    <CircularProgress />
  </Box>
);

function App() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Navbar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            py: 3,
            px: 2,
            backgroundColor: 'background.default'
          }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/notices" element={<div>Notices Page (Coming Soon)</div>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  minHeight: '60vh',
                  textAlign: 'center',
                  p: 3
                }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you are looking for does not exist.</p>
                </Box>
              } />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </ErrorBoundary>
  );
}

export default App;
