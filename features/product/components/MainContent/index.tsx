import { ReactNode } from "react";

type IMainProps = {
  children: ReactNode;
};
export const MainContent=(props: IMainProps)=> {
  return (
    <div className="flex-1 p-10">
      {/* Main content goes here */}
      {props.children}
    </div>
  );
}
