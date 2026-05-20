"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  badge: string;
  images: string[];
}

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  const features: FeatureItem[] = [
    {
      id: 0,
      badge: "Inicio Rápido",
      title: "Inicio y creacion de las listas",
      description: "Con una intefaz limpia y minimalista, SpeedUp permite la creacion de listas para añadir y visulizar tus marcas de forma sencilla. Una forma rapida de registrar tus marcas hechas en entrenamientos o competiciones.",
      images: [
        "/assets/screens/inicio_image.jpeg",
        "/assets/screens/lista_image.jpeg",
        "/assets/screens/notificaciones_image.jpeg"
      ],
    },
    {
      id: 1,
      badge: "Analisis y gestion",
      title: "Analisis detallado y gestion de las marcas",
      description: "SpeedUp ofrece graficos, analisis detallados y pestañas que muestran informacion de tus resultados en las pruebas registradas. hay muchas opciones, al igual como la gestion de las marcas que te permiten editar, eliminar o añadir a la lista de tus entrenamientos",
      images: [
        "/assets/images/analisis_image.jpeg",
        "/assets/images/grafico_image.jpeg",
        "/assets/screens/historial_image.jpeg",
        "/assets/screens/registroMarca_image.jpeg",
        "/assets/screens/marca_image.jpeg"
      ],
    },
    {
      id: 2,
      badge: "Perfil y progreso",
      title: "Perfil del atleta y configuraciones",
      description: "En tu perfil puedes configurar tus datos de atleta, tu nombre, categoria (se calcula segun la edad de nacimiento), entre otras cosas. Ademas, puedes visualizar el progreso de tus marcas mas abajo, mostrando una estadistica completa de tus marcas regsitradas a lo largo de tu progreso en el atletismo.",
      images: [
        "/assets/images/profile1_image.jpeg",
        "/assets/screens/profilePruebas_image.jpeg",
        "/assets/screens/estadisticas_image.jpeg",
        "/assets/screens/configuracion_image.jpeg"
      ],
    }
  ];

  // Sincroniza y reinicia al primer slide si el usuario cambia de pestaña lateral
  useEffect(() => {
    setCurrentImgIndex(0);
  }, [activeTab]);

  const currentImages = features[activeTab].images;
  const hasMultipleImages = currentImages.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  return (
    <section id="capturas" className="max-w-[1200px] mx-auto px-12 py-20 text-white">

      {/* ENCABEZADO */}
      <p className="text-[12px] font-bold tracking-[3px] uppercase text-[#FF8542] mb-3">
        Capturas de pantalla
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-12">
        <h2 className="font-black text-[48px] leading-[1.05] font-condensed">
          La aplicación <br />
          <span className="text-[#FF8542]">en acción</span>
        </h2>
        <p className="text-[#9A9A9E] text-[16px] leading-relaxed self-end">
          Explora la interfaz de SpeedUp. Diseñada de forma minimalista y estructurada para que registrar tus marcas de pista y campo sea cuestión de segundos.
        </p>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#151517] rounded-2xl p-8 sm:p-12 border border-white/5 shadow-2xl">

        {/* COLUMNA IZQUIERDA: Botones selectores */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {features.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border ${activeTab === item.id
                ? "bg-[#1C1C1E] border-[#FF8542]/40 shadow-xl translate-x-1"
                : "bg-transparent border-transparent hover:bg-[#1C1C1E]/50"
                }`}
            >
              <span className={`text-[11px] font-bold tracking-wider uppercase block mb-1 ${activeTab === item.id ? "text-[#FF8542]" : "text-[#9A9A9E]/60"
                }`}>
                {item.badge}
              </span>
              <h3 className="text-[20px] font-black font-condensed text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#9A9A9E] leading-relaxed">
                {item.description}
              </p>
            </button>
          ))}
        </div>

        {/* COLUMNA DERECHA: El Teléfono con la animación del Hero */}
        <div className="lg:col-span-7 flex justify-center items-center bg-[#1C1C1E] rounded-2xl py-12 px-4 border border-white/5 min-h-[500px]">
          <div className="relative mx-auto border-[#0d0d0e] bg-[#0d0d0e] border-[14px] rounded-[2.5rem] h-[490px] w-[270px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden group">

            {/* Cámara frontal */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-white/10 z-20 shadow-inner">
              <div className="w-[6px] h-[6px] bg-[#1f1f1f] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Pantalla Interna */}
            <div className="rounded-[1.7rem] overflow-hidden w-full h-full bg-[#151517] relative border border-white/5">

              {/* ⚡ CONTENEDOR FLEX REPLICADO DEL HERO */}
              {/* Aquí usamos tu lógica: se desplaza horizontalmente según el index multiplicando el componente por -100% */}
              <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
              >
                {currentImages.map((img, i) => (
                  <div key={i} className="min-w-full h-full relative flex-shrink-0">
                    <img
                      src={img}
                      alt={`slide-${i}`}
                      className="w-full h-full object-center"
                    />
                  </div>
                ))}
              </div>

              {/* CONTROLES DEL CARRUSEL (Solo si el módulo tiene varias imágenes) */}
              {hasMultipleImages && (
                <>
                  {/* Botón Izquierdo */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#FF8542] text-white p-2 rounded-full border border-white/10 transition duration-200 z-10 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                  >
                    <FaChevronLeft size={12} />
                  </button>

                  {/* Botón Derecho */}
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#FF8542] text-white p-2 rounded-full border border-white/10 transition duration-200 z-10 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                  >
                    <FaChevronRight size={12} />
                  </button>

                  {/* Puntos Indicadores */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm z-10">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImgIndex(index);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentImgIndex === index ? "w-4 bg-[#FF8542]" : "w-1.5 bg-white/40"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}