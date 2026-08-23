import Header from "../header/Header";
import MobileHeader from "./MobileHeader";


function ResponsiveHeader() {

  return (

    <>

      <div className="hidden md:block">
        <Header />
      </div>


      <div className="md:hidden">
        <MobileHeader />
      </div>

    </>

  );

}


export default ResponsiveHeader;