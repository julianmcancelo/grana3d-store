"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Search } from "lucide-react"
import { useState } from "react"

const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "#productos" },
    { name: "Figuras", href: "#" },
    { name: "Decoración", href: "#" },
    { name: "Accesorios", href: "#" },
    { name: "Contacto", href: "#contacto" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-tight">
                            <span className="text-[#8B2F8B]">Grana</span>
                            <span className="text-gray-900">3D</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-[#8B2F8B] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex p-2 text-gray-600 hover:text-[#8B2F8B] transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <Link href="#" className="relative p-2 text-gray-600 hover:text-[#8B2F8B] transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#8B2F8B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100">
                    <div className="px-4 py-4 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-gray-600 hover:text-[#8B2F8B]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
