import { useState } from "react";
import Button from "../button/Button";


interface ICartSummary {

  totalQtyProducts: number;

  totalPrice: number;

  discountAmount: number;

  finalPrice: number;

  shippingCost: number;

  onApplyDiscount: (code: string) => void;

}



function CartSummary(props: ICartSummary) {

  const [code, setCode] = useState("");



  return (

    <div
      className="
      bg-white
      dark:bg-[#24303F]
      rounded-2xl
      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      p-5
      sm:p-6
      h-fit
      text-right
      "
    >



      <h2
        className="
        text-xl
        font-bold
        text-gray-900
        dark:text-white
        mb-6
        "
      >
        خلاصه سفارش
      </h2>






      {/* Items Count */}

      <div
        className="
        flex
        justify-between
        gap-3
        text-gray-500
        dark:text-gray-300
        mb-4
        "
      >

        <span>
          مجموع کالاها
        </span>


        <span>
          {props.totalQtyProducts.toLocaleString("fa")} عدد
        </span>


      </div>






      {/* Total Price */}

      <div
        className="
        flex
        justify-between
        gap-3
        text-gray-500
        dark:text-gray-300
        mb-4
        "
      >

        <span>
          مبلغ
        </span>


        <span>
          {props.totalPrice.toLocaleString("Fa-IR")} تومان
        </span>


      </div>







      {/* Shipping */}

      <div
        className="
        flex
        justify-between
        gap-3
        text-gray-500
        dark:text-gray-300
        mb-4
        "
      >

        <span>
          هزینه ارسال
        </span>


        <span>
          {props.shippingCost.toLocaleString("Fa-IR")} تومان
        </span>


      </div>








      {/* Discount */}

      <div
        className="
        flex
        justify-between
        gap-3
        text-gray-500
        dark:text-gray-300
        mb-5
        "
      >

        <span>
          مبلغ تخفیف
        </span>


        <span>
          {props.discountAmount.toLocaleString("Fa-IR")} تومان
        </span>


      </div>








      {/* Discount Code */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        gap-2
        mb-6
        "
      >

        <input

          type="text"

          value={code}

          onChange={(e)=>setCode(e.target.value)}

          placeholder="OFF10 یا OFF20"

          className="
          w-full
          rounded-xl
          border
          border-gray-200
          dark:border-gray-600
          bg-white
          dark:bg-[#465871]
          text-gray-900
          dark:text-white
          placeholder:text-gray-400
          p-3
          outline-none
          focus:border-blue-600
          transition
          text-sm
          "

        />



        <Button
          onClick={() => props.onApplyDiscount(code)}
        >
          اعمال
        </Button>



      </div>








      {/* Final Price */}

      <div
        className="
        border-t
        border-gray-200
        dark:border-gray-700
        pt-5
        flex
        justify-between
        gap-3
        font-bold
        text-lg
        text-gray-900
        dark:text-white
        "
      >

        <span>
          مبلغ نهایی
        </span>



        <span
          className="
          text-blue-600
          "
        >
          {props.finalPrice.toLocaleString("Fa-IR")} تومان
        </span>



      </div>








      <Button
        variant="primary"
        className="
        w-full
        mt-6
        "
      >

        ثبت سفارش

      </Button>



    </div>

  );

}


export default CartSummary;