const stats = [
  { num: "+200", desc: "Métricas disponibles" },
  { num: "98%", desc: "Precisión de análisis" },
  { num: "12+", desc: "Disciplinas de atletismo" },
  { num: "100%", desc: "Gratuita" },
];

export default function StatsStrip() {
  return (
    <div className="max-w-[1200px] mx-auto px-12 my-4">
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#1C1C1E] border border-[#FF8542]/10 rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center py-8 ${
              i < stats.length - 1 ? "border-r border-white/5" : ""
            }`}
          >
            <span className="font-black text-[36px] text-[#FF8542] font-condensed leading-none">
              {s.num}
            </span>
            <span className="text-[13px] text-[#9A9A9E] mt-1">{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}