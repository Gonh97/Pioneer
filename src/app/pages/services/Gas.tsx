import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Flame, ChevronRight, Zap } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function Gas() {
  const capabilities = [
    "Desarrollo de infraestructura gasífera en campos productores",
    "Expansión y mantenimiento de redes de gas natural",
    "Integración técnica con operaciones activas de los clientes",
    "Ingeniería de detalle y tendido de líneas de recolección",
  ];

  const highlights = [
    { value: "100%", label: "Equipos propios" },
    { value: "30+", label: "Años de experiencia" },
    { value: "Campo", label: "Operación directa" },
  ];

  return (
    <div className="flex flex-col gap-28 pb-28">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[72vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761142874408-5ed58ee19881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBwaXBlbGluZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc3NDgxNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Infraestructura de Gas"
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
              <Flame className="w-4 h-4" />
              Proyectos de Gas
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-[1.06]">
              Proyectos de Gas
              <br />
              <span className="text-[#E60000] glow-red-text">
                La infraestructura que conecta el campo
              </span>
            </h1>
            <p className="text-xl text-zinc-300 font-light max-w-3xl leading-relaxed">
              El gas natural asociado a la producción petrolera requiere infraestructura técnica especializada para su aprovechamiento eficiente y seguro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── DESCRIPCIÓN Y CAPACIDADES ─── */}
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
              <strong className="text-white">PIONNER</strong> ejecuta proyectos de desarrollo y expansión de redes de gas natural en campos activos, combinando nuestra experiencia operacional de campo con la capacidad técnica de una empresa con tres décadas de presencia en el oriente venezolano.
            </p>
            <p>
              Entendemos que el manejo eficiente del gas no es solo un requerimiento operativo, sino un imperativo energético y ambiental. Nuestras soluciones están diseñadas para integrarse con las operaciones de producción existentes, minimizando tiempos de inactividad y maximizando la seguridad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#121212] border border-white/5 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E60000] opacity-[0.06] blur-[60px] rounded-full" />
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

      {/* ─── FEATURE HIGHLIGHT ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-[#121212] border border-white/8 rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Text */}
            <div className="p-10 md:p-14 flex flex-col justify-between">
              <div>
                <Zap className="w-11 h-11 text-[#E60000] mb-7" />
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Impulsando el valor energético
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  Nuestros proyectos de infraestructura aseguran la recolección, manejo y distribución segura del gas, convirtiendo lo que antes era un subproducto en un activo energético vital para las operaciones.
                </p>
              </div>
              {/* Mini stats */}
              <div className="flex gap-8 pt-6 border-t border-white/5">
                {highlights.map((h, i) => (
                  <div key={i}>
                    <span className="block text-2xl font-bold text-white mb-0.5">{h.value}</span>
                    <span className="text-xs text-zinc-500 font-medium">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774655852740-7cbe1fd4ba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmllbGQlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc3NzQ4MTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Operaciones de campo gas"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent md:bg-gradient-to-r" />
            </div>
          </div>
        </motion.div>
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
            ¿Buscas desarrollar infraestructura gasífera?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto relative z-10 leading-relaxed">
            Cuéntanos tu proyecto y te presentamos una propuesta técnica de campo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#E60000] text-white font-bold hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_25px_rgba(230,0,0,0.35)] hover:shadow-[0_0_40px_rgba(230,0,0,0.55)] hover:scale-105 relative z-10"
          >
            Solicita información sobre proyectos de gas <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
