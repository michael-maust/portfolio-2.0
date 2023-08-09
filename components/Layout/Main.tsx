import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: MainProps) => (
  <div className="w-full text-gray-700 antialiased relative">
    {meta}

    <Header />

    {children}

    <Footer />
  </div>
);

export { Main };
