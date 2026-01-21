import { Hero } from "@/components/sections/hero"
import { Categories } from "@/components/sections/categories"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </>
  )
}
