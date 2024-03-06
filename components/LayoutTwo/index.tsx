import { ReactNode } from 'react';
import {Sidebar} from '../../features/product/components/Sidebar';
import {Header} from '../Header/Header';
import Footer from '../Footer/Footer';


type IMainProps = {
  children: ReactNode;
};

export default function Layout(props:IMainProps) {
  console.log(props)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="flex-grow p-6 px-4">
          {/* Main content will go here */}
          {props.children}
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}
