"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Printer, Palette, Package, Sparkles } from "lucide-react"

const categories = [
    {
        name: "Figuras Coleccionables",
        description: "Personajes únicos y articulados",
        icon: Sparkles,
        color: "from-indigo-500 to-purple-500",
        count: 45,
    },
    {
        name: "Decoración",
        description: "Lámparas, macetas y más",
        icon: Palette,
        color: "from-rose-500 to-pink-500",
        count: 32,
    },
    {
        name: "Accesorios",
        description: "Organizadores y soportes",
        icon: Package,
        color: "from-amber-500 to-orange-500",
        count: 28,
    },
    {
        name: "Personalizados",
        description: "Diseños a tu medida",
        icon: Printer,
        color: "from-emerald-500 to-teal-500",
        count: 100,
    },
]

export function Categories() {
    return (
        <section id="categorias" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <BlurFade>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                            Explora por Categoría
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Encuentra exactamente lo que buscas
                        </p>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <BlurFade key={category.name} delay={index * 0.1}>
                            <div className="group relative p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 cursor-pointer overflow-hidden">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    {category.description}
                                </p>
                                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                                    {category.count}+ productos
                                </span>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}
