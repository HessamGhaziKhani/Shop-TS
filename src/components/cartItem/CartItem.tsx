import QuantityControl from "../quantityControl/QuantityControl";
import type { IProduct } from '../../services/product/types';
import { Link } from "react-router-dom";

interface ICartItem extends IProduct {
  quantity: number;
}


function CartItem({
  id,
  title,
  price,
  description,
  image
}: ICartItem) {


  return (

    <div
      className="
      bg-white
      dark:bg-[#24303F]
      rounded-2xl
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      p-4
      sm:p-5
      flex
      flex-col
      sm:flex-row
      items-center
      gap-5
      "
    >


      {/* Image */}

      <div
        className="
        w-24
        h-24
        sm:w-28
        sm:h-28
        bg-gray-100
        dark:bg-[#465871]
        rounded-2xl
        overflow-hidden
        shrink-0
        "
      >

        <Link to={`/product/${id}`}>

          <img
            src={image}
            alt={title}
            className="
            w-full
            h-full
            object-cover
            transition
            duration-300
            hover:scale-105
            "
          />

        </Link>


      </div>







      {/* Info */}


      <div
        className="
        flex-1
        w-full
        text-right
        "
      >


        <h3
          className="
          text-base
          sm:text-lg
          font-bold
          mb-2
          text-gray-900
          dark:text-white
          line-clamp-1
          "
        >
          {title}
        </h3>




        <p
          className="
          text-gray-500
          dark:text-gray-300
          text-sm
          mb-3
          leading-loose
          line-clamp-2
          "
        >
          {description}
        </p>




        <span
          className="
          text-blue-600
          font-bold
          "
        >
          {price.toLocaleString("Fa-IR")} تومان
        </span>



      </div>







      {/* Quantity */}

      <div
        className="
        w-full
        sm:w-auto
        flex
        justify-center
        sm:justify-end
        "
      >

        <QuantityControl
          productId={id}
        />

      </div>



    </div>

  );

}


export default CartItem;