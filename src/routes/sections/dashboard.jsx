import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/app/dashboard/dashboard'));
const GetHelp = lazy(() => import('src/pages/app/get-help/get-help'));
const CreditSummary = lazy(() => import('src/pages/app/credits-summary/credits-summary'));
const API = lazy(() => import('src/pages/app/api-page/api-page'));
const TeamMembers = lazy(() => import('src/pages/app/team-members/team-members'));
const ActivityLog = lazy(() => import('src/pages/app/activity-log/activity-log'));
const TimeZone = lazy(() => import('src/pages/app/timezone/timezone-page'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'gethelp', element: <GetHelp /> },
      {
        path: 'settings',
        children: [
          // { element: <CreditSummary/>, index: true },
          { path: 'credits', element: <CreditSummary /> },
          { path: 'api', element: <API /> },
          { path: 'team-members', element: <TeamMembers/> },
          { path: 'activity-log', element: <ActivityLog/> },
          { path: 'timezone', element: <TimeZone/> },
        ],
      },
    ],
  },
];
