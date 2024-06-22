import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type NavLinkProps = ComponentProps<typeof Link>;

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Link
      to="/"
      className="border-none relative p-2 capitalize text-tan hover:text-primary text-md [&.active]:text-primary transition-colors duration-300"
      {...props}
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive ? (
            <motion.div
              layout
              layoutId="underline"
              className="absolute bg-white-300 inset-0 w-[calc(100%+24px)] -left-3 px-auto h-full z-[-1] backdrop-filter backdrop-blur-[10px] bg-opacity-20 rounded-full"
            />
          ) : null}
        </>
      )}
    </Link>
  );
}
