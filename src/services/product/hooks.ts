
import { useQuery } from "@tanstack/react-query";
import type { IProduct } from "./types";
import { getProduct, getProducts } from "./endpoints";


export const useGetProducts = ()=> {
    return useQuery<IProduct[]>({
        queryKey:["products"],
        queryFn:getProducts,
        staleTime:1000 * 60 * 10
    })
}

export const useGetProduct = (id:string | number)=> {
    return useQuery<IProduct>({
        queryKey:["product",id],
        queryFn: () => getProduct(id),
    })
}
