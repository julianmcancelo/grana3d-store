"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "#productos" },
    { name: "Categorías", href: "#categorias" },
    { name: "Contacto", href: "#contacto" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Promo Bar - Grana Colors */}
            <div className="bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] text-white text-center py-2 text-sm font-medium">
                <span className="animate-pulse">✨</span> Envío GRATIS en compras superiores a $10.000 <span className="animate-pulse">✨</span>
            </div>

            {/* Main Header */}
            <div className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="/logo.png"
                                    alt="Grana 3D"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-2xl font-black bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent">
                                    Grana 3D
                                </span>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase">
                                    Hacemos Realidad Tus Ideas
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#8B2F8B] dark:hover:text-[#00B4B4] rounded-full hover:bg-purple-50 dark:hover:bg-cyan-950/50 transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <button className="hidden sm:flex w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-center transition-colors">
                                <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </button>

                            <ThemeToggle />

                            {/* Cart - Grana Gradient */}
                            <button className="relative p-2.5 rounded-full bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] hover:from-[#7A2879] hover:to-[#009999] transition-all shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5">
                                <ShoppingCart className="w-5 h-5 text-white" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F5A623] text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                                    3
                                </span>
                            </button>

                            {/* Mobile menu button */}
                            <button
                                className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={cn(
                            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
                            mobileMenuOpen ? "max-h-80 pb-6" : "max-h-0"
                        )}
                    >
                        <div className="flex flex-col gap-1 pt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-cyan-950/50 hover:text-[#8B2F8B] dark:hover:text-[#00B4B4] rounded-xl transition-all"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
