"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Printer, Palette, Package, Sparkles, ArrowRight } from "lucide-react"

const categories = [
    {
        name: "Figuras Coleccionables",
        description: "Personajes únicos y articulados para tu colección",
        icon: Sparkles,
        gradient: "from-[#8B2F8B] via-purple-600 to-[#00B4B4]",
        count: 45,
        image: "🐉",
    },
    {
        name: "Decoración",
        description: "Lámparas, macetas y piezas decorativas",
        icon: Palette,
        gradient: "from-[#00B4B4] via-teal-500 to-[#2DD4BF]",
        count: 32,
        image: "🌙",
    },
    {
        name: "Accesorios",
        description: "Organizadores y soportes funcionales",
        icon: Package,
        gradient: "from-[#F5A623] via-orange-500 to-[#8B1A3D]",
        count: 28,
        image: "🎧",
    },
    {
        name: "Personalizados",
        description: "Diseños únicos hechos a tu medida",
        icon: Printer,
        gradient: "from-[#8B1A3D] via-rose-600 to-[#8B2F8B]",
        count: 100,
        image: "🎨",
    },
]

export function Categories() {
    return (
        <section id="categorias" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background Decoration - Grana Colors */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#8B2F8B]/10 to-[#00B4B4]/10 dark:from-[#8B2F8B]/5 dark:to-[#00B4B4]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#F5A623]/10 to-[#8B1A3D]/10 dark:from-[#F5A623]/5 dark:to-[#8B1A3D]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <BlurFade>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 text-[#8B2F8B] dark:text-[#00B4B4] text-sm font-semibold rounded-full mb-4">
                            CATEGORÍAS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
                            Explora Nuestra{" "}
                            <span className="bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent">
                                Colección
                            </span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Encuentra la pieza perfecta en nuestra selección curada
                        </p>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <BlurFade key={category.name} delay={index * 0.1}>
                            <div className="group relative p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-2xl">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Emoji Icon */}
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {category.image}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors mb-4">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-[#8B2F8B] dark:text-[#00B4B4] group-hover:text-white/90 transition-colors">
                                            {category.count}+ productos
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-white/20 flex items-center justify-center transition-all group-hover:translate-x-1">
                                            <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}
