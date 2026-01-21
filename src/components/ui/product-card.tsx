"use client"

import Image from "next/image"
import { ShoppingCart, Heart, Eye } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { useState } from "react"

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
    const [isLiked, setIsLiked] = useState(false)

    return (
        <BlurFade delay={delay * 0.1}>
            <div className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-gray-950/50 transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-[#00B4B4]/30 dark:hover:border-[#00B4B4]/30 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badges - Grana Colors */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {isNew && (
                            <span className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] text-white rounded-full shadow-lg shadow-purple-500/30 animate-pulse">
                                ✨ NUEVO
                            </span>
                        )}
                        {discount && (
                            <span className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-[#F5A623] to-[#8B1A3D] text-white rounded-full shadow-lg shadow-orange-500/30">
                                -{discount}% OFF
                            </span>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 ${isLiked
                                    ? 'bg-[#8B1A3D] text-white'
                                    : 'bg-white/90 dark:bg-gray-900/90 hover:bg-rose-50 dark:hover:bg-rose-950 hover:text-[#8B1A3D]'
                                }`}
                        >
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                        </button>
                        <button className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-[#00B4B4] transition-colors">
                            <Eye className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Add to Cart Button - Grana Gradient */}
                    <div className="absolute inset-x-4 bottom-4 translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
                        <button className="w-full py-3.5 bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] hover:from-[#7A2879] hover:to-[#009999] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40">
                            <ShoppingCart className="w-5 h-5" />
                            Agregar al Carrito
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#8B2F8B] dark:text-[#00B4B4] uppercase tracking-wider bg-purple-50 dark:bg-cyan-950/50 px-2.5 py-1 rounded-full">
                            {category}
                        </span>
                    </div>

                    <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 min-h-[3rem] text-lg leading-snug group-hover:text-[#8B2F8B] dark:group-hover:text-[#00B4B4] transition-colors">
                        {name}
                    </h3>

                    <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-2xl font-black bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] bg-clip-text text-transparent">
                            ${price.toLocaleString("es-AR")}
                        </span>
                        {originalPrice && (
                            <span className="text-sm text-gray-400 line-through font-medium">
                                ${originalPrice.toLocaleString("es-AR")}
                            </span>
                        )}
                    </div>

                    {/* Rating Stars */}
                    <div className="mt-3 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className="w-4 h-4 text-[#F5A623] fill-[#F5A623]"
                            />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">(42)</span>
                    </div>
                </div>
            </div>
        </BlurFade>
    )
}

function Star({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    )
}
