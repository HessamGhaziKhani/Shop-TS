function ProductCardSkeleton() {
  return (
<div
  className="
  w-full
  h-full
  min-h-107.5

  flex
  flex-col

  overflow-hidden
  rounded-2xl

  bg-white
  dark:bg-[#24303F]

  shadow-[0_10px_30px_rgba(0,0,0,0.08)]

  animate-pulse
  "
>

      {/* Product Image */}

      <div
        className="
        w-full
        h-55

        shrink-0

        bg-gray-200
        dark:bg-[#465871]
        "
      />



      {/* Product Info */}

      <div
        className="
        p-5

        flex
        flex-col

        flex-1
        "
      >


        {/* Title */}

        <div
          className="
          w-4/5
          h-6

          rounded-md

          bg-gray-200
          dark:bg-[#465871]

          mb-3
          "
        />



        {/* Description */}

        <div
          className="
          space-y-3

          mb-5
          "
        >

          <div
            className="
            w-full
            h-4

            rounded

            bg-gray-200
            dark:bg-[#465871]
            "
          />


          <div
            className="
            w-5/6
            h-4

            rounded

            bg-gray-200
            dark:bg-[#465871]
            "
          />


        </div>




        {/* Price */}

        <div
          className="
          w-36
          h-6

          rounded-md

          bg-gray-200
          dark:bg-[#465871]

          mb-5
          "
        />




        {/* Actions */}

        <div
          className="
          mt-auto

          flex
          items-center

          justify-between

          pt-5
          "
        >


          {/* Quantity */}

          <div
            className="
            w-32
            h-10

            rounded-xl

            bg-gray-200
            dark:bg-[#465871]
            "
          />



          {/* Eye Button */}

          <div
            className="
            w-10
            h-10

            rounded-full

            bg-gray-200
            dark:bg-[#465871]
            "
          />


        </div>


      </div>


    </div>
  );
}

export default ProductCardSkeleton;