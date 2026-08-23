import ProductCard from "../../components/productCard/ProductCard";
import Container from "../../components/container/Container";
import ProductCardSkeleton from "../../components/skeleton/ProductCardSkeleton";
import { useGetProducts } from "../../services/product/hooks";

function Shop() {
  const {data: products = [],isLoading} = useGetProducts()
  return (
    <Container>
      <div
        className="
        grid
        grid-cols-1
        xs:grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        sm:gap-5
        lg:gap-6
        items-stretch
        my-9
        "
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </Container>
  );
}

export default Shop;
