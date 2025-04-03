import React from 'react';
import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';
import { AccountBalance, Build, Announcement, Group, Event, Notifications, ArrowForward } from '@mui/icons-material';
import { LineChart, PieChart } from '@mui/x-charts';

function Dashboard() {
  // Enhanced stats
  const stats = [
    { title: 'Administration Fund', value: '$50,000', icon: <AccountBalance />, trend: '2.5% ▲' },
    { title: 'Capital Works Fund', value: '$100,000', icon: <AccountBalance />, trend: '1.8% ▲' },
    { title: 'Pending Maintenance', value: '5', icon: <Build />, status: '2 High Priority' },
    { title: 'Active Notices', value: '3', icon: <Announcement />, latest: 'New AGM Notice' },
  ];

  // Chart data
  const financialData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const maintenanceData = [
    { id: 0, value: 5, label: 'Pending' },
    { id: 1, value: 12, label: 'Completed' },
    { id: 2, value: 3, label: 'In Progress' },
  ];

  // Notifications
  const notifications = [
    'AGM scheduled for April 15th',
    'New maintenance request received',
    'Quarterly financial report available'
  ];

  // Quick actions
  const quickActions = [
    { label: 'Add Notice', icon: <Announcement /> },
    { label: 'Schedule Meeting', icon: <Event /> },
    { label: 'Create Report', icon: <Description /> }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        DLF Camellias
      </Typography>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 160,
                position: 'relative',
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 1 }}>
                {stat.icon}
              </Box>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {stat.title}
              </Typography>
              <Typography component="p" variant="h4">
                {stat.value}
              </Typography>
              {stat.trend && (
                <Typography variant="body2" color="text.secondary" sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                  {stat.trend}
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Financial Trends
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
              series={[
                {
                  data: financialData,
                },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Maintenance Status
            </Typography>
            <PieChart
              series={[
                {
                  data: maintenanceData,
                },
              ]}
              width={400}
              height={200}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Notifications and Quick Actions */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              <Notifications sx={{ verticalAlign: 'middle', mr: 1 }} />
              Notifications
            </Typography>
            <Box sx={{ maxHeight: 200, overflowY: 'auto' }}>
              {notifications.map((note, index) => (
                <Box key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: '1rem', mr: 1 }} />
                  <Typography variant="body2">{note}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              {quickActions.map((action, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ height: 100 }}
                    startIcon={action.icon}
                  >
                    {action.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
