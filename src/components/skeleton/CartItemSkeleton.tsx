function CartItemSkeleton() {
  return (
    <div
      className="
      w-full
      bg-white
      dark:bg-[#24303F]

      rounded-2xl

      shadow-[0_10px_30px_rgba(0,0,0,0.08)]

      p-5

      flex
      items-center

      gap-5

      animate-pulse
      "
    >

      {/* Image */}

      <div
        className="
        w-28
        h-28

        shrink-0

        rounded-2xl

        bg-gray-200
        dark:bg-[#465871]
        "
      />



      {/* Info */}

      <div
        className="
        flex-1
        space-y-4
        "
      >

        <div
          className="
          w-2/3
          h-6

          rounded

          bg-gray-200
          dark:bg-[#465871]
          "
        />


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
          w-1/2
          h-4

          rounded

          bg-gray-200
          dark:bg-[#465871]
          "
        />


        <div
          className="
          w-32
          h-5

          rounded

          bg-gray-200
          dark:bg-[#465871]
          "
        />

      </div>



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


    </div>
  );
}

export default CartItemSkeleton;