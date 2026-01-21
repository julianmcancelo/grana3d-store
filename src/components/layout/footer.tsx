"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight">
                                <span className="text-[#8B2F8B]">Grana</span>
                                <span className="text-gray-900">3D</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-500 max-w-xs">
                            Impresión 3D premium. Figuras coleccionables, decoración y accesorios únicos.
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a href="#" className="p-2 text-gray-400 hover:text-[#8B2F8B] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 text-gray-400 hover:text-[#00B4B4] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Tienda</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Todos los productos</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Figuras</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Decoración</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Accesorios</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Ayuda</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Envíos</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Devoluciones</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-[#8B2F8B]">Preguntas frecuentes</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-500">
                                <Mail className="w-4 h-4 text-[#8B2F8B]" />
                                hola@grana3d.com
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-500">
                                <Phone className="w-4 h-4 text-[#00B4B4]" />
                                +54 11 1234-5678
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-sm text-gray-400 text-center">
                        © 2024 Grana3D. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
