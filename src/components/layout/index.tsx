import Navigation from "components/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
