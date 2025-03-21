// import { useState } from "react";
// import { useForm, Controller, FormProvider } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Button,
  Divider,
  Tooltip,
  TextField,
  CardHeader,
  Typography,
  IconButton,
  CardContent,
  InputAdornment,
} from '@mui/material';
// import { useSetState } from "src/hooks/use-set-state";

import { DashboardContent } from 'src/layouts/dashboard';
import { FooterBase } from 'src/layouts/core/footer-base';
import emailVerificationThum from 'src/pages/app/Images/email-verication-video-thumbnail.jpg';

import { Iconify } from 'src/components/iconify';
import { TabsRouter } from 'src/components/Tabs/tabs';
import BigCard from 'src/components/big-card/big-card';
// import { Form, Field } from "src/components/hook-form";
import PageHeader from 'src/components/page-header/page-header';

import { listItems } from './api-card-list';

//---------------------------------------------------
export default function ApiPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // const handleCopy = (type) => {
  //   if (type === 'api') {
  //     navigator.clipboard.writeText(apivalues.password);

  //     toast.success(`API key copied to clipboard!`, {
  //       style: {
  //         marginTop: '15px',
  //       },
  //     });
  //   } else {
  //     navigator.clipboard.writeText(secretvalues.password);
  //     //
  //     toast.success(`Secret key copied to clipboard!`, {
  //       style: {
  //         marginTop: '15px',
  //       },
  //     });
  //   }
  // };

  //   const methods = useForm();

  const STATUS_OPTIONS = [
    { value: 'credits', label: 'Credit Summary', icon: 'lucide:square-menu' },
    { value: 'api', label: 'API', icon: 'icon-park-outline:api' },
    { value: 'team-members', label: 'Team Members', icon: 'fluent:people-team-16-filled' },
    { value: 'activity-log', label: 'Activity Log', icon: 'material-symbols:work-history-rounded' },
    { value: 'time-zone', label: 'Time Zone', icon: 'fluent:globe-clock-24-filled' },
  ];


  return (
    <>
      <DashboardContent maxWidth="xl">
        <PageHeader
          title="API"
          description="Generate your API Key and Secret Key to perform email verifications directly through the Pabbly Email Verification API. Learn more"
          showButton={false}
        />

        {/* Fixing the Tabs issue */}
        {/* <Tabs
          value={
            STATUS_OPTIONS.find((tab) => location.pathname.includes(tab.value))?.value || 'credits'
          }
          sx={{ mt: 3 }}
        >
          {STATUS_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              onClick={() => navigate(`/app/settings/${tab.value}`)}
              label={tab.label}
              icon={<Iconify icon={tab.icon} />}
              sx={{
                color: location.pathname.includes(tab.value) ? 'black' : '#637381',
                borderBottom: location.pathname.includes(tab.value) ? '2px solid black' : 'none',
                px: 2,
              }}
            />
          ))}
        </Tabs> */}
        <TabsRouter STATUS_OPTIONS={STATUS_OPTIONS}/>
        <BigCard
          items={listItems.items}
          style={listItems.style}
          coverSrc={emailVerificationThum}
          sx={{ mt: 3 }}
          heading="Points To Remember"
        />



<Card sx={{ mt: 3 }}>
        <CardHeader
          sx={{
            pt: 3,
            px: 3,
            pb: 2,
          }}
          title={
            <Box display="inline-block">
              <Tooltip title="Easily verify a single email address here." arrow placement="top">
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  API
                </Typography>
              </Tooltip>
            </Box>
          }
        />
        <Divider />
        <CardContent>
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="API Key"
              value="●●●●●●●●●●●●●●●●●●"
              helperText={
                <>
                  Use the &apos;Copy&apos; button to securely copy it. Keep it private and
                  don&apos;t share with others.{' '}
                  <a
                    href="https://forum.pabbly.com/threads/api.26313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#078DEE', textDecoration: 'underline' }}
                  >
                    Learn more
                  </a>
                </>
              }
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Copy API Key" placement="top" arrow>
                      <IconButton  edge="end">
                        <Iconify icon="solar:copy-bold" width={18} />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            {/* <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
              Secret Key
            </Typography> */}
            <TextField
              fullWidth
              variant="outlined"
              label="Secret Key"
              type="text"
              value="●●●●●●●●●●●●●●●●●●"
              helperText={
                <>
                  Use the &apos;Copy&apos; button to securely copy it. Keep it private and
                  don&apos;t share with others.{' '}
                  <a
                    href="https://forum.pabbly.com/threads/api.26313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#078DEE', textDecoration: 'underline' }}
                  >
                    Learn more
                  </a>
                </>
              }
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Copy Secret Key" placement="top" arrow>
                      <IconButton  edge="end">
                        <Iconify icon="solar:copy-bold" width={18} />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: '24px' }}
            // onClick={handleDialogOpen}
          >
            Generate API Keys
          </Button>
        </CardContent>
      </Card>
      </DashboardContent>
      <FooterBase />
    </>
  );
}
