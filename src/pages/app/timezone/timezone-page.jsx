import { useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import { DashboardContent } from 'src/layouts/dashboard';
import { FooterBase } from 'src/layouts/core/footer-base';

import { TabsRouter } from 'src/components/Tabs/tabs';
import PageHeader from 'src/components/page-header/page-header';

import TimeZone from "./timezone";
//---------------------------------------------------------------------------
export default function Page() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
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

       <TimeZone/>
        {/* footer section */}
      </DashboardContent>
      <FooterBase />
    </>
  );
}
