import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import type { IProduct } from "../../types/server";
import QuantityControl from "../quantityControl/QuantityControl";

type TProductCard = IProduct;

function ProductCard({ product }: { product: TProductCard }) {
  return (
    <div
      className="
      h-full
      min-h-107.5
      flex
      flex-col
      overflow-hidden
      rounded-2xl
      bg-white
      dark:bg-[#24303F]
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
    >

      {/* Product Image */}
      <div
        className="
        w-full
        h-55
        overflow-hidden
        shrink-0
        "
      >
        <img
          src={product.image}
          alt={product.title}
          className="
          w-full
          h-full
          object-cover
          transition
          duration-300
          hover:scale-105
          "
        />
      </div>


      {/* Product Content */}
      <div
        className="
        p-5
        flex
        flex-col
        flex-1
        "
      >

        {/* Text Section */}
        <div>

          <h3
            className="
            text-lg
            font-bold
            mb-3
            text-gray-900
            dark:text-white
            line-clamp-2
            min-h-14
            "
          >
            {product.title}
          </h3>


          <p
            className="
            text-gray-500
            dark:text-gray-300
            text-sm
            leading-[1.8]
            mb-5
            line-clamp-2
            min-h-12.5
            "
          >
            {product.description}
          </p>


          <span
            className="
            font-bold
            text-blue-600
            "
          >
            {product.price.toLocaleString("Fa-IR")} تومان
          </span>

        </div>



        {/* Bottom Actions */}
        <div
          className="
          mt-auto
          pt-5
          flex
          items-center
          justify-between
          "
        >

          <QuantityControl productId={product.id} />


          <Link
            to={`/product/${product.id}`}
            className="
            w-10
            h-10
            rounded-full
            bg-[#465871]
            text-white
            flex
            items-center
            justify-center
            hover:bg-blue-600
            transition
            "
          >
            <FiEye size={18} />
          </Link>

        </div>


      </div>

    </div>
  );
}

export default ProductCard;