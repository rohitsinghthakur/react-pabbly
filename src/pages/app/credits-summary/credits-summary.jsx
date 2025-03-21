import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
import { useTheme } from '@mui/material/styles';
// import { useSetState } from 'src/hooks/use-set-state';

import { CONFIG } from 'src/config-global';
// import { varAlpha } from 'src/theme/styles';
import { _creditsSummaryListData } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { FooterBase } from 'src/layouts/core/footer-base';
// import { _dashboardfolderlist } from 'src/_mock/assets';

// import { Label } from 'src/components/label';
// import { Iconify } from 'src/components/iconify';
import { TabsRouter } from 'src/components/Tabs/tabs';
import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-cards';
// import { BasicSimpleTree } from 'src/sections/dashboard/components/basic-simple-tree';
// import { DashboardListView } from 'src/sections/dashboard/components/dashboard-table/dashboard-list-view';
import { CreditsListView } from 'src/sections/credits/components/credits-table/credits-list-view';
// import { listItems } from './dashboard-big-card-list-items';
//---------------------------------------------------------------------------
export default function CreditsSummary() {
  const theme = useTheme();
  const [tableData, setTableData] = useState([{ value: 'active' }]);
  const tabName = 'credits';
  // const filters = useSetState({
  //   name: '',
  //   status: 'all',
  //   startDate: null,
  //   endDate: null,
  // });
  // const STATUS_OPTIONS = [
  //   { value: 'credit-summary', label: 'Credit Summary' },
  //   { value: 'api', label: 'API' },
  //   { value: 'team-members', label: 'Team Members' },
  //   { value: 'activity-log', label: 'Activity Log' },
  //   { value: 'time-zone', label: 'Time Zone' },
  // ];
  const STATUS_OPTIONS = [
    { value: 'credits', label: 'Credit Summary', icon: 'lucide:square-menu' },
    { value: 'api', label: 'API', icon: 'icon-park-outline:api' },
    { value: 'team-members', label: 'Team Members', icon: 'fluent:people-team-16-filled' },
    { value: 'activity-log', label: 'Activity Log', icon: 'material-symbols:work-history-rounded' },
    { value: 'time-zone', label: 'Time Zone', icon: 'fluent:globe-clock-24-filled' },
  ];
  const TABLE_HEAD = [
    { id: 'Status/Date', label: 'Status/Date', align: 'left', width: '45%' },
    {
      id: 'Verification Summary',
      label: 'Verification Summary',
      align: 'left',
    },
    // { id: 'totalAmount', label: 'Price', width: 140 },
    { id: 'Credits', label: 'Credits', align: 'right', width: '33%' },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <DashboardContent maxWidth="xl">
        <PageHeader
          title="Credits Summary"
          description="View a summary of your email verification credits."
          showButton={false}
        />

        {/* <Tabs
         sx={{
           px: 2.5,
           boxShadow:`inset 0 -2px 0 0 ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
         }}
        >
          {STATUS_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              iconPosition="start"
              value={tab.value}
              label={tab.label}
              icon={
               <Iconify  variant={
                ((tab.value === 'all' || tab.value === filters.state.status) && 'filled') ||
                'soft'
              }>
                    {
                      (tab.value==="credit-summary" && <Iconify icon="lucide:square-menu" />) ||
                      (tab.value==="api" && <Iconify icon="icon-park-outline:api" />) ||
                      (tab.value==="team-members" && <Iconify icon="fluent:people-team-16-filled" />) ||
                      (tab.value==="activity-log" && <Iconify icon="material-symbols:work-history-rounded" />)||
                      (tab.value==="time-zone" && <Iconify icon="fluent:globe-clock-24-filled" />)
                    }
                     
              </Iconify>
              }
            />
          ))}
        </Tabs> */}
          <TabsRouter STATUS_OPTIONS={STATUS_OPTIONS} />
        {/* <Tabs
          value={STATUS_OPTIONS.findIndex((tab) => location.pathname.includes(tab.value))} // Match current route
          sx={{mt:3}}
        >
          {STATUS_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              onClick={() => navigate(`/app/settings/${tab.value}`)} // Navigate on click
              label={tab.label}
              icon={<Iconify icon={tab.icon} />}
              sx={{                
                color: location.pathname.includes(tab.value) ? 'black' : '#637381', // Active tab color
                borderBottom: location.pathname.includes(tab.value) ?'2px solid black':'none',
                px: 2, 
              }}
            />
          ))}
        </Tabs> */}

        {/* 3 cards with stats  */}
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
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

        <Box sx={{ mt: 3 }}>
          {/* <DashboardListView
            heading="Email Verification Logs"
            subheading="View all email verification activities, including type, date, summary, and credit usage. Use filters or search to find specific logs."
            searchbarIcon="mdi:filter"
            iconName="Filters"
            iconSx={{width:"20px",height:"20px",mr:1}}
            TABLE_HEAD={TABLE_HEAD}
            listItems={_creditsSummaryListData}
          /> */}
          <CreditsListView
            heading="Email Verification Logs"
            subheading="View all email verification activities, including type, date, summary, and credit usage. Use filters or search to find specific logs."
            searchbarIcon="mdi:filter"
            iconName="Filters"
            iconSx={{ width: '20px', height: '20px', mr: 1 }}
            TABLE_HEAD={TABLE_HEAD}
            listItems={_creditsSummaryListData}
          />
        </Box>

        {/* footer section */}
      </DashboardContent>
      <FooterBase />
    </>
  );
}
