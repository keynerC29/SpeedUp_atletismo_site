import { FaChartBar, FaClock, FaTrophy, FaChartLine, FaBullseye, FaShareAlt } from "react-icons/fa";

const features = [
  {
    icon: FaChartBar,
    title: "Análisis",
    desc: "SpeedUp cuenta con graficos, carta de analisis y pestañas que muestran informacion de tus resultados en cada prueba que registres.",
  },
  {
    icon: FaClock,
    title: "No hay necesidad de conexión",
    desc: "SpeedUp puede funcionar de manera offline, permitiéndote registrar tus pruebas y resultados sin preocuparte por la conexión a internet.",
  },
  {
    icon: FaTrophy,
    title: "Gestión de marcas",
    desc: "Registra, edita y consulta tus pruebas de atletismo con historial, estadísticas y seguimiento de tu progreso durante el tiempo.",
  },
  {
    icon: FaChartLine,
    title: "Progresión visual",
    desc: "SpeedUp muestra tu evolución a lo largo del tiempo de entrenamiento con gráficas claras.",
  },
  {
    icon: FaBullseye,
    title: "Listas de marcas",
    desc: "Crea y gestiona listas de entrenamiento donde puedes registrar tiempos, estados, fechas y resultados de tus pruebas.",
  },
  {
    icon: FaShareAlt,
    title: "Comparte tus progresos",
    desc: "Descarga tus registros en imagen y compártelos en redes sociales.",
  },
];

export default function Features() {
    return (
        <section id="características" className="max-w-[1200px] mx-auto px-12 py-20">
            <p className="text-[12px] font-bold tracking-[3px] uppercase text-[#FF8542] mb-3">
                Características
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-12">
                <h2 className="font-black text-[48px] leading-[1.05] font-condensed">
                    Lo que necesitas para{" "}
                    <span className="text-[#FF8542]">analizar tu rendimiento en atletismo</span>
                </h2>
                <p className="text-[#9A9A9E] text-[16px] leading-relaxed self-end">
                    A diferencia de otras apps genéricas, SpeedUp está diseñada específicamente para el atletismo: velocidad, fondo, saltos y lanzamientos, con herramientas para registrar, analizar y mejorar tu rendimiento.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="bg-[#1C1C1E] border border-white/5 rounded-2xl p-8 hover:border-[#FF8542]/40 hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-[#FF8542]/15 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#FF8542]/25 transition">
                            <f.icon className="text-[#FF8542] text-3xl" />
                        </div>
                        <h3 className="font-black text-[20px] font-condensed mb-2">
                            {f.title}
                        </h3>
                        <p className="text-[#9A9A9E] text-[14px] leading-relaxed">
                            {f.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}