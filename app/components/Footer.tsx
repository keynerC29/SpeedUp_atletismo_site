"use client";

import { FaInstagram, FaYoutube, FaEnvelope, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0D0D0E] border-t border-white/5 text-[#9A9A9E] pt-16 pb-8 px-12">
            <div className="max-w-[1200px] mx-auto">

                {/* BLOQUE SUPERIOR */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">

                    {/* Columna 1: Brand / App Info */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        {/* Logo */}
                        <Image
                            src="/assets/icons/speedup_logoHD.png" // tu imagen en /public/logo.png
                            alt="Speed Up Logo"
                            width={200}
                            height={200}
                            className="rounded-[10px]"
                        />

                        <p className="text-sm leading-relaxed max-w-sm">
                            Agradecemos mucho el apoyo de nuestra aplicacion, es uno de mis proyectos para los atletas y espero que pueda cumplir con las expectativas. Agradecimiento a mis compañeros de club y mi entrenador por las ayudas en esta idea.
                        </p>
                    </div>

                    {/* Columna 2: Redes Sociales (Youtube y los 2 Instagrams) */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="text-white font-bold font-condensed text-[16px] uppercase tracking-wider">
                            Síguenos
                        </h4>
                        <ul className="flex flex-col gap-2.5 text-sm">
                            <li>
                                <a
                                    href="https://www.instagram.com/speedup.exe/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-[#FF8542] transition-colors group"
                                >
                                    <FaInstagram className="text-white/60 group-hover:text-[#FF8542] transition-colors" />
                                    <span>La comunidad de Spid ap en instagram :v</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/keyner_100m/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-[#FF8542] transition-colors group"
                                >
                                    <FaInstagram className="text-white/60 group-hover:text-[#FF8542] transition-colors" />
                                    <span> Instragram desarrollador de SpeedUp</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@SpeedupApp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-[#FF8542] transition-colors group"
                                >
                                    <FaYoutube className="text-white/60 group-hover:text-[#FF8542] transition-colors" />
                                    <span>YouTube de la comunidad speedup :v</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Correo de Soporte / Dudas */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <h4 className="text-white font-bold font-condensed text-[16px] uppercase tracking-wider">
                            ¿Tienes dudas?
                        </h4>
                        <p className="text-sm leading-relaxed">
                            Si experimentas problemas, puedes escribirnos a nuestro correo de soporte. Estamos aquí para ayudarte :)
                        </p>
                        <a
                            href="mailto:speedupisdead@gmail.com"
                            className="inline-flex items-center gap-3 bg-[#151517] border border-white/5 hover:border-[#FF8542]/30 p-3.5 rounded-xl text-white font-medium text-sm transition-all shadow-md group"
                        >
                            <div className="bg-[#FF8542]/10 p-2 rounded-lg text-[#FF8542]">
                                <FaEnvelope size={16} />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[11px] text-[#9A9A9E] uppercase tracking-wider font-bold">Correo de ayuda</span>
                                <span className="group-hover:text-[#FF8542] transition-colors text-xs sm:text-sm">speedupisdead@gmail.com</span>
                            </div>
                            <FaChevronRight size={10} className="ml-auto text-[#9A9A9E]/40 group-hover:text-[#FF8542] transition-colors transform group-hover:translate-x-0.5" />
                        </a>
                    </div>

                </div>

                {/* BLOQUE INFERIOR: Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9A9A9E]/60">
                    <p>© {currentYear} SpeedUp App.</p>
                    {/*
                    <div className="flex gap-6">
                        <a href="#politicas" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#terminos" className="hover:text-white transition-colors">Términos de Servicio</a>
                    </div>
                    */}
                </div>

            </div>
        </footer>
    );
}