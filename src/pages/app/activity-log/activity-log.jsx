import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { DashboardContent } from 'src/layouts/dashboard';
import { FooterBase } from 'src/layouts/core/footer-base';
import emailVerificationThum from 'src/pages/app/Images/pev_team_member.png';

import { TabsRouter } from 'src/components/Tabs/tabs';
import BigCard from 'src/components/big-card/big-card';
import PageHeader from 'src/components/page-header/page-header';

import { TeamMembersListView } from 'src/sections/team-members/team-members-list-view';

import { listItems } from './activity-log-list-items';
//---------------------------------------------------------------------------
export default function Page() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const TABLE_HEAD = [
    { id: 'Status/Name/Date', label: 'Shared On', align: 'left', width: '32%' },
    {
      id: 'Number of Emails/Credits Consumed',
      label: 'Team Member Email',
      align: 'left',
    },
    { id: 'status', label: 'Permission Type', align: 'right', width: '28%', pr: 9 },
  ];
  const TABLE_HEAD2 = [
    { id: 'Status/Name/Date', label: 'Shared On', align: 'left', width: '28%' },
    {
      id: 'Number of Emails/Credits Consumed',
      label: 'Folders Shared By',
      align: 'left',
    },
    { id: 'status', label: 'Permission Type', align: 'right', width: '28%', pr: 9 },
    { id: 'access folder', label: 'Access Folder', align: 'right', width: '28%', pr: 9 },
  ];

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
          title="Team Members"
          description="Add team members and share folder(s) access with them from here."
          showButton={false}
          
        />

        {/* tab router */}
        <TabsRouter STATUS_OPTIONS={STATUS_OPTIONS} />

       
        {/* main bottom section */}
        <Grid container spacing={3}>
          <Grid item>
            <Grid sx={{ mt: 3 }}>
              <BigCard
                items={listItems.items}
                style={listItems.style}
                buttontitle="Verify Email"
                coverSrc={emailVerificationThum}
                heading="Points To Remember!"
                buttonText="Add Team Member"
                buttonEndIcon={false}
              />
            </Grid>
           
            <Grid item sx={{ mt: 3 }}>
              <TeamMembersListView
                heading="Folders Shared With You"
                subheading="Access and manage folders shared with you. View shared details, permission types, and access folders easily."
                searchbarIcon="mdi:filter"
                iconSx={{ width: '24px', height: '24px' }}
                iconName="Filters"
                TABLE_HEAD={TABLE_HEAD2}
                isAccesscolum="true"
                sx={{
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 3,
                  pl:11
                  
                }}
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
