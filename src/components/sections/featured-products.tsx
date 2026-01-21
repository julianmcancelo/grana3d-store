"use client"

import { ProductCard } from "@/components/ui/product-card"
import { BlurFade } from "@/components/ui/blur-fade"

// Sample products data
const products = [
    {
        id: "1",
        name: "Dragón Articulado Premium",
        price: 15000,
        originalPrice: 18000,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
        category: "Figuras",
        isNew: true,
        discount: 17,
    },
    {
        id: "2",
        name: "Lámpara Luna 3D",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        category: "Decoración",
        isNew: true,
    },
    {
        id: "3",
        name: "Maceta Geométrica Moderna",
        price: 4500,
        originalPrice: 5500,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
        category: "Decoración",
        discount: 18,
    },
    {
        id: "4",
        name: "Soporte Auriculares Gamer",
        price: 6000,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
        category: "Accesorios",
    },
    {
        id: "5",
        name: "Figura Samurai Coleccionable",
        price: 22000,
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=500&h=500&fit=crop",
        category: "Figuras",
        isNew: true,
    },
    {
        id: "6",
        name: "Organizador Escritorio Hexagonal",
        price: 5500,
        originalPrice: 7000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=500&fit=crop",
        category: "Accesorios",
        discount: 21,
    },
    {
        id: "7",
        name: "Porta Llaves de Pared",
        price: 3500,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
        category: "Decoración",
    },
    {
        id: "8",
        name: "Robot Articulado Retro",
        price: 12000,
        originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop",
        category: "Figuras",
        discount: 20,
    },
]

export function FeaturedProducts() {
    return (
        <section id="productos" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BlurFade>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                            Productos Destacados
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Descubre nuestra selección de piezas impresas en 3D con la más alta calidad y diseños únicos.
                        </p>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} {...product} delay={index} />
                    ))}
                </div>

                <BlurFade delay={0.5}>
                    <div className="mt-12 text-center">
                        <button className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                            Ver Todos los Productos
                        </button>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
