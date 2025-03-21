import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Card, Button, CardMedia, IconButton, Typography } from '@mui/material';
// import { CONFIG } from 'src/config-global';
// import { _dashboardfolderlist } from 'src/_mock/assets';
import { DashboardContent } from 'src/layouts/dashboard';
import { FooterBase } from 'src/layouts/core/footer-base';
import gethelpThumb from 'src/pages/app/Images/gethelp.png';
import emailVerificationThum from 'src/pages/app/Images/email-verication-video-thumbnail.jpg';

import { Iconify } from 'src/components/iconify';
import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
// import { StatsCards } from 'src/components/stats-cards/stats-cards';

// import { BasicSimpleTree } from 'src/sections/dashboard/components/basic-simple-tree';
// import { DashboardListView } from 'src/sections/dashboard/components/dashboard-table/dashboard-list-view';

import { listItems } from './dashboard-big-card-list-items';
//---------------------------------------------------------------------------
export default function Page() {
  const theme = useTheme();

  

  return (
    <>
      <DashboardContent maxWidth="xl">
        <PageHeader
          title="Help & Tutorials"
          description="Tell us about your problem, and we’ll find you a solution. "
          showButton={false}
        />

        {/* main bottom section */}

        <Grid container spacing={3}>
          {/* basic simple tree | left component */}

          {/* right components  */}
          <Grid item width="100vw">
            <Grid sx={{ mt: 4,width:"100%" }}>
              <BigCard
                items={listItems.items}
                style={listItems.style}
                coverSrc={gethelpThumb}
                heading="Points To Remember!"
                subheading=""
                showButton="true"
                buttonText="Ask Question"
                buttonEndIcon={false}
                palyButton={false}
              />
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Typography variant="h4">Tutorial</Typography>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                color: '#078DEE',
                backgroundColor: 'transparent',
                border: '1px solid',
                borderColor: '#078DEE',
                '&:hover': {
                  backgroundColor: '#ebf6fe',
                },
              }}
            >
              View All Videos
            </Button>
          </Box>
        </Box>
        <Card sx={{width:309,p:1,mt:{xs:3}}}>
          <Box
            position="relative"
            sx={{ borderRadius: '24px', overflow: 'hidden', backgroundColor: 'red' }}
          >
            <CardMedia
              component="img"
              src={emailVerificationThum}
              title="Cover Image"
              sx={{
                height: '100%',
                width: '100%',
                cursor: 'pointer',
                objectFit: 'contain',
                borderRadius: '16px ',
                backgroundColor: 'green',
              }}
            />
            <IconButton
              aria-label="play"
              sx={{
                padding: '0px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#078DEE',
                animation: 'pulse 2s infinite',
                zIndex: 2,
                '@keyframes pulse': {
                  '0%': { transform: 'translate(-50%, -50%) scale(1)' },
                  '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 7 },
                  '100%': { transform: 'translate(-50%, -50%) scale(1)' },
                },
              }}
            >
              <Iconify
                icon="icon-park-solid:play"
                width={50}
                height={50}
                sx={{ backgroundColor: 'white', borderRadius: 8, p: 0 }}
              />
            </IconButton>
          </Box>
            <Box sx={{mt:2}}>
              <Typography variant="body2" sx={{fontWeight:800}}>
              Getting Started with Pabbly Email Verification
              </Typography>
            </Box>
        </Card>
        {/* footer section */}
      </DashboardContent>
      <FooterBase />
    </>
  );
}
