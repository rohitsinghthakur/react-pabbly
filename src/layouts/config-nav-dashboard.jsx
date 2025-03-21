import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  dashboard: icon('dashboard-icon'),
  setting: icon('setting-icon'),
  gethelp: icon('gethelp-icon'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    // subheader: 'Overview 6.0.0',
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
    ],
  },
  /**
   * Management
   */
  {
    // subheader: 'Management',
    items: [
      {
        title: 'Settings',
        path: paths.dashboard.settings.root,
        icon: ICONS.setting,
        children: [
          { title: 'Credits Summary', path: paths.dashboard.settings.credits },
          { title: 'API', path: paths.dashboard.settings.api },
          { title: 'Team Members', path: paths.dashboard.settings.teamMembers },
          { title: 'Activity Log', path: paths.dashboard.settings.activityLog },
          { title: 'Time Zone', path: paths.dashboard.settings.timeZone },
        ],
      },
    ],
  },
  {
    // subheader: 'Overview 6.0.0',
    items: [
      { title: 'Get Help', path: paths.dashboard.gethelp, icon: ICONS.gethelp },
    ],
  },
];
