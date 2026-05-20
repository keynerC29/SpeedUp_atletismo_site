"use client";

import { FaCodeBranch, FaCheckCircle, FaTools, FaRocket } from "react-icons/fa";

interface UpdateItem {
    version: string;
    date: string;
    type: "major" | "minor" | "patch";
    title: string;
    changes: string[];
}

export default function AppLogs() {
    // ⚡ Aquí es donde tú editas y escribes tus actualizaciones reales cuando quieras
    const updates: UpdateItem[] = [
        {
            version: "v2.0.0",
            date: "Abril 2026",
            type: "major",
            title: "Cambios completos en Speed Up: Interfaces, nuevas funciones, etc",
            changes: [
                "Rediseño total de la interfaz de usuario para una experiencia más intuitiva.",
                "Implementación de nuevas funciones como análisis, gráficos interactivos y seguimiento de progreso.",
                "NUEVO: Creacion de listas para añadir tiempos en incio, edicion de marcas y visualizacion de ellas en el historial.",
                "Optimización en paginas para un rendimiento mas fluido.",
                "Corrección de errores y ediciones en los registros.",
                "Hubo una eliminacion en la funcion de objetivos, pronto esara junto a nuevas actualizaciones"
            ],
        },
        {
            version: "v1.0.0",
            date: "Octubre 2025",
            type: "patch",
            title: "Lanzamiento Inicial de SpeedUp",
            changes: [
                "Lanzamiento inicial de SpeedUp con funciones básicas para registrar marcas y editar.",
                "Interfaz de analisis con graficos y funcion de registrar nuevos objetivos.",
                "Funcion para ser usado sin conexion a internet."
            ],
        }
    ];

    return (
        <section id="actualizaciones" className="max-w-[1200px] mx-auto px-12 py-20 text-white">

            {/* ENCABEZADO */}
            <p className="text-[12px] font-bold tracking-[3px] uppercase text-[#FF8542] mb-3">
                Historial de Desarrollo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-16">
                <h2 className="font-black text-[48px] leading-[1.05] font-condensed">
                    Estado del proyecto y <br />
                    <span className="text-[#FF8542]">actualizaciones</span>
                </h2>
                <p className="text-[#9A9A9E] text-[16px] leading-relaxed self-end">
                    Sigue el progreso de SpeedUp. Aquí registro los últimos cambios, correcciones de lógica y nuevas funciones implementadas en el proyecto.
                </p>
            </div>

            {/* LÍNEA DE TIEMPO (CHANGELOG) */}
            <div className="relative border-l border-white/10 ml-4 md:ml-6 flex flex-col gap-12">
                {updates.map((item, index) => (
                    <div key={index} className="relative pl-8 md:pl-10 group">

                        {/* Indicador / Icono flotante en la línea */}
                        <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${item.type === "major"
                                ? "bg-[#FF8542]/10 border-[#FF8542] text-[#FF8542]"
                                : "bg-[#151517] border-white/10 text-[#9A9A9E] group-hover:border-[#FF8542]/40"
                            }`}>
                            {item.type === "major" ? <FaRocket size={12} /> : item.type === "minor" ? <FaCodeBranch size={12} /> : <FaTools size={12} />}
                        </div>

                        {/* Tarjeta de Contenido */}
                        <div className="bg-[#151517] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-xl">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="font-condensed font-black text-[24px] text-white tracking-tight">
                                        {item.version}
                                    </span>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${item.type === "major"
                                            ? "bg-[#FF8542]/10 text-[#FF8542]"
                                            : "bg-white/5 text-[#9A9A9E]"
                                        }`}>
                                        {item.type === "major" ? "Producción" : item.type === "minor" ? "Mejora" : "Parche"}
                                    </span>
                                </div>
                                <span className="text-sm text-[#9A9A9E]/60 font-medium">
                                    {item.date}
                                </span>
                            </div>

                            <h3 className="text-[18px] font-bold text-white mb-4">
                                {item.title}
                            </h3>

                            {/* Lista de Cambios */}
                            <ul className="flex flex-col gap-2.5 text-sm text-[#9A9A9E]">
                                {item.changes.map((change, i) => (
                                    <li key={i} className="flex items-start gap-3 leading-relaxed">
                                        <FaCheckCircle size={14} className="text-[#FF8542] mt-0.5 flex-shrink-0 opacity-80" />
                                        <span>{change}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}