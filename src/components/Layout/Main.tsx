import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: MainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {meta}

    <div className="mx-auto max-w-screen-md">
      <Header />

      <main className="content py-5 text-xl">{children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
