import { useNavigate, useLocation } from 'react-router-dom'; 

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import { Iconify } from 'src/components/iconify';

export function TabsRouter() {
    const navigate = useNavigate();
    const location = useLocation();
  
    const STATUS_OPTIONS = [
      { value: 'credits', label: 'Credit Summary', icon: 'lucide:square-menu' },
      { value: 'api', label: 'API', icon: 'icon-park-outline:api' },
      { value: 'team-members', label: 'Team Members', icon: 'fluent:people-team-16-filled' },
      { value: 'activity-log', label: 'Activity Log', icon: 'material-symbols:work-history-rounded' },
      { value: 'timezone', label: 'Time Zone', icon: 'fluent:globe-clock-24-filled' },
    ];
    return(
      <Box sx={{ position: "sticky", top: 30, backgroundColor: "#F1F7FB", zIndex: 1000,pt:3}}>
  <Tabs
    value={STATUS_OPTIONS.find((tab) => location.pathname.includes(tab.value))?.value || 'credits'}
    sx={{ mt: 0 }}
  >
    {STATUS_OPTIONS.map((tab) => (
      <Tab
        key={tab.value}
        value={tab.value}
        onClick={() => navigate(`/app/settings/${tab.value}`)}
        label={tab.label}
        icon={<Iconify icon={tab.icon} sx={{height:24,width:24}}/>}
        sx={{
          color: location.pathname.includes(tab.value) ? 'black' : '#637381',
          borderBottom: location.pathname.includes(tab.value) ? '0px solid black' : 'none',
          px: 1,
        }}
      />
    ))}
  </Tabs>
  </Box>
  )
}
