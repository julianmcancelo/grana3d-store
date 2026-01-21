"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative bg-white">
            {/* Main Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B2F8B]/10 text-[#8B2F8B] text-sm font-medium rounded-full mb-6">
                            <span className="w-2 h-2 bg-[#8B2F8B] rounded-full"></span>
                            Impresión 3D Premium
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Hacemos realidad
                            <br />
                            <span className="text-[#8B2F8B]">tus ideas</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-md leading-relaxed">
                            Figuras coleccionables, decoración moderna y accesorios únicos. Calidad premium en cada capa.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="#productos"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B2F8B] text-white font-medium rounded-lg hover:bg-[#7A2879] transition-colors"
                            >
                                Ver Productos
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#categorias"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-[#8B2F8B] hover:text-[#8B2F8B] transition-colors"
                            >
                                Explorar
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 flex gap-8">
                            <div>
                                <div className="text-2xl font-bold text-[#8B2F8B]">500+</div>
                                <div className="text-sm text-gray-500">Productos</div>
                            </div>
                            <div className="w-px bg-gray-200"></div>
                            <div>
                                <div className="text-2xl font-bold text-[#00B4B4]">1.2k+</div>
                                <div className="text-sm text-gray-500">Clientes</div>
                            </div>
                            <div className="w-px bg-gray-200"></div>
                            <div>
                                <div className="text-2xl font-bold text-[#F5A623]">4.9★</div>
                                <div className="text-sm text-gray-500">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Logo/Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                            {/* Decorative circles */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B2F8B]/10 via-[#00B4B4]/10 to-[#F5A623]/10 rounded-full"></div>
                            <div className="absolute inset-4 bg-white rounded-full shadow-lg"></div>
                            <Image
                                src="/logo.png"
                                alt="Grana 3D"
                                fill
                                className="object-contain p-8 drop-shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Promo Strip */}
            <div className="border-t border-b border-gray-100 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#8B2F8B] rounded-full"></span>
                            Envío Gratis +$10.000
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#00B4B4] rounded-full"></span>
                            3 Cuotas Sin Interés
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#F5A623] rounded-full"></span>
                            Garantía 30 Días
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
