import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from 'components/Navigation';

import { AuroraBackground } from 'components/Base';

export const Route = createRootRoute({
  component: () => (
    <AuroraBackground showRadialGradient={false}>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </AuroraBackground>
  ),
});
