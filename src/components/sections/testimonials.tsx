"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "María García",
        role: "Coleccionista",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        content: "La calidad de las figuras es increíble. Cada detalle está perfectamente logrado. Superó todas mis expectativas.",
        rating: 5,
    },
    {
        name: "Carlos Rodríguez",
        role: "Diseñador 3D",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        content: "Como profesional del 3D, puedo decir que su trabajo es de los mejores que he visto. Precisión impecable.",
        rating: 5,
    },
    {
        name: "Ana Martínez",
        role: "Gamer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        content: "Los soportes para auriculares y accesorios gamer son perfectos. Funcionales y con un diseño espectacular.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-950 dark:via-[#1a0a1a]/30 dark:to-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#8B2F8B]/10 via-transparent to-[#00B4B4]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <BlurFade>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 text-[#8B2F8B] dark:text-[#00B4B4] text-sm font-semibold rounded-full mb-4">
                            ⭐ TESTIMONIOS
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
                            Lo Que Dicen{" "}
                            <span className="bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent">
                                Nuestros Clientes
                            </span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Más de 500 clientes satisfechos confían en nosotros
                        </p>
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <BlurFade key={testimonial.name} delay={index * 0.15}>
                            <div className="group relative p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-gray-800/50 hover:border-[#00B4B4]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/10">
                                {/* Quote icon */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#8B2F8B] to-[#00B4B4] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
                                    <Quote className="w-6 h-6 text-white" fill="white" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00B4B4]/30">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                                        <p className="text-sm text-[#8B2F8B] dark:text-[#00B4B4]">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Decorative gradient line */}
                                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}
