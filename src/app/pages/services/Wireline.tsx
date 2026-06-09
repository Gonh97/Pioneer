import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Activity, CheckCircle2, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function Wireline() {
  const capabilities = [
    "Registros eléctricos en pozos activos",
    "Operaciones de cable para diagnóstico de formaciones",
    "Interpretación técnica de resultados",
    "Movilización de equipos en campo",
  ];

  const reasons = [
    { title: "Experiencia directa", desc: "Décadas operando en pozos activos de PDVSA." },
    { title: "Personal de campo", desc: "Técnicos especializados con conocimiento de la región Anzoátegui." },
    { title: "Equipos propios", desc: "Operación independiente sin depender de terceros." },
    { title: "Respuesta rápida", desc: "Cercanía geográfica estratégica desde Anaco." },
  ];

  return (
    <div className="flex flex-col gap-28 pb-28">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[72vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1566085351395-42ad61f72165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjB3ZWxsJTIwd29ya2VyJTIwcHBlfGVufDF8fHx8MTc3NzQ4MTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Guaya Eléctrica (Wireline)"
            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/20" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E60000]/10 border border-[#E60000]/25 text-[#E60000] font-bold text-xs tracking-widest uppercase mb-7">
              <Activity className="w-4 h-4" />
              Servicios Especializados
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-[1.06]">
              Guaya Eléctrica
              <br />
              <span className="text-[#E60000] glow-red-text">
                Diagnóstico de precisión en cada pozo
              </span>
            </h1>
            <p className="text-xl text-zinc-300 font-light max-w-3xl leading-relaxed">
              Los registros eléctricos (electric wireline) son la herramienta de diagnóstico más crítica en las operaciones de un pozo activo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── DESCRIPCIÓN ─── */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5 text-zinc-300 text-lg leading-relaxed"
          >
            <p>
              Con <strong className="text-white">PIONNER</strong>, obtienes un contratista de campo que no solo conoce el equipo — conoce los pozos. Llevamos más de 30 años prestando servicios de wireline en los campos del oriente venezolano para PDVSA Distritos Norte y Sur.
            </p>
            <p>
              Nuestra capacidad operativa nos permite ejecutar intervenciones de alta complejidad técnica, garantizando datos precisos para la toma de decisiones críticas en el ciclo de vida del pozo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#121212] border border-white/5 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E60000] opacity-[0.07] blur-[60px] rounded-full" />
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">
              Capacidades Específicas
            </h3>
            <ul className="space-y-3 relative z-10">
              {capabilities.map((cap, i) => (
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i}
                  className="flex items-start gap-4 text-zinc-300 bg-white/[0.025] p-4 rounded-xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-relaxed">{cap}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── POR QUÉ PIONNER ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">¿Por qué PIONNER en Wireline?</h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Cuatro razones que hacen la diferencia en campo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              key={i}
              className="bg-[#121212] border border-white/5 p-8 rounded-3xl flex flex-col hover:border-[#E60000]/30 transition-colors duration-300 cursor-default"
            >
              <div className="mb-5 bg-[#E60000]/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-[#E60000]/10">
                <CheckCircle2 className="w-7 h-7 text-[#E60000]" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{reason.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-gradient-to-r from-[#121212] to-[#161616] border border-[#E60000]/15 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden flex flex-col items-center"
        >
          <div className="absolute inset-0 bg-[#E60000]/[0.04]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            ¿Requieres diagnóstico de precisión?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto relative z-10 leading-relaxed">
            Contáctanos y te explicamos cómo PIONNER puede responder a tus necesidades en wireline.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#E60000] text-white font-bold hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_25px_rgba(230,0,0,0.35)] hover:shadow-[0_0_40px_rgba(230,0,0,0.55)] hover:scale-105 relative z-10"
          >
            Solicita información <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
