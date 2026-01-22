"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X, User, Heart, ChevronRight, Star, Truck, CreditCard, Shield, Clock } from "lucide-react"
import { useState } from "react"

// ============================================
// CONFIGURACIÓN - Editá estos datos
// ============================================

const CONFIG = {
    storeName: "Grana3D",
    storeDescription: "Tu tienda de impresión 3D en Argentina",
    contact: {
        email: "hola@grana3d.com.ar",
        phone: "+54 11 1234-5678",
        location: "Buenos Aires, Argentina"
    },
    promoText: "🚚 ENVÍO GRATIS en compras superiores a $50.000 | 💳 Hasta 12 cuotas sin interés",
}

const categories = [
    { name: "Impresoras 3D", icon: "🖨️", href: "#", count: 0 },
    { name: "Filamentos", icon: "🧵", href: "#", count: 0 },
    { name: "Accesorios", icon: "🔧", href: "#", count: 0 },
    { name: "Resinas", icon: "💧", href: "#", count: 0 },
    { name: "Repuestos", icon: "⚙️", href: "#", count: 0 },
]

// Los productos se cargarán desde una API o base de datos
// Por ahora está vacío
const products: {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    badge?: string
    badgeColor?: string
    rating?: number
    reviews?: number
}[] = []

// ============================================
// COMPONENTES
// ============================================

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
                {product.rating && (
                    <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                )}
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

function EmptyState() {
    return (
        <div className="col-span-full py-16 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Próximamente</h3>
            <p className="text-gray-500">Estamos cargando nuestros productos. ¡Volvé pronto!</p>
        </div>
    )
}

// ============================================
// PÁGINA PRINCIPAL
// ============================================

export default function Tienda() {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="bg-[#8B2F8B] text-white text-center py-2 text-sm">
                    <span>{CONFIG.promoText}</span>
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
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#8B2F8B] text-white text-xs font-bold rounded-full flex items-center justify-center">0</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <nav className="hidden lg:block border-t">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center gap-8 h-12">
                            {categories.map((cat) => (
                                <Link key={cat.name} href={cat.href} className="text-sm text-gray-600 hover:text-[#8B2F8B] flex items-center gap-1">
                                    <span>{cat.icon}</span>
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero */}
            <section className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        Bienvenido a {CONFIG.storeName}
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        {CONFIG.storeDescription}
                    </p>
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
                                href={cat.href}
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <span className="text-4xl mb-2">{cat.icon}</span>
                                <span className="font-medium text-gray-900 group-hover:text-[#8B2F8B] text-center">{cat.name}</span>
                                {cat.count > 0 && <span className="text-sm text-gray-500">{cat.count} productos</span>}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Productos</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {products.length > 0 ? (
                            products.map((product) => <ProductCard key={product.id} product={product} />)
                        ) : (
                            <EmptyState />
                        )}
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
                            <p className="text-gray-400 text-sm">{CONFIG.storeDescription}</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Tienda</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {categories.map(cat => (
                                    <li key={cat.name}><Link href={cat.href} className="hover:text-white">{cat.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Ayuda</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><Link href="#" className="hover:text-white">Contacto</Link></li>
                                <li><Link href="#" className="hover:text-white">Envíos</Link></li>
                                <li><Link href="#" className="hover:text-white">Devoluciones</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contacto</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>📧 {CONFIG.contact.email}</li>
                                <li>📞 {CONFIG.contact.phone}</li>
                                <li>📍 {CONFIG.contact.location}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} {CONFIG.storeName}. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    )
}
