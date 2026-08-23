import { useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { useShopingCartContext } from "../../context/ShopingCartContext";
import CartSummary from "../../components/cartSummary/CartSummary";
import CartItemSkeleton from "../../components/skeleton/CartItemSkeleton";
import CartSummarySkeleton from "../../components/skeleton/CartSummarySkeleton";
import type { IProduct } from "../../services/product/types";
import { getProducts } from "../../services/product/endpoints";

interface ICartProduct extends IProduct {
  quantity: number;
}

const discountList = [
  {
    code: "OFF10",
    percent: 10,
  },
  {
    code: "OFF20",
    percent: 20,
  },
];

function CartPage() {
  const { cartItems } = useShopingCartContext();
  const [cartProduct, setCartProduct] = useState<ICartProduct[]>([]);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [loading, setLoading] = useState(true);

const [products, setProducts] = useState<IProduct[]>([]);


useEffect(() => {

  const fetchProducts = async () => {

    setLoading(true);

    try {

      const result = await getProducts();

      setProducts(result);

    } finally {

      setLoading(false);

    }

  };


  fetchProducts();

}, []);

useEffect(() => {

  const selectedProduct = cartItems.map((item)=>{

    const product = products.find(
      (product)=> product.id === item.productId
    );


    if(!product) return null;


    return {
      ...product,
      quantity:item.quantity
    };

  });


  setCartProduct(
    selectedProduct.filter(Boolean) as ICartProduct[]
  );


},[cartItems, products]);

  const totalPrice = cartProduct.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalQtyProducts = cartProduct.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const discountAmount = (totalPrice * discountPercent) / 100;

  const shippingCost = totalPrice === 0 ? 0 : totalPrice * 0.02

  const finalPrice = totalPrice - discountAmount + shippingCost;

  return (
    <div
      className="
      min-h-screen
      bg-gray-50
      dark:bg-[#1A222C]
      py-8
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        "
      >
        <h1
          className="
          text-2xl
          sm:text-3xl
          font-bold
          mb-8
          text-gray-900
          dark:text-white
          text-right
          "
        >
          سبد خرید
        </h1>

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-5
          lg:gap-6
          items-start
          "
        >
          {/* Cart Products */}

          <div
            className="
            lg:col-span-2
            space-y-5
            "
          >
            {loading ? (
              Array.from({ length: cartItems.length || 3 }).map((_, index) => (
                <CartItemSkeleton key={index} />
              ))
            ) : cartProduct.length === 0 ? (
              <div
                className="
                  rounded-2xl
                  p-8
                  text-center
                  bg-white
                  dark:bg-[#24303F]
                  text-gray-500
                  dark:text-gray-300
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  "
              >
                سبد خرید شما خالی است
              </div>
            ) : (
              cartProduct.map((item) => <CartItem key={item.id} {...item} />)
            )}
          </div>

          {/* Summary */}
          <div
            className="
            lg:sticky
            lg:top-24
            "
          >
            {
              (loading) ? (
                <CartSummarySkeleton />
              ):
              <CartSummary
              totalQtyProducts={totalQtyProducts}
              totalPrice={totalPrice}
              discountAmount={discountAmount}
              finalPrice={finalPrice}
              shippingCost={shippingCost}
              onApplyDiscount={(code) => {
                const discount = discountList.find(
                  (item) => item.code === code,
                );

                setDiscountPercent(discount?.percent || 0);
              }}
            />
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
