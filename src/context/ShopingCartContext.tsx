import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IShopingCartProvider{
    children : React.ReactNode
}
interface IcartItem{
    productId: number;
    quantity: number;
}
interface IShopingCartContext{
    cartItems : IcartItem[]
    handleDecreaseProductQty : (productId : number)=> void
    handleIncreaseProductQty : (productId : number) => void
    getProductQuantity :(productId : number) => number
    handleRemoveProduct : (productId : number) => void
    cartQuantity : number
}


export const ShopingCartContext = createContext({} as IShopingCartContext )

export const useShopingCartContext = ()=>{
    return useContext(ShopingCartContext)
}

export function ShopingCartProvider({children}:IShopingCartProvider){
    const [cartItems, setCartItems] = useLocalStorage<IcartItem[]>("cartItems",[])
    
    const handleIncreaseProductQty = (id : number)=>{
        setCartItems(currentItems => {
            
            let selectedItem =  currentItems.find(item=> item.productId == id )
            if (!selectedItem) {
                return [...currentItems , {
                    productId : id,
                    quantity : 1
                }]
            }else{
               return currentItems.map(item=>{
                    if (item.productId == id) {
                        return{
                            ...item,
                            quantity: item.quantity + 1   
                        }
                    }else return item
                })
            }

        })
    }
    const handleDecreaseProductQty = (id : number)=>{
        setCartItems(currentItems => {
            
            let selectedItem =  currentItems.find(item=> item.productId == id )
            if (selectedItem?.quantity == 1) {
                return currentItems.filter((item)=> item.productId !== id)
            }else{
               return currentItems.map(item=>{
                    if (item.productId == id) {
                        return{
                            ...item,
                            quantity: item.quantity - 1   
                        }
                    }else return item
                })
            }

        })
    }
    const getProductQuantity = (id : number)=>{
      return  cartItems.find(item => item.productId === id)?.quantity || 0
    }
    const handleRemoveProduct = (id : number)=>{
        setCartItems(currentItems => currentItems.filter(item => item.productId != id))
    }
    const cartQuantity = cartItems.reduce((totalQty , item)=> totalQty + item.quantity,0)
    return(
        <ShopingCartContext.Provider value={{cartItems , handleIncreaseProductQty , handleDecreaseProductQty , getProductQuantity , handleRemoveProduct , cartQuantity}}>
            {children}
        </ShopingCartContext.Provider>
    )
}