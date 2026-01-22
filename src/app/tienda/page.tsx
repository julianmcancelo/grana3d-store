"use client"

import Image from "next/image"
import Link from "next/link"
import {
    ShoppingCart, Search, Menu, X, User, Heart, ChevronRight,
    Phone, Mail, MapPin, Truck, CreditCard, Shield, Clock,
    Printer, Package, Settings, Palette, Wrench,
    Facebook, Instagram, Twitter
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

// ============================================
// CONFIGURACIÓN - Editá estos datos
// ============================================

const CONFIG = {
    storeName: "Grana3D",
    tagline: "Impresión 3D Premium",
    contact: {
        email: "hola@grana3d.com.ar",
        phone: "+54 11 1234-5678",
        whatsapp: "5491112345678",
        location: "Buenos Aires, Argentina"
    },
    social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
    }
}

const navLinks = [
    { name: "Impresoras", href: "#", icon: Printer },
    { name: "Filamentos", href: "#", icon: Palette },
    { name: "Accesorios", href: "#", icon: Package },
    { name: "Repuestos", href: "#", icon: Wrench },
    { name: "Contacto", href: "#", icon: Phone },
]

const categories = [
    { name: "Filamentos", icon: Palette, href: "#", description: "PLA, PETG, ABS y más" },
    { name: "Impresoras", icon: Printer, href: "#", description: "FDM y Resina" },
    { name: "Repuestos", icon: Settings, href: "#", description: "Boquillas, correas, motores" },
]

const trustBadges = [
    { icon: Truck, text: "Envío a todo el país" },
    { icon: CreditCard, text: "Hasta 12 cuotas" },
    { icon: Shield, text: "Compra protegida" },
    { icon: Clock, text: "Soporte 24/7" },
]

// Arrays vacíos - agregar productos reales
const latestProducts: {
    id: string
    name: string
    price: number
    image: string
    badge?: string
}[] = []

const bestSellers: typeof latestProducts = []

// ============================================
// COMPONENTES
// ============================================

function ProductCard({ product }: { product: typeof latestProducts[0] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Link href={`/producto/${product.id}`} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square bg-gray-50">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.badge && (
                        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                            {product.badge}
                        </span>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                            <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="mt-2 text-xl font-bold text-gray-900">
                        ${product.price.toLocaleString("es-AR")}
                    </p>
                </div>
            </Link>
        </motion.div>
    )
}

function EmptyState({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-16 text-center"
        >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-500">{subtitle}</p>
        </motion.div>
    )
}

// ============================================
// PÁGINA PRINCIPAL
// ============================================

export default function Tienda() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [activeTab, setActiveTab] = useState("filamentos")

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gray-900 text-white sticky top-0 z-50">
                {/* Top bar */}
                <div className="bg-gray-950 text-xs py-2">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <a href={`tel:${CONFIG.contact.phone}`} className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">{CONFIG.contact.phone}</span>
                            </a>
                            <a href={`mailto:${CONFIG.contact.email}`} className="hidden md:flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-3.5 h-3.5" />
                                {CONFIG.contact.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href={CONFIG.social.facebook} className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href={CONFIG.social.instagram} className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main nav */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        <Link href="/" className="text-xl font-bold tracking-tight">
                            <span className="text-blue-500">Grana</span>
                            <span>3D</span>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    <link.icon className="w-4 h-4" />
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3">
                            <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                                <User className="w-5 h-5" />
                            </button>
                            <Link href="#" className="relative flex w-9 h-9 items-center justify-center rounded-lg hover:bg-white/10 transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenu && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="lg:hidden border-t border-white/10"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
                                    onClick={() => setMobileMenu(false)}
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </header>

            {/* Hero / Categories */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={cat.href}
                                    className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors group"
                                >
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <cat.icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                                        <p className="text-sm text-blue-100">{cat.description}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-white/50 ml-auto group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {trustBadges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <badge.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Products */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Últimos ingresos</h2>
                        <Link href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                            Ver todos <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {latestProducts.length > 0 ? (
                            latestProducts.map((product) => <ProductCard key={product.id} product={product} />)
                        ) : (
                            <EmptyState title="Próximamente" subtitle="Estamos cargando nuevos productos" />
                        )}
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Lo más vendido</h2>

                    {/* Tabs */}
                    <div className="flex justify-center gap-2 mb-8">
                        {["filamentos", "impresoras", "accesorios"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                                        : "bg-white text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {bestSellers.length > 0 ? (
                            bestSellers.map((product) => <ProductCard key={product.id} product={product} />)
                        ) : (
                            <EmptyState title="Próximamente" subtitle="Los productos más populares aparecerán aquí" />
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <Link href="/" className="inline-block text-xl font-bold tracking-tight mb-4">
                                <span className="text-blue-500">Grana</span>3D
                            </Link>
                            <p className="text-gray-400 text-sm max-w-sm">
                                {CONFIG.tagline}. Tu tienda de confianza para todo lo relacionado con impresión 3D.
                            </p>
                            <div className="flex gap-3 mt-4">
                                <a href={CONFIG.social.facebook} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href={CONFIG.social.instagram} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href={CONFIG.social.twitter} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Navegación</h4>
                            <ul className="space-y-2.5 text-gray-400 text-sm">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-semibold mb-4">Contacto</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>
                                    <a href={`mailto:${CONFIG.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                        <Mail className="w-4 h-4 text-blue-500" />
                                        {CONFIG.contact.email}
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:${CONFIG.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                                        <Phone className="w-4 h-4 text-blue-500" />
                                        {CONFIG.contact.phone}
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    {CONFIG.contact.location}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} {CONFIG.storeName}. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    )
}
