"use client"

import { ProductCard } from "@/components/ui/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

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
        inStock: true,
    },
    {
        id: "2",
        name: "Lámpara Luna 3D",
        price: 8500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
        category: "Decoración",
        isNew: true,
        inStock: true,
    },
    {
        id: "3",
        name: "Maceta Geométrica Set x3",
        price: 4500,
        originalPrice: 5500,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
        category: "Decoración",
        discount: 18,
        inStock: true,
    },
    {
        id: "4",
        name: "Soporte Auriculares Gamer",
        price: 6000,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
        category: "Accesorios",
        inStock: false,
    },
    {
        id: "5",
        name: "Figura Samurai 30cm",
        price: 22000,
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=500&h=500&fit=crop",
        category: "Figuras",
        isNew: true,
        inStock: true,
    },
    {
        id: "6",
        name: "Organizador Hexagonal",
        price: 5500,
        originalPrice: 7000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=500&fit=crop",
        category: "Accesorios",
        discount: 21,
        inStock: true,
    },
    {
        id: "7",
        name: "Porta Llaves Minimalista",
        price: 3500,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
        category: "Decoración",
        inStock: true,
    },
    {
        id: "8",
        name: "Robot Retro Articulado",
        price: 12000,
        originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop",
        category: "Figuras",
        discount: 20,
        inStock: false,
    },
]

const tabs = ["Todos", "Figuras", "Decoración", "Accesorios"]

export function FeaturedProducts() {
    const [activeTab, setActiveTab] = useState("Todos")

    const filteredProducts = activeTab === "Todos"
        ? products
        : products.filter(p => p.category === activeTab)

    return (
        <section id="productos" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Productos Destacados
                        </h2>
                        <p className="mt-2 text-gray-500">
                            Los más vendidos de nuestra tienda
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[#8B2F8B] font-medium hover:gap-3 transition-all"
                    >
                        Ver todos
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${activeTab === tab
                                    ? "bg-[#8B2F8B] text-white"
                                    : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
