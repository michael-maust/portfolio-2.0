import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from 'components/Navigation';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { PropsWithChildren, useEffect } from 'react';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

function AnimatedBackground({ children }: PropsWithChildren) {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 15,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 0% at 0% 0%, #3D3D3E 0%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 opacity-100"
    >
      {children}
    </motion.section>
  );
}

export const Route = createRootRoute({
  component: () => (
    <AnimatedBackground>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </AnimatedBackground>
  ),
});
