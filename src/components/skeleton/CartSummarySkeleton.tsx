function CartSummarySkeleton() {
  return (
    <div
      className="
      bg-white
      dark:bg-[#24303F]

      rounded-2xl

      shadow-[0_10px_30px_rgba(0,0,0,0.08)]

      p-6

      animate-pulse
      "
    >

      {/* Title */}

      <div
        className="
        w-40
        h-7

        rounded-md

        bg-gray-200
        dark:bg-[#465871]

        mb-6
        "
      />



      {/* Rows */}

      {
        Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="
            flex
            justify-between
            items-center

            mb-5
            "
          >

            <div
              className="
              w-24
              h-4

              rounded

              bg-gray-200
              dark:bg-[#465871]
              "
            />


            <div
              className="
              w-32
              h-4

              rounded

              bg-gray-200
              dark:bg-[#465871]
              "
            />


          </div>
        ))
      }



      {/* Discount Input */}

      <div
        className="
        w-full
        h-12

        rounded-xl

        bg-gray-200
        dark:bg-[#465871]

        mb-5
        "
      />



      {/* Final Price */}

      <div
        className="
        border-t
        pt-5

        flex
        justify-between
        "
      >

        <div
          className="
          w-28
          h-6

          rounded

          bg-gray-200
          dark:bg-[#465871]
          "
        />


        <div
          className="
          w-36
          h-6

          rounded

          bg-gray-200
          dark:bg-[#465871]
          "
        />

      </div>



      {/* Button */}

      <div
        className="
        w-full
        h-12

        rounded-xl

        bg-gray-200
        dark:bg-[#465871]

        mt-6
        "
      />


    </div>
  );
}

export default CartSummarySkeleton;