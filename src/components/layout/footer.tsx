"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, MapPin, Phone, Heart, ArrowUp } from "lucide-react"

const footerLinks = {
    productos: [
        { name: "Figuras Coleccionables", href: "#" },
        { name: "Decoración", href: "#" },
        { name: "Accesorios", href: "#" },
        { name: "Personalizados", href: "#" },
    ],
    empresa: [
        { name: "Sobre Nosotros", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contacto", href: "#" },
    ],
    legal: [
        { name: "Términos y Condiciones", href: "#" },
        { name: "Política de Privacidad", href: "#" },
        { name: "Envíos y Devoluciones", href: "#" },
    ],
}

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623]" />

            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2F8B]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B4B4]/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="/logo.png"
                                    alt="Grana 3D"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-2xl font-black bg-gradient-to-r from-[#8B2F8B] via-[#00B4B4] to-[#F5A623] bg-clip-text text-transparent">
                                    Grana 3D
                                </span>
                                <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                                    Hacemos Realidad Tus Ideas
                                </p>
                            </div>
                        </Link>

                        <p className="text-gray-400 leading-relaxed">
                            Impresión 3D de alta calidad. Transformamos tus ideas en piezas únicas con atención al detalle.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, href: "#", color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500" },
                                { icon: Facebook, href: "#", color: "hover:bg-[#1877F2]" },
                                { icon: Mail, href: "#", color: "hover:bg-gradient-to-br hover:from-[#8B2F8B] hover:to-[#00B4B4]" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] rounded-full" />
                            Productos
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.productos.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#00B4B4] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#00B4B4] transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#00B4B4] to-[#F5A623] rounded-full" />
                            Empresa
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#00B4B4] transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#00B4B4] transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#F5A623] to-[#8B2F8B] rounded-full" />
                            Contacto
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-[#8B2F8B] mt-0.5 flex-shrink-0" />
                                <span>Buenos Aires, Argentina</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-[#00B4B4] flex-shrink-0" />
                                <span>+54 11 1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                                <span>hola@grana3d.com</span>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-8">
                            <p className="text-sm font-medium mb-3">Suscribite al newsletter</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl text-sm focus:outline-none focus:border-[#00B4B4] transition-colors"
                                />
                                <button className="px-5 py-3 bg-gradient-to-r from-[#8B2F8B] to-[#00B4B4] rounded-r-xl font-semibold hover:opacity-90 transition-opacity">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        © {new Date().getFullYear()} Grana 3D. Hecho con
                        <Heart className="w-4 h-4 text-[#8B2F8B] fill-[#8B2F8B] animate-pulse" />
                        en Argentina
                    </p>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:border-[#00B4B4] transition-all"
                    >
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        Volver arriba
                    </button>
                </div>
            </div>
        </footer>
    )
}
