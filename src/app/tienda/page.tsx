"use client"

import Image from "next/image"
import Link from "next/link"
import {
    ShoppingCart, Search, Menu, X, User, Heart, ChevronRight, ChevronDown,
    Phone, Mail, MapPin, Truck, CreditCard, Shield, Clock, Star,
    Printer, Package, Settings, Palette, Wrench, Zap, Award, Headphones,
    Facebook, Instagram, MessageCircle, ArrowRight
} from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ============================================
// CONFIGURACIÓN
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
        instagram: "#"
    },
    colors: {
        primary: "#8B2F8B",    // Purple
        secondary: "#00B4B4",  // Cyan
        accent: "#F5A623",     // Orange
    }
}

const navLinks = [
    { name: "Inicio", href: "/tienda" },
    { name: "Impresoras", href: "#" },
    { name: "Filamentos", href: "#" },
    { name: "Accesorios", href: "#" },
    { name: "Ofertas", href: "#", highlight: true },
]

const categories = [
    {
        name: "Filamentos",
        icon: Palette,
        href: "#",
        description: "PLA, PETG, ABS, TPU",
        color: "from-purple-500 to-purple-600",
        items: 45
    },
    {
        name: "Impresoras 3D",
        icon: Printer,
        href: "#",
        description: "FDM y Resina",
        color: "from-cyan-500 to-cyan-600",
        items: 12
    },
    {
        name: "Repuestos",
        icon: Settings,
        href: "#",
        description: "Boquillas, motores, correas",
        color: "from-orange-500 to-orange-600",
        items: 38
    },
    {
        name: "Accesorios",
        icon: Package,
        href: "#",
        description: "Herramientas y más",
        color: "from-pink-500 to-pink-600",
        items: 24
    },
]

const features = [
    { icon: Truck, title: "Envío Gratis", desc: "En compras +$50.000" },
    { icon: CreditCard, title: "12 Cuotas", desc: "Sin interés" },
    { icon: Shield, title: "Garantía", desc: "12 meses" },
    { icon: Headphones, title: "Soporte", desc: "Atención 24/7" },
]

// ============================================
// COMPONENTES
// ============================================

function FloatingWhatsApp() {
    return (
        <motion.a
            href={`https://wa.me/${CONFIG.contact.whatsapp}`}
            target="_blank"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
    )
}

function CountdownBanner() {
    const [time, setTime] = useState({ days: 3, hours: 12, minutes: 45, seconds: 30 })

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                let { days, hours, minutes, seconds } = prev
                seconds--
                if (seconds < 0) { seconds = 59; minutes-- }
                if (minutes < 0) { minutes = 59; hours-- }
                if (hours < 0) { hours = 23; days-- }
                if (days < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
                return { days, hours, minutes, seconds }
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] text-white py-3">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold">OFERTAS ESPECIALES</span>
                </div>
                <div className="flex items-center gap-2">
                    <span>Termina en:</span>
                    <div className="flex gap-1">
                        {[
                            { v: time.days, l: "d" },
                            { v: time.hours, l: "h" },
                            { v: time.minutes, l: "m" },
                            { v: time.seconds, l: "s" },
                        ].map((t, i) => (
                            <span key={i} className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold">
                                {String(t.v).padStart(2, "0")}{t.l}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductCard({ product, index }: { product: any; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/producto/${product.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {product.image ? (
                        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Package className="w-16 h-16 text-gray-300" />
                        </div>
                    )}

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.badge && (
                            <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${product.badge === "NUEVO" ? "bg-green-500" :
                                    product.badge === "OFERTA" ? "bg-red-500" :
                                        "bg-[#8B2F8B]"
                                }`}>
                                {product.badge}
                            </span>
                        )}
                        {product.discount && (
                            <span className="px-3 py-1 text-xs font-bold bg-[#F5A623] text-white rounded-full">
                                -{product.discount}%
                            </span>
                        )}
                    </div>

                    {/* Quick actions */}
                    <motion.div
                        className="absolute top-3 right-3 flex flex-col gap-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                    >
                        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#8B2F8B] hover:text-white transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                    </motion.div>

                    {/* Add to cart */}
                    <motion.button
                        className="absolute bottom-3 left-3 right-3 py-3 bg-[#8B2F8B] text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[#7A2879] transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Agregar
                    </motion.button>
                </div>

                <div className="p-4">
                    <span className="text-xs text-[#00B4B4] font-medium uppercase tracking-wide">
                        {product.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2 group-hover:text-[#8B2F8B] transition-colors">
                        {product.name}
                    </h3>

                    {product.rating && (
                        <div className="flex items-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3.5 h-3.5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                    )}

                    <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-xl font-bold text-gray-900">
                            ${product.price?.toLocaleString("es-AR")}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                                ${product.originalPrice.toLocaleString("es-AR")}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

function EmptyProducts() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-20 text-center"
        >
            <div className="w-24 h-24 bg-gradient-to-br from-[#8B2F8B]/10 to-[#00B4B4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-12 h-12 text-[#8B2F8B]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Próximamente</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
                Estamos preparando productos increíbles para vos. ¡Volvé pronto!
            </p>
        </motion.div>
    )
}

// Productos de ejemplo (vacíos por defecto)
const sampleProducts: any[] = []

// ============================================
// PÁGINA PRINCIPAL
// ============================================

export default function Tienda() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white">
            {/* Countdown Banner */}
            <CountdownBanner />

            {/* Header */}
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Mobile menu button */}
                        <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileMenu(!mobileMenu)}>
                            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Logo */}
                        <Link href="/tienda" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#8B2F8B] to-[#00B4B4] rounded-xl flex items-center justify-center">
                                <Printer className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight hidden sm:block">
                                <span className="text-[#8B2F8B]">Grana</span>
                                <span className="text-gray-900">3D</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${link.highlight
                                            ? "text-[#8B2F8B] bg-[#8B2F8B]/5 hover:bg-[#8B2F8B]/10"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Search */}
                        <div className="hidden md:flex flex-1 max-w-md mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="w-full px-4 py-2.5 pl-11 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B2F8B]/20 focus:bg-white transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button className="md:hidden p-2" onClick={() => setSearchOpen(!searchOpen)}>
                                <Search className="w-5 h-5 text-gray-600" />
                            </button>
                            <Link href="#" className="hidden sm:flex p-2 text-gray-600 hover:text-[#8B2F8B] transition-colors">
                                <User className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hidden sm:flex p-2 text-gray-600 hover:text-[#8B2F8B] transition-colors">
                                <Heart className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="relative p-2 text-gray-600 hover:text-[#8B2F8B] transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute top-0 right-0 w-5 h-5 bg-[#8B2F8B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenu && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden border-t"
                        >
                            <nav className="px-4 py-4 space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero Banner */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2F8B]/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B4B4]/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
                                <Award className="w-4 h-4 text-[#F5A623]" />
                                Tienda Oficial Argentina
                            </span>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                                Todo para tu
                                <span className="block bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent">
                                    Impresión 3D
                                </span>
                            </h1>
                            <p className="text-lg text-gray-300 mb-8 max-w-lg">
                                Impresoras, filamentos, accesorios y repuestos de las mejores marcas. Envío a todo el país.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="#productos" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B2F8B] text-white font-medium rounded-xl hover:bg-[#7A2879] transition-colors">
                                    Ver Productos
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                                    Contactar
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="aspect-square relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B2F8B]/20 to-[#00B4B4]/20 rounded-3xl" />
                                <div className="absolute inset-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                                    <Printer className="w-32 h-32 text-white/20" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-8 border-b">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#8B2F8B]/10 to-[#00B4B4]/10 rounded-xl flex items-center justify-center shrink-0">
                                    <f.icon className="w-6 h-6 text-[#8B2F8B]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{f.title}</h4>
                                    <p className="text-sm text-gray-500">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Categorías</h2>
                        <p className="text-gray-500">Explorá nuestra selección de productos</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={cat.href}
                                    className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <cat.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{cat.description}</p>
                                    <span className="text-xs text-[#8B2F8B] font-medium">{cat.items} productos</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section id="productos" className="py-12 lg:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Productos Destacados</h2>
                            <p className="text-gray-500">Los favoritos de nuestros clientes</p>
                        </div>
                        <Link href="#" className="hidden sm:flex items-center gap-2 text-[#8B2F8B] font-medium hover:underline">
                            Ver todos <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {sampleProducts.length > 0 ? (
                            sampleProducts.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)
                        ) : (
                            <EmptyProducts />
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative overflow-hidden bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] rounded-3xl p-8 lg:p-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5A623]/20 rounded-full blur-3xl" />

                        <div className="relative flex flex-col lg:flex-row items-center gap-8">
                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    ¿Tenés dudas sobre qué comprar?
                                </h2>
                                <p className="text-white/80 text-lg mb-6">
                                    Nuestro equipo te asesora para elegir el producto ideal para tu proyecto.
                                </p>
                                <a
                                    href={`https://wa.me/${CONFIG.contact.whatsapp}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8B2F8B] font-bold rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Contactar por WhatsApp
                                </a>
                            </div>
                            <div className="w-48 h-48 bg-white/10 rounded-2xl flex items-center justify-center">
                                <Headphones className="w-20 h-20 text-white/40" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2 lg:col-span-1">
                            <Link href="/" className="inline-flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#8B2F8B] to-[#00B4B4] rounded-xl flex items-center justify-center">
                                    <Printer className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">
                                    <span className="text-[#8B2F8B]">Grana</span>3D
                                </span>
                            </Link>
                            <p className="text-gray-400 text-sm mb-4">{CONFIG.tagline}</p>
                            <div className="flex gap-3">
                                <a href={CONFIG.social.facebook} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href={CONFIG.social.instagram} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Tienda</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">Impresoras</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Filamentos</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Accesorios</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Ofertas</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Ayuda</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white transition-colors">Contacto</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Envíos</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Devoluciones</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contacto</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-[#00B4B4]" />
                                    {CONFIG.contact.email}
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-[#00B4B4]" />
                                    {CONFIG.contact.phone}
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#00B4B4]" />
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

            {/* WhatsApp Float */}
            <FloatingWhatsApp />
        </div>
    )
}
