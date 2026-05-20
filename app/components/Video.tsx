"use client";

import { FaYoutube, FaPlay } from "react-icons/fa";

export default function VideoFeature() {
  // ⚡ REEMPLAZA ESTE ID: Pon aquí el ID del video de tu canal de YouTube
  // Ejemplo: Si tu enlace es https://www.youtube.com/watch?v=dQw4w9WgXcQ, el ID es "dQw4w9WgXcQ"
  const videoId = "N9LX6U0M8dE"; 

  return (
    <section id="demo-video" className="max-w-[1200px] mx-auto px-12 py-20 text-white">
      
      {/* ENCABEZADO */}
      <p className="text-[12px] font-bold tracking-[3px] uppercase text-[#FF8542] mb-3">
        Demostración en Video
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-12">
        <h2 className="font-black text-[48px] leading-[1.05] font-condensed">
          Descubre cómo <br />
          <span className="text-[#FF8542]">funciona SpeedUp</span>
        </h2>
        <p className="text-[#9A9A9E] text-[16px] leading-relaxed self-end">
          Te mostramos en menos de dos minutos cómo registrar tus marcas de pista, revisar tus gráficas de progreso.
        </p>
      </div>

      {/* REPRODUCTOR DE VIDEO INCRUSTADO */}
      <div className="relative mx-auto max-w-[900px] w-full aspect-video rounded-2xl overflow-hidden bg-[#151517] border border-white/5 shadow-2xl group">
        
        {/* Efecto de resplandor deportivo de fondo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8542]/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500 -z-10" />

        {/* Iframe oficial de YouTube optimizado */}
        <iframe
          className="w-full h-full border-0 rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="SpeedUp App Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

      </div>

      {/* Mini banner inferior informativo */}
      <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[#9A9A9E]/60">
        <FaYoutube className="text-[#FF8542] text-sm animate-pulse" />
        <span>Sigue a la comunidad de speedup :v</span>
      </div>

    </section>
  );
}