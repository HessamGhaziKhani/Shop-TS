import axios from "axios";
import type { IProduct } from "./types";


//create BaseUrl
const client = axios.create({
  baseURL: "https://fakestoreapi.com/"
});
// products api
export async function getProducts () : Promise<IProduct[]> {
  const { data } = await client("/products");
  return data.map((product: IProduct) => ({
    ...product,
    id: Number(product.id),
    price: product.price * 180000
  }));
}
//single product api
export async function getProduct(id: number | string) {
  const { data } = await client(`/products/${id}`);

  return {
    ...data,
    id: Number(data.id),
    price: data.price * 180000
  };
}
