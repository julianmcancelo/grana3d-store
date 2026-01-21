"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    inStock?: boolean
    isNew?: boolean
    discount?: number
}

export function ProductCard({
    id,
    name,
    price,
    originalPrice,
    image,
    category,
    inStock = true,
    isNew,
    discount,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                <Link href={`/producto/${id}`}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {!inStock && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-white rounded-md">
                            Agotado
                        </span>
                    )}
                    {isNew && inStock && (
                        <span className="px-2 py-1 text-xs font-medium bg-[#8B2F8B] text-white rounded-md">
                            Nuevo
                        </span>
                    )}
                    {discount && inStock && (
                        <span className="px-2 py-1 text-xs font-medium bg-[#F5A623] text-white rounded-md">
                            -{discount}%
                        </span>
                    )}
                </div>

                {/* Add Button */}
                {inStock && (
                    <button
                        className={`absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#8B2F8B] hover:text-white ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Content */}
            <div className="mt-3">
                <span className="text-xs text-gray-400 uppercase tracking-wide">
                    {category}
                </span>
                <Link href={`/producto/${id}`}>
                    <h3 className="text-sm font-medium text-gray-900 mt-1 group-hover:text-[#8B2F8B] transition-colors line-clamp-2">
                        {name}
                    </h3>
                </Link>
                <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm font-bold text-gray-900">
                        ${price.toLocaleString("es-AR")}
                    </span>
                    {originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                            ${originalPrice.toLocaleString("es-AR")}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
