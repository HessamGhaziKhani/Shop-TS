import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";


function MobileBottomNav() {

  const location = useLocation();


  return (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0

      h-20

      md:hidden

      z-50

      bg-white
      dark:bg-[#24303F]

      border-t
      border-gray-200
      dark:border-gray-700

      flex
      items-center
      justify-around
      "
    >

      <NavItem
        title="خانه"
        path="/"
        icon={<FiHome />}
        active={location.pathname === "/"}
      />

      <NavItem
        title="فروشگاه"
        path="/shop"
        icon={<FiShoppingBag />}
        active={location.pathname === "/shop"}
      />

      <NavItem
        title="سبد خرید"
        path="/cart"
        icon={<FiShoppingCart />}
        active={location.pathname === "/cart"}
      />

      <NavItem
        title="حساب"
        path="/Dashboard"
        icon={<FiUser />}
        active={location.pathname === "/Dashboard"}
      />


    </div>
  );
}



function NavItem(
  {
    title,
    path,
    icon,
    active,
  }:
  {
    title:string;
    path:string;
    icon:React.ReactNode;
    active:boolean;
  }
) {

  return (
    <Link
      to={path}
      className={`
      flex
      flex-col
      items-center
      justify-center

      gap-1

      transition-all

      ${
        active
        ?
        "text-blue-600 -translate-y-2"
        :
        "text-gray-500 dark:text-gray-300"
      }
      `}
    >

      <div
        className={`
        w-11
        h-11

        rounded-full

        flex
        items-center
        justify-center


        ${
          active
          ?
          "bg-blue-600 text-white shadow-lg"
          :
          ""
        }
        `}
      >

        {icon}

      </div>


      <span
        className="
        text-xs
        "
      >
        {title}
      </span>


    </Link>
  );
}


export default MobileBottomNav;