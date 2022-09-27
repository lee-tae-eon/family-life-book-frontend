import Navigation from "components/naviation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
