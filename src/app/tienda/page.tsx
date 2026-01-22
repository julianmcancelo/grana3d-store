"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronRight, Star, Truck, CreditCard, Shield, Clock } from "lucide-react"
import { useState, useEffect } from "react"

// Sample products data
const products = [
    {
        id: "1",
        name: "Impresora Bambu Lab P1S",
        price: 850000,
        originalPrice: 950000,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
        category: "Impresoras",
        badge: "OFERTA",
        badgeColor: "bg-red-500",
        rating: 4.9,
        reviews: 127,
    },
    {
        id: "2",
        name: "Filamento PLA Premium 1kg",
        price: 8500,
        originalPrice: 12000,
        image: "https://images.unsplash.com/photo-1631556097365-a7d1fc57a4f7?w=400&h=400&fit=crop",
        category: "Filamentos",
        badge: "-29%",
        badgeColor: "bg-red-500",
        rating: 4.8,
        reviews: 89,
    },
    {
        id: "3",
        name: "Bambu Lab X1 Carbon",
        price: 1250000,
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop",
        category: "Impresoras",
        badge: "NUEVO",
        badgeColor: "bg-green-500",
        rating: 5.0,
        reviews: 54,
    },
    {
        id: "4",
        name: "Kit de Boquillas 0.4mm",
        price: 4500,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
        category: "Accesorios",
        rating: 4.7,
        reviews: 203,
    },
    {
        id: "5",
        name: "Filamento PETG Transparente",
        price: 9500,
        originalPrice: 11000,
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=400&fit=crop",
        category: "Filamentos",
        badge: "-14%",
        badgeColor: "bg-red-500",
        rating: 4.6,
        reviews: 67,
    },
    {
        id: "6",
        name: "Base Magnética PEI",
        price: 25000,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        category: "Accesorios",
        badge: "POPULAR",
        badgeColor: "bg-purple-500",
        rating: 4.9,
        reviews: 156,
    },
    {
        id: "7",
        name: "Secador de Filamento",
        price: 45000,
        originalPrice: 55000,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
        category: "Accesorios",
        badge: "-18%",
        badgeColor: "bg-red-500",
        rating: 4.5,
        reviews: 42,
    },
    {
        id: "8",
        name: "Pack Filamentos x5 Colores",
        price: 35000,
        originalPrice: 42500,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        category: "Filamentos",
        badge: "PACK",
        badgeColor: "bg-blue-500",
        rating: 4.8,
        reviews: 91,
    },
]

const categories = [
    { name: "Impresoras 3D", icon: "🖨️", count: 12 },
    { name: "Filamentos", icon: "🧵", count: 45 },
    { name: "Accesorios", icon: "🔧", count: 28 },
    { name: "Resinas", icon: "💧", count: 15 },
    { name: "Repuestos", icon: "⚙️", count: 34 },
]

// Countdown component
function Countdown() {
    const [time, setTime] = useState({ days: 7, hours: 15, minutes: 42, seconds: 18 })

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                let { days, hours, minutes, seconds } = prev
                seconds--
                if (seconds < 0) { seconds = 59; minutes-- }
                if (minutes < 0) { minutes = 59; hours-- }
                if (hours < 0) { hours = 23; days-- }
                if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0 }
                return { days, hours, minutes, seconds }
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex gap-3">
            {[
                { value: time.days, label: "DÍAS" },
                { value: time.hours, label: "HS" },
                { value: time.minutes, label: "MIN" },
                { value: time.seconds, label: "SEG" },
            ].map((item, i) => (
                <div key={i} className="text-center">
                    <div className="bg-white text-gray-900 font-bold text-2xl w-14 h-14 flex items-center justify-center rounded">
                        {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs mt-1 text-white/80">{item.label}</div>
                </div>
            ))}
        </div>
    )
}

// Product Card component
function ProductCard({ product }: { product: typeof products[0] }) {
    return (
        <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative aspect-square bg-gray-100">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                {product.badge && (
                    <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${product.badgeColor}`}>
                        {product.badge}
                    </span>
                )}
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-50 hover:text-pink-500">
                    <Heart className="w-4 h-4" />
                </button>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#8B2F8B] text-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 hover:bg-[#7A2879]">
                    <ShoppingCart className="w-5 h-5" />
                </button>
            </div>
            <div className="p-4">
                <span className="text-xs text-gray-500 uppercase">{product.category}</span>
                <h3 className="font-medium text-gray-900 mt-1 line-clamp-2 group-hover:text-[#8B2F8B] transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-[#8B2F8B]">${product.price.toLocaleString("es-AR")}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${product.originalPrice.toLocaleString("es-AR")}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Tienda() {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                {/* Top bar */}
                <div className="bg-[#8B2F8B] text-white text-center py-2 text-sm">
                    <span>🚚 ENVÍO GRATIS en compras superiores a $50.000 | 💳 Hasta 12 cuotas sin interés</span>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold">
                                <span className="text-[#8B2F8B]">Grana</span>
                                <span className="text-gray-900">3D</span>
                            </span>
                        </Link>

                        <div className="hidden lg:flex flex-1 max-w-xl mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="¿Qué estás buscando?"
                                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-[#8B2F8B]"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="#" className="hidden sm:flex items-center gap-1 text-gray-600 hover:text-[#8B2F8B]">
                                <User className="w-5 h-5" />
                                <span className="text-sm">Ingresar</span>
                            </Link>
                            <Link href="#" className="relative">
                                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-[#8B2F8B]" />
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#8B2F8B] text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Categories nav */}
                <nav className="hidden lg:block border-t">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center gap-8 h-12">
                            {categories.map((cat) => (
                                <Link key={cat.name} href="#" className="text-sm text-gray-600 hover:text-[#8B2F8B] flex items-center gap-1">
                                    <span>{cat.icon}</span>
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Banner */}
            <section className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white">
                <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-[#8B2F8B] text-sm font-bold rounded-full mb-4">
                            🔥 PREVENTA ESPECIAL
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Impresoras Bambu Lab
                        </h1>
                        <p className="text-lg text-gray-300 mb-6">
                            Hasta 6 cuotas sin interés. Stock limitado.
                        </p>
                        <Countdown />
                        <Link href="#" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#8B2F8B] hover:bg-[#7A2879] text-white font-medium rounded-lg transition-colors">
                            Ver ofertas <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <div className="flex-1 relative h-64 lg:h-80 w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                            alt="Bambu Lab Printer"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Trust badges */}
            <section className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Truck, text: "Envío a todo el país" },
                            { icon: CreditCard, text: "Hasta 12 cuotas" },
                            { icon: Shield, text: "Compra segura" },
                            { icon: Clock, text: "Respuesta en 24hs" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <item.icon className="w-8 h-8 text-[#8B2F8B]" />
                                <span className="text-sm font-medium text-gray-700">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorías</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href="#"
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <span className="text-4xl mb-2">{cat.icon}</span>
                                <span className="font-medium text-gray-900 group-hover:text-[#8B2F8B] text-center">{cat.name}</span>
                                <span className="text-sm text-gray-500">{cat.count} productos</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Productos Destacados</h2>
                        <Link href="#" className="text-[#8B2F8B] font-medium hover:underline flex items-center gap-1">
                            Ver todos <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Promo Banner */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] rounded-2xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                Pack Inicio Impresión 3D
                            </h2>
                            <p className="text-lg text-white/80 mb-6">
                                Impresora + 5 filamentos + accesorios básicos. Todo lo que necesitás para empezar.
                            </p>
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-4xl font-bold">$599.999</span>
                                <span className="text-xl text-white/60 line-through">$750.000</span>
                            </div>
                            <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8B2F8B] font-bold rounded-lg hover:bg-gray-100 transition-colors">
                                Comprar ahora <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="flex-1 relative h-64 w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=300&fit=crop"
                                alt="Pack inicio"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                <span className="text-[#8B2F8B]">Grana</span>3D
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Tu tienda de impresión 3D en Argentina.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Tienda</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white">Impresoras</Link></li>
                                <li><Link href="#" className="hover:text-white">Filamentos</Link></li>
                                <li><Link href="#" className="hover:text-white">Accesorios</Link></li>
                                <li><Link href="#" className="hover:text-white">Ofertas</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Ayuda</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white">Contacto</Link></li>
                                <li><Link href="#" className="hover:text-white">Envíos</Link></li>
                                <li><Link href="#" className="hover:text-white">Devoluciones</Link></li>
                                <li><Link href="#" className="hover:text-white">Preguntas frecuentes</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contacto</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>📧 hola@grana3d.com.ar</li>
                                <li>📞 +54 11 1234-5678</li>
                                <li>📍 Buenos Aires, Argentina</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                        © 2024 Grana3D. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    )
}
