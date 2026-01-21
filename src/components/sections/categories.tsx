"use client"

import Link from "next/link"
import { Box, Palette, Package, Sparkles, ArrowUpRight } from "lucide-react"

const categories = [
    {
        name: "Figuras",
        description: "Coleccionables y articulados",
        icon: Sparkles,
        href: "#",
        count: 45,
        accent: "#8B2F8B",
    },
    {
        name: "Decoración",
        description: "Lámparas y macetas",
        icon: Palette,
        href: "#",
        count: 32,
        accent: "#00B4B4",
    },
    {
        name: "Accesorios",
        description: "Soportes y organizadores",
        icon: Package,
        href: "#",
        count: 28,
        accent: "#F5A623",
    },
    {
        name: "Personalizados",
        description: "Diseños a medida",
        icon: Box,
        href: "#",
        count: 100,
        accent: "#8B1A3D",
    },
]

export function Categories() {
    return (
        <section id="categorias" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Categorías
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Explorá nuestras colecciones
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group relative p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                                style={{ backgroundColor: `${category.accent}15` }}
                            >
                                <category.icon
                                    className="w-6 h-6"
                                    style={{ color: category.accent }}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#8B2F8B] transition-colors">
                                {category.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {category.count} productos
                            </p>

                            {/* Arrow */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
