import { Hero } from "@/components/sections/hero"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { Categories } from "@/components/sections/categories"

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  )
}
