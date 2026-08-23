import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useShopingCartContext } from "../../context/ShopingCartContext";

function MobileHeader() {
  const { cartQuantity } = useShopingCartContext();

  return (
    <header
      className="
h-16
flex
items-center
justify-between
px-4

bg-white
dark:bg-[#24303F]

shadow-sm

md:hidden
"
    >
      <button>
        <FiMenu size={24} className="text-gray-700 dark:text-white" />
      </button>

      <Link
        to="/"
        className="
font-bold
text-xl
text-blue-600
"
      >
        فروشگاه من
      </Link>

      <Link
        to="/cart"
        className="
relative
text-gray-700
dark:text-white
"
      >
        <FiShoppingCart size={24} />

        {cartQuantity > 0 && (
          <span
            className="
absolute
-top-2
-right-3

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
        )}
      </Link>
    </header>
  );
}

export default MobileHeader;
