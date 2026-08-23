import Container from "../../components/container/Container"
import ProductCardSkeleton from "../../components/skeleton/ProductCardSkeleton"

function Home() {
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
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
    </Container>
  )
}

export default Home