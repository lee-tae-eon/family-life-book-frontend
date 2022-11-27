import Navigation from "components/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  if (typeof window !== "undefined") {
    console.log(navigator);
  }
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
