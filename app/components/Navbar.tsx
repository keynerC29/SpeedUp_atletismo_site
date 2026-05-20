"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-5 border-b border-[#FF8542]/15 bg-[#111010]/92 backdrop-blur-md">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">

                        {/* Logo */}
                        <Image
                            src="/assets/icons/logo_icon.png" // tu imagen en /public/logo.png
                            alt="Speed Up Logo"
                            width={50}
                            height={50}
                            className="rounded-[10px]"
                        />

                        {/* Nombre o imagen del texto */}
                        
                        {/* OPCIÓN 1: Texto normal */}

                        {/* OPCIÓN 2: Imagen del nombre/logo */}
                        <Image
                            src="/assets/icons/speedup_logoHD.png"
                            alt="Speed Up"
                            width={140}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Links */}
                <ul className="hidden md:flex gap-8 list-none">
                    {["Características", "Capturas", "Descargar", "Contacto"].map((item) => (
                        <li key={item}>
                            <Link
                                href={`#${item.toLowerCase()}`}
                                className="text-[#9A9A9E] text-sm font-medium hover:text-[#FF8542] transition-colors"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <button
                    onClick={() => setShowDownloadModal(true)}
                    className="bg-[#FF8542] text-white px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-[#E06520] transition-colors"
                >
                    Descargar gratis
                </button>
            </nav>

            {/* Modal */}
            {showDownloadModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Descarga segura
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            Esta aplicación es completamente segura y libre de virus.
                            Como no se descarga desde Google Play, Google play puede mostrar
                            una advertencia de seguridad antes de instalarla. En caso que no funcione, desactive las funciones de Play Protect, o las fuentes desconocidas en su dispositivo, y vuelva a intentarlo.
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDownloadModal(false)}
                                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
                            >
                                Cancelar
                            </button>

                            <a
                                href="/SpeedUp.apk"
                                download
                                className="flex-1 bg-[#FF8542] text-white text-center py-2 rounded-lg font-semibold hover:bg-[#E06520] transition"
                            >
                                Descargar APK
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}