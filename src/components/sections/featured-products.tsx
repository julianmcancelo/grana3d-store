"use client"

import { ProductCard } from "@/components/ui/product-card"
import { BlurFade } from "@/components/ui/blur-fade"
import { ArrowRight } from "lucide-react"

// Sample products data
const products = [
    {
        id: "1",
        name: "Dragón Articulado Premium Edición Dorada",
        price: 15000,
        originalPrice: 18000,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
        category: "Figuras",
        isNew: true,
        discount: 17,
    },
    {
        id: "2",
        name: "Lámpara Luna 3D con Base de Madera",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        category: "Decoración",
        isNew: true,
    },
    {
        id: "3",
        name: "Maceta Geométrica Moderna Set x3",
        price: 4500,
        originalPrice: 5500,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
        category: "Decoración",
        discount: 18,
    },
    {
        id: "4",
        name: "Soporte Auriculares Gamer RGB Edition",
        price: 6000,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
        category: "Accesorios",
    },
    {
        id: "5",
        name: "Figura Samurai Coleccionable 30cm",
        price: 22000,
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=500&h=500&fit=crop",
        category: "Figuras",
        isNew: true,
    },
    {
        id: "6",
        name: "Organizador Escritorio Hexagonal Premium",
        price: 5500,
        originalPrice: 7000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=500&fit=crop",
        category: "Accesorios",
        discount: 21,
    },
    {
        id: "7",
        name: "Porta Llaves de Pared Minimalista",
        price: 3500,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
        category: "Decoración",
    },
    {
        id: "8",
        name: "Robot Articulado Retro Vintage",
        price: 12000,
        originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop",
        category: "Figuras",
        discount: 20,
    },
]

const filters = ["Todos", "Figuras", "Decoración", "Accesorios", "Ofertas"]

export function FeaturedProducts() {
    return (
        <section id="productos" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50 relative">
            {/* Decorative Elements - Grana Colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#8B2F8B]/10 to-[#00B4B4]/10 dark:from-[#8B2F8B]/5 dark:to-[#00B4B4]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-[#F5A623]/10 to-[#8B1A3D]/10 dark:from-[#F5A623]/5 dark:to-[#8B1A3D]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <BlurFade>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                        <div>
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 text-[#8B2F8B] dark:text-[#00B4B4] text-sm font-semibold rounded-full mb-4">
                                🔥 LO MÁS VENDIDO
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
                                Productos{" "}
                                <span className="bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent">
                                    Destacados
                                </span>
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                                Nuestra selección premium de piezas impresas en 3D
                            </p>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter, index) => (
                                <button
                                    key={filter}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${index === 0
                                            ? "bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] text-white shadow-lg shadow-purple-500/30"
                                            : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#00B4B4] dark:hover:border-[#00B4B4]"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} {...product} delay={index} />
                    ))}
                </div>

                <BlurFade delay={0.5}>
                    <div className="mt-16 text-center">
                        <button className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            Ver Todos los Productos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
