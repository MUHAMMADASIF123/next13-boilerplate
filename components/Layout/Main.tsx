import type { ReactNode } from 'react';

import Footer from '../Footer/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}
    {/* <Header /> */}
    {props.children}
    <Footer />
  </div>
);

export { Main };
