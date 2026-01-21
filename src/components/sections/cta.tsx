"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B2F8B] via-[#5A1F5A] to-[#00B4B4]" />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B4B4]/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-50" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <BlurFade>
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 border border-white/20">
                            <MessageCircle className="w-4 h-4" />
                            ¿Tenés una idea?
                        </span>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Convertí Tu Idea en{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Realidad</span>
                                <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#F5A623]/40 -rotate-1" />
                            </span>
                        </h2>

                        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                            Hacemos impresiones 3D personalizadas. Contanos qué necesitás
                            y te damos un presupuesto sin compromiso.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <ShimmerButton
                                className="text-lg px-10 py-5 font-bold"
                                background="linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)"
                                shimmerColor="rgba(139, 47, 139, 0.3)"
                            >
                                <span className="text-gray-900 flex items-center gap-2">
                                    Solicitar Presupuesto
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </ShimmerButton>

                            <a
                                href="https://wa.me/5491112345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
