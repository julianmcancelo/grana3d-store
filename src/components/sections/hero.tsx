"use client"

import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Meteors } from "@/components/ui/meteors"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { BlurFade } from "@/components/ui/blur-fade"
import { ArrowRight, Sparkles, Star, Truck, Shield, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Animated text component
function AnimatedText({ text, className }: { text: string; className?: string }) {
    return (
        <span className={className}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block animate-text-reveal"
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    )
}

// Floating 3D Cube
function FloatingCube({ delay = 0, size = 60, position }: { delay?: number; size?: number; position: string }) {
    return (
        <div
            className={`absolute ${position} hidden lg:block`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div
                className="relative animate-float-slow"
                style={{
                    width: size,
                    height: size,
                    transformStyle: 'preserve-3d',
                    animation: `spin3d 20s linear infinite, float 6s ease-in-out infinite`,
                    animationDelay: `${delay}s`
                }}
            >
                {/* Cube faces */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#8B2F8B]/80 to-[#8B2F8B]/40 backdrop-blur-sm border border-white/20 rounded-xl"
                    style={{ transform: `translateZ(${size / 2}px)` }} />
                <div className="absolute w-full h-full bg-gradient-to-br from-[#00B4B4]/80 to-[#00B4B4]/40 backdrop-blur-sm border border-white/20 rounded-xl"
                    style={{ transform: `rotateY(90deg) translateZ(${size / 2}px)` }} />
                <div className="absolute w-full h-full bg-gradient-to-br from-[#F5A623]/80 to-[#F5A623]/40 backdrop-blur-sm border border-white/20 rounded-xl"
                    style={{ transform: `rotateY(-90deg) translateZ(${size / 2}px)` }} />
            </div>
        </div>
    )
}

// Stat counter with animation
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [value])

    return <span>{count.toLocaleString('es-AR')}{suffix}</span>
}

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-cyan-50 dark:from-[#1a0a1a] dark:via-gray-950 dark:to-[#0a1a1a]">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEzOSw0NywxMzksMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
            </div>

            {/* Background Effects */}
            <AnimatedGridPattern
                numSquares={50}
                maxOpacity={0.06}
                duration={5}
                className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
            />
            <Meteors number={25} />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8B2F8B]/40 via-purple-400/20 to-transparent rounded-full blur-[100px] animate-blob" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00B4B4]/40 via-cyan-400/20 to-transparent rounded-full blur-[100px] animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#F5A623]/20 via-orange-400/10 to-transparent rounded-full blur-[120px] animate-blob animation-delay-4000" />

            {/* Floating 3D Elements */}
            <FloatingCube position="top-32 right-32" size={70} delay={0} />
            <FloatingCube position="bottom-40 left-24" size={50} delay={2} />
            <FloatingCube position="top-1/3 left-16" size={40} delay={4} />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-[#8B2F8B] to-[#00B4B4] opacity-60 animate-float-particle hidden lg:block"
                    style={{
                        left: `${10 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${4 + i}s`
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                {/* Logo with Glow Effect */}
                <BlurFade delay={0.05}>
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] rounded-full blur-2xl opacity-30 animate-pulse scale-150" />
                            <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                                <Image
                                    src="/logo.png"
                                    alt="Grana 3D Logo"
                                    fill
                                    className="object-contain drop-shadow-2xl animate-float-slow"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl text-[#8B2F8B] dark:text-[#00B4B4] text-sm font-semibold mb-8 shadow-xl shadow-purple-500/10 border border-purple-200/50 dark:border-cyan-700/50 hover:scale-105 transition-transform cursor-pointer group">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <Sparkles className="w-4 h-4 animate-spin-slow" />
                        <span>Impresión 3D Premium en Argentina</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </BlurFade>

                <BlurFade delay={0.2}>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.85]">
                        <span className="block mb-2">Hacemos Realidad</span>
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent animate-gradient bg-[length:300%_auto]">
                                Tus Ideas
                            </span>
                            {/* Underline decoration */}
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                <path
                                    d="M2 10C50 3 100 3 150 6C200 9 250 5 298 8"
                                    stroke="url(#underline-gradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    className="animate-draw-line"
                                />
                                <defs>
                                    <linearGradient id="underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#8B2F8B" />
                                        <stop offset="50%" stopColor="#00B4B4" />
                                        <stop offset="100%" stopColor="#F5A623" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h1>
                </BlurFade>

                <BlurFade delay={0.3}>
                    <p className="mt-10 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Figuras articuladas, decoración única y accesorios personalizados.
                        <br />
                        <span className="font-semibold bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] bg-clip-text text-transparent">
                            Calidad premium
                        </span>{" "}
                        para coleccionistas exigentes.
                    </p>
                </BlurFade>

                <BlurFade delay={0.4}>
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <ShimmerButton
                            className="text-lg px-12 py-6 shadow-2xl shadow-purple-500/30 font-bold"
                            background="linear-gradient(135deg, #8B2F8B 0%, #00B4B4 100%)"
                        >
                            <span className="flex items-center gap-3">
                                Ver Catálogo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </ShimmerButton>

                        <button className="group px-12 py-6 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-white font-bold text-lg hover:border-[#00B4B4] dark:hover:border-[#00B4B4] hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1">
                            <span className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] flex items-center justify-center">
                                    <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                                </div>
                                Ver Demo
                            </span>
                        </button>
                    </div>
                </BlurFade>

                {/* Stats Section */}
                <BlurFade delay={0.5}>
                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { value: 500, suffix: "+", label: "Clientes Felices" },
                            { value: 1200, suffix: "+", label: "Piezas Creadas" },
                            { value: 50, suffix: "+", label: "Diseños Únicos" },
                            { value: 4.9, suffix: "★", label: "Calificación" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group relative p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-gray-800/50 hover:border-[#00B4B4]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B2F8B]/5 to-[#00B4B4]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <p className="relative text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] bg-clip-text text-transparent">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="relative mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </BlurFade>

                {/* Trust Badges */}
                <BlurFade delay={0.6}>
                    <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                        {[
                            { icon: Star, label: "4.9 Rating", sublabel: "500+ Reseñas", gradient: "from-[#F5A623] to-orange-600" },
                            { icon: Truck, label: "Envío Gratis", sublabel: "+$10.000", gradient: "from-[#00B4B4] to-teal-600" },
                            { icon: Shield, label: "Garantía", sublabel: "30 días", gradient: "from-[#8B2F8B] to-purple-600" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-4 px-6 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 dark:border-gray-800/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6 text-white" fill={index === 0 ? "white" : "none"} />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-gray-900 dark:text-white">{item.label}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </BlurFade>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs font-medium text-gray-400">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-[#8B2F8B]/30 dark:border-[#00B4B4]/30 flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-gradient-to-b from-[#8B2F8B] to-[#00B4B4] rounded-full animate-scroll-indicator" />
                    </div>
                </div>
            </div>
        </section>
    )
}
