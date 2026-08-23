import { Outlet } from "react-router-dom";
import MobileBottomNav from "../../components/header/MobileBottomNav";
import ResponsiveHeader from "../../components/header/ResponsiveHeader";

function MainLayouts() {
  return (
    <>
      <ResponsiveHeader />
      <main
        className="
        pb-16
        md:pb-0"
      >
        <Outlet />
      </main>
      <MobileBottomNav />
    </>
  );
}

export default MainLayouts;
