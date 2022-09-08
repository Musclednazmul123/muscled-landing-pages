import { ReactNode } from "react";

interface AppLayoutProp {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProp) => {
  return (
    <div>
      {/* <Header /> */}
      <>{children}</>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
