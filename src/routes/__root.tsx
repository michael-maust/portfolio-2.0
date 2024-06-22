import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from 'components/Navigation';

import { BackgroundGradient } from 'components/Base/AnimatedGradient';

export const Route = createRootRoute({
  component: () => (
    <>
      <BackgroundGradient>
        <Header />
        <Outlet />
      </BackgroundGradient>
      <TanStackRouterDevtools />
    </>
  ),
});
