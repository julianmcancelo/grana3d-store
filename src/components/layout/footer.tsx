import Link from "next/link"
import { Printer, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

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
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <Printer className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Grana 3D
                            </span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Impresión 3D de alta calidad. Creamos tus ideas en realidad.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Productos</h3>
                        <ul className="space-y-3">
                            {footerLinks.productos.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Empresa</h3>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <MapPin className="w-4 h-4 text-indigo-500" />
                                Buenos Aires, Argentina
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Phone className="w-4 h-4 text-indigo-500" />
                                +54 11 1234-5678
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Mail className="w-4 h-4 text-indigo-500" />
                                hola@grana3d.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-500">
                        © {new Date().getFullYear()} Grana 3D. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
