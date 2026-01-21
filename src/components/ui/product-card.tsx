"use client"

import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { BlurFade } from "@/components/ui/blur-fade"

interface ProductCardProps {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    isNew?: boolean
    discount?: number
    delay?: number
}

export function ProductCard({
    name,
    price,
    originalPrice,
    image,
    category,
    isNew,
    discount,
    delay = 0,
}: ProductCardProps) {
    return (
        <BlurFade delay={delay * 0.1}>
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-gray-950/50 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {isNew && (
                            <span className="px-3 py-1 text-xs font-bold bg-indigo-600 text-white rounded-full">
                                NUEVO
                            </span>
                        )}
                        {discount && (
                            <span className="px-3 py-1 text-xs font-bold bg-rose-500 text-white rounded-full">
                                -{discount}%
                            </span>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-9 h-9 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:bg-rose-50 dark:hover:bg-rose-950 hover:text-rose-500 transition-colors">
                            <Heart className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-full py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-600 hover:text-white transition-colors">
                            <ShoppingCart className="w-4 h-4" />
                            Agregar al Carrito
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                        {category}
                    </span>
                    <h3 className="mt-1 font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                            ${price.toLocaleString("es-AR")}
                        </span>
                        {originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                                ${originalPrice.toLocaleString("es-AR")}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </BlurFade>
    )
}
