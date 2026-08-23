import { FiMoon, FiSearch, FiShoppingCart, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useShopingCartContext } from "../../context/ShopingCartContext";
import Button from "../button/Button";
import { useAuthContext } from "../../context/AuthContext";
import useColorMode from "../../hooks/useColorMode";


function Header() {

  const [colorMode, setColorMode] = useColorMode();

  const { cartQuantity } = useShopingCartContext();

  const { isLogin, userData } = useAuthContext();


  return (
    
    <header
      className="
      h-20
      sticky
      top-0
      z-50
      bg-white
      dark:bg-[#24303F]
      shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      "
    >

      <div
      className="max-w-7xl 
      h-full
      mx-auto
      px-7.5
      flex
      items-center
      justify-between
      "
    >


        {/* Logo */}
        <Link
          to="/"
          className="
          text-xl
          font-bold
          dark:text-white
          "
        >
          فروشگاه
          <span className="text-blue-600">
            من
          </span>
        </Link>



        {/* Menu */}
        <nav
          className="
          hidden
          lg:flex
          gap-7.5
          "
        >

          <Link
            className="
            text-gray-600
            dark:text-gray-300
            hover:text-blue-600
            transition
            "
            to="/"
          >
            خانه
          </Link>


          <Link
            className="
            text-gray-600
            dark:text-gray-300
            hover:text-blue-600
            transition
            "
            to="/shop"
          >
            محصولات
          </Link>


          <Link
            className="
            text-gray-600
            dark:text-gray-300
            hover:text-blue-600
            transition
            "
            to="#"
          >
            دسته‌بندی‌ها
          </Link>


          <Link
            className="
            text-gray-600
            dark:text-gray-300
            hover:text-blue-600
            transition
            "
            to="#"
          >
            درباره ما
          </Link>

        </nav>




        {/* Actions */}
        <div
          className="
          flex
          items-center
          gap-3.75
          "
        >



          {/* Search */}
          <div
            className="
            hidden
            md:flex
            overflow-hidden
            rounded-[10px]
            border
            border-gray-300
            dark:border-gray-600
            "
          >

            <input
              className="
              border-none
              outline-none
              px-3.75
              py-2.5
              w-50
              bg-transparent
              dark:text-white
              "
              placeholder="جستجوی محصول..."
            />


            <button
              className="
              border-none
              bg-gray-100
              dark:bg-[#465871]
              dark:text-white
              px-3.75
              cursor-pointer
              "
            >

              <FiSearch size={20}/>

            </button>


          </div>





          {/* Cart */}
          <Link to="/cart">

            <button
              className="
              relative
              border-none
              bg-gray-100
              dark:bg-[#465871]
              dark:text-white
              w-11.25
              h-11.25
              rounded-full
              flex
              items-center
              justify-center
              "
            >

              <FiShoppingCart size={22}/>


              <span
                className="
                absolute
                -top-1
                -right-1
                bg-blue-600
                text-white
                w-5
                h-5
                rounded-full
                text-xs
                flex
                items-center
                justify-center
                "
              >
                {cartQuantity}
              </span>


            </button>


          </Link>






          {/* Dark mode */}
          <button
            onClick={() =>
              setColorMode(
                colorMode === "dark"
                ? "light"
                : "dark"
              )
            }
            className="
            relative
            w-16
            h-8
            rounded-full
            bg-gray-200
            dark:bg-[#465871]
            "
          >


            <FiMoon
              size={16}
              className="
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              text-gray-600
              dark:text-gray-300
              "
            />


            <FiSun
              size={16}
              className="
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              text-yellow-500
              "
            />


            <span
              className="
              absolute
              top-1
              left-1
              w-6
              h-6
              rounded-full
              bg-white
              dark:bg-[#24303F]
              transition-transform
              dark:translate-x-8
              "
            />


          </button>





          {/* Account */}
          <Link to="/dashboard">

            <Button variant="primary">

              {
                isLogin && userData
                ? `سلام ${userData.username}`
                : "حساب کاربری"
              }

            </Button>


          </Link>



        </div>



      </div>


    </header>

  );
}


export default Header;