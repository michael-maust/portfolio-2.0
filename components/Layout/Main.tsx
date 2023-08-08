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

    <main className="content py-5 text-xl">{children}</main>

    <Footer />
  </div>
);

export { Main };
