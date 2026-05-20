"use client";

import { FaChartBar, FaClock, FaChartLine, FaRunning } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";

export default function Hero() {
    const images = [
        "/assets/images/welcome_image.jpeg",
        "/assets/images/login_image.jpeg",
        "/assets/images/profile1_image.jpeg",
        "/assets/images/analisis_image.jpeg",
        "/assets/images/grafico_image.jpeg",
    ];

    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    // Auto play
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setIsAnimating(true);
        setIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevImage = () => {
        setIsAnimating(true);
        setIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <section className="max-w-[1200px] mx-auto px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div>
                <div className="inline-flex items-center gap-2 bg-[#FF8542]/12 border border-[#FF8542]/30 rounded-full px-4 py-1.5 text-[13px] text-[#FF8542] font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#FF8542] animate-pulse" />
                    Análisis deportivo avanzado
                </div>

                <h1 className="font-black text-[55px] leading-none tracking-tight mb-6 font-condensed">
                    Guarda y Analiza tus pruebas{" "}
                    <span className="text-[#FF8542]">con Speed Up</span>
                </h1>

                <p className="text-[#9A9A9E] text-[18px] leading-relaxed max-w-md mb-10">
                    SpeedUp llega como una herramienta diseñada para atletas que buscan registrar, analizar y superar sus marcas en el atletismo.
                </p>

                <div className="flex flex-wrap gap-4">
                    {/* CTA */}
                    <button
                        onClick={() => setShowDownloadModal(true)}
                        className="bg-[#FF8542] text-white px-6 py-2.5 rounded-[8px] text-sm font-bold hover:bg-[#E06520] transition-colors"
                    >
                        ⬇ Descargar para Android
                    </button>

                    <button
                        disabled
                        className="opacity-50 cursor-not-allowed text-[#9A9A9E] px-8 py-3.5 rounded-[10px] font-semibold text-[15px] border border-white/10 inline-flex items-center gap-3"
                    >
                        IOS
                        <span className="bg-white/8 text-[11px] px-2 py-0.5 rounded-[4px]">
                            Próximamente
                        </span>
                    </button>
                </div>
            </div>


            {/* PHONE */}
            <div className="relative flex justify-center items-center">

                <FaChartBar className="absolute top-10 left-[-10px] text-[#FF8542] text-5xl float hover:scale-110 transition opacity-90" />
                <FaClock className="absolute top-32 right-[-20px] text-[#FF8542] text-5xl float hover:scale-110 transition opacity-90" />
                <FaChartLine className="absolute bottom-20 left-[-25px] text-[#FF8542] text-5xl float1 hover:scale-110 transition opacity-90" />
                <FaRunning className="absolute bottom-10 right-[-10px] text-[#FF8542] text-5xl float1 hover:scale-110 transition opacity-90" />

                {/* Cámara frontal */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/10 z-20 shadow-inner">
                    <div className="w-[6px] h-[6px] bg-[#1f1f1f] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>



                <div className="absolute w-64 h-64 rounded-full bg-[#FF8542]/10 blur-3xl" />

                <div className="relative w-[280px] h-[490px] rounded-[36px] overflow-hidden shadow-2xl shadow-black/60">

                    {/* Imagen */}
                    <div className="flex h-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}>

                        {images.map((img, i) => (
                            <div key={i} className="min-w-full h-full relative">
                                <Image
                                    src={img}
                                    alt={`slide-${i}`}
                                    fill
                                    className="object-center"
                                />
                            </div>
                        ))}

                    </div>

                    {/* Botones izquierda/derecha (swipe manual) */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full backdrop-blur"
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full backdrop-blur"
                    >
                        ›
                    </button>

                    {/* Indicadores (los puntitos abajo) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === index
                                    ? "bg-[#FF8542] scale-125"
                                    : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
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
                                href="//SpeedUp.apk"
                                download
                                className="flex-1 bg-[#FF8542] text-white text-center py-2 rounded-lg font-semibold hover:bg-[#E06520] transition"
                            >
                                Descargar APK
                            </a>
                        </div>
                    </div>
                </div>
            )}
            
        </section>
        
    );
}