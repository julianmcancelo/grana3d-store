"use client"

import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Meteors } from "@/components/ui/meteors"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { BlurFade } from "@/components/ui/blur-fade"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-indigo-950/20 dark:to-gray-950">
            {/* Background Effects */}
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            />
            <Meteors number={15} />

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <BlurFade delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Impresión 3D de Alta Calidad</span>
                    </div>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Da Vida a Tus{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            Ideas
                        </span>
                    </h1>
                </BlurFade>

                <BlurFade delay={0.3}>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Figuras, decoración y accesorios únicos impresos en 3D.
                        Calidad premium con atención al detalle para coleccionistas y entusiastas.
                    </p>
                </BlurFade>

                <BlurFade delay={0.4}>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <ShimmerButton className="text-base px-8 py-4">
                            Ver Productos
                            <ArrowRight className="w-5 h-5" />
                        </ShimmerButton>

                        <button className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Solicitar Personalizado
                        </button>
                    </div>
                </BlurFade>

                <BlurFade delay={0.5}>
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">Envíos a Todo el País</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">⭐ 4.9 de 500+ reseñas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">🎨 +200 Diseños</span>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
