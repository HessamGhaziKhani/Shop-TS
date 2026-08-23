import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Button from "../button/Button";
import { useShopingCartContext } from "../../context/ShopingCartContext";

interface IQuantityControl {
  productId: number;
}

function QuantityControl({ productId }: IQuantityControl) {
  const {
    handleIncreaseProductQty,
    getProductQuantity,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShopingCartContext();
  const quantity = getProductQuantity(productId)
  return getProductQuantity(productId) === 0 ? (
    <Button onClick={() => handleIncreaseProductQty(productId)}>
      افزودن به سبد خرید
    </Button>
  ) : (
    <div className=" flex items-center gap-2 bg-gray-100 rounded-xl p-2 ">
      <button
        onClick={() => handleIncreaseProductQty(productId)}
        className="p-1 hover:text-blue-600"
      >
        <FiPlus />
      </button>{" "}
      {quantity}
      <button
        onClick={() => handleDecreaseProductQty(productId)}
        className="p-1 hover:text-blue-600"
      >
        <FiMinus />
      </button>
      <button onClick={()=>handleRemoveProduct(productId)} className="p-1 rounded-xl text-red-500 hover:bg-red-50 transition">
        <FiTrash2 size={20} />
      </button>
    </div>
  );
}

export default QuantityControl;
