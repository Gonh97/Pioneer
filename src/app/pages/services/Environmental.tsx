import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Leaf, ChevronRight, Droplet, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function Environmental() {
  const capabilities = [
    "Remediación de áreas contaminadas por derrames de hidrocarburos",
    "Bioremediación de fluidos (tratamiento biológico in-situ)",
    "Manejo y disposición de suelos impactados",
    "Excavación y retiro de material contaminado con maquinaria pesada",
    "Generación de informes técnicos de cumplimiento ambiental",
  ];

  return (
    <div className="flex flex-col gap-28 pb-28">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[72vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768293528649-531aad843525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBjbGVhbnVwJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzc3NDgxNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Saneamiento Ambiental"
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
              <Leaf className="w-4 h-4" />
              Saneamiento Ambiental
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-[1.06]">
              Saneamiento Ambiental
              <br />
              <span className="text-[#E60000] glow-red-text">
                Restauramos el campo, no solo lo operamos
              </span>
            </h1>
            <p className="text-xl text-zinc-300 font-light max-w-3xl leading-relaxed">
              El pasivo ambiental no desaparece solo. PIONNER es una de las pocas empresas de servicios petroleros en Venezuela que ofrece la remediación del daño ambiental como capacidad técnica de campo — no como un servicio tercerizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CASO REFERENCIAL ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#121212]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60000]/[0.07] blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E60000] to-transparent" />

          <div className="p-10 md:p-14 relative z-10">
            <div className="flex items-center gap-3 mb-7 text-[#E60000]">
              <Droplet className="w-7 h-7" />
              <span className="font-bold text-sm uppercase tracking-widest">Caso de Éxito Referencial</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed max-w-4xl italic pl-6 border-l-2 border-[#E60000]">
              "Bioremediación de fluidos para Petrobras en el campo Oritupano — un proyecto que demostró nuestra capacidad para ejecutar proyectos de restauración ambiental en uno de los campos más activos del oriente venezolano."
            </blockquote>
            <div className="flex items-center gap-3 mt-6 pl-6">
              <CheckCircle2 className="w-4 h-4 text-[#E60000]" />
              <span className="text-sm text-zinc-400 font-medium">Proyecto ejecutado · Campo Oritupano, Anzoátegui</span>
            </div>
          </div>
        </motion.div>
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
              Contamos con maquinaria pesada propia, equipos especializados y la experiencia de proyectos de bioremediación en campos de alta exigencia operacional.
            </p>
            <p>
              Nuestro enfoque integra las mejores prácticas de la industria con el conocimiento profundo de los ecosistemas locales, asegurando el cumplimiento de las normativas ambientales nacionales e internacionales y la recuperación de áreas impactadas para futuros desarrollos.
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
                  transition={{ delay: i * 0.08, duration: 0.5 }}
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
            ¿Necesitas gestionar pasivos ambientales?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto relative z-10 leading-relaxed">
            Nuestro equipo técnico está listo para evaluar tu situación y proponer una solución de campo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#E60000] text-white font-bold hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_25px_rgba(230,0,0,0.35)] hover:shadow-[0_0_40px_rgba(230,0,0,0.55)] hover:scale-105 relative z-10"
          >
            Habla con nuestro equipo técnico <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
