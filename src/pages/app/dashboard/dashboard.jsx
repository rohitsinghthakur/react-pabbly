import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { FooterBase } from 'src/layouts/core/footer-base';
import emailVerificationThum from 'src/pages/app/Images/email-verication-video-thumbnail.jpg';

import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-cards';

import { FolderSection } from 'src/sections/dashboard/components/folder/dashboardfolder';
import { DashboardListView } from 'src/sections/dashboard/components/dashboard-table/dashboard-list-view';

import { listItems } from './dashboard-big-card-list-items';
//---------------------------------------------------------------------------
export default function Page() {
  const theme = useTheme();

  const TABLE_HEAD = [
      { id: 'Status/Name/Date', label: 'Status/Name/Date', align: 'left', width: '32%' },
      {
        id: 'Number of Emails/Credits Consumed',
        label: 'Number of Emails/Credits Consumed',
        align: 'left',
      },
      // { id: 'totalAmount', label: 'Price', width: 140 },
      { id: 'status', label: 'Action', align: 'right', width: '28%', pr: 9 },
    ];

  return (
    <>
      <DashboardContent maxWidth="xl">
        <PageHeader
          title="Dashboard"
          description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttonTitle="Verify Email"
        />

        {/* 3 cards with stats  */}
        <Box
  sx={{
    gap: { xs: 0, md: 3 }, // Reduce gap on small screens
    display: "grid",
    gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(3, 1fr)" },
  }}
>
  <StatsCards
    statsCardTitle="Email Credits Consumed"
    cardStats={32}
    icon={`${CONFIG.site.basePath}/assets/icons/stats/pi-chart.svg`}
    icon_color="#10CBF3"
    bg_gradient="#10CBF3"
  />
  <StatsCards
    statsCardTitle="Email Credits Remaining"
    cardStats={9968}
    icon={`${CONFIG.site.basePath}/assets/icons/stats/pi-chart2.svg`}
    icon_color="#1D88FA"
    bg_gradient="#1D88FA"
  />
  <StatsCards
    statsCardTitle="Total Number of Email Lists"
    cardStats={100}
    icon={`${CONFIG.site.basePath}/assets/icons/stats/group.svg`}
    icon_color="#28A645"
    bg_gradient="#28A645"
  />
</Box>


        {/* main bottom section */}

        <Grid container spacing={3}>
          {/* basic simple tree | left component */}
          <Grid item xs={12} sm={3} sx={{ mt: 3}}>
            <FolderSection
              
            />
          </Grid>

          {/* right components  */}
          <Grid item xs={12} sm={9}>
            <Grid sx={{ mt: 3 }}>
              <BigCard
                items={listItems.items}
                style={listItems.style}
                buttontitle="Verify Email"
                coverSrc={emailVerificationThum}
                heading="Verification Guidelines"
                subheader="Please adhere to the following guidelines when uploading your CSV file:"
                showButton="true"
              />
            </Grid>
            {/* <ProductList/> */}
            <Grid item xs={12} sm={9} sx={{ mt: 3 }}>
              <DashboardListView
                heading="Home"
                subheading="View all email verification activities, including type, date, summary, and credit usage. Use filters or search to find specific logs."
                isToolbar="true"
                searchbarIcon="uil:sync"
                iconSx={{width:"24px",height:"24px",}}
                TABLE_HEAD={TABLE_HEAD}

              />
            </Grid>
          </Grid>
        </Grid>

        {/* footer section */}
      </DashboardContent>
      <FooterBase />
    </>
  );
}
