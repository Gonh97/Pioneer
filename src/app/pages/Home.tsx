import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Activity, Leaf, Flame, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="flex flex-col gap-28 pb-28">

      {/* ─── 1.1 HERO ─── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1776196463688-5f21c9632c75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByaWclMjBkcmlsbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzc0ODE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Operaciones de campo"
            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        </motion.div>

        {/* Decorative red blur */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#E60000]/10 blur-[100px] rounded-full pointer-events-none z-0" />

        <motion.div
          className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E60000]/10 border border-[#E60000]/25 text-[#E60000] font-bold text-xs tracking-widest uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E60000] animate-pulse" />
              Servicios Petroleros Pioneer — PPS
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-bold mb-6 leading-[1.08]"
            >
              Restauramos lo que el{" "}
              <span className="text-[#E60000] glow-red-text">campo necesita.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Servicios especializados de wireline, saneamiento ambiental y desarrollo de gas para la industria petrolera venezolana.{" "}
              <span className="font-semibold text-white">Más de 30 años operando en campo.</span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/servicios/wireline"
                className="px-8 py-4 rounded-full bg-[#E60000] text-white font-bold text-lg hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_25px_rgba(230,0,0,0.4)] hover:shadow-[0_0_45px_rgba(230,0,0,0.65)] hover:scale-105 flex items-center gap-2"
              >
                Conoce nuestros servicios <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/nosotros"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                Quiénes somos
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── 1.2 STATS ─── */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { metric: "+30", unit: "años", desc: "Operaciones continuas en el oriente venezolano" },
            { metric: "3",   unit: "líneas", desc: "Servicios especializados bajo una sola empresa" },
            { metric: "2",   unit: "distritos", desc: "PDVSA Norte y Sur — contratos sostenidos" },
            { metric: "1",   unit: "empresa", desc: "Que opera y restaura el campo" },
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              key={i}
              className="bg-[#121212] border border-white/5 hover:border-[#E60000]/50 p-7 rounded-3xl flex flex-col items-center text-center group cursor-default transition-colors duration-300"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#E60000] transition-colors duration-300">
                  {item.metric}
                </h3>
                <span className="text-[#E60000] font-bold text-xl">{item.unit}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── 1.3 SERVICES BENTO ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestras Capacidades</h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Soluciones integrales diseñadas para los desafíos del terreno venezolano.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Wireline — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-2"
          >
            <Link
              to="/servicios/wireline"
              className="group relative overflow-hidden rounded-3xl bg-[#121212] border border-white/10 hover:border-[#E60000]/40 p-8 flex flex-col justify-end h-[420px] transition-colors duration-400 block"
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1566085351395-42ad61f72165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjB3ZWxsJTIwd29ya2VyJTIwcHBlfGVufDF8fHx8MTc3NzQ4MTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Guaya Eléctrica"
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-35 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#E60000]/20 text-[#E60000] flex items-center justify-center mb-5 backdrop-blur-sm border border-[#E60000]/20">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2.5 group-hover:text-[#E60000] transition-colors duration-300">
                  Diagnóstico de pozo con precisión técnica
                </h3>
                <p className="text-zinc-300 mb-5 max-w-lg leading-relaxed">
                  Registros eléctricos y operaciones de cable en pozos activos. Equipos propios, personal certificado, respuesta operacional en campo.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all duration-300">
                  Ver servicio <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Environmental — small */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              to="/servicios/saneamiento-ambiental"
              className="group relative overflow-hidden rounded-3xl bg-[#121212] border border-white/10 hover:border-[#E60000]/40 p-8 flex flex-col justify-end h-[420px] transition-colors duration-400 block"
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768293528649-531aad843525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBjbGVhbnVwJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzc3NDgxNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Saneamiento Ambiental"
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-35 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#E60000]/20 text-[#E60000] flex items-center justify-center mb-5 backdrop-blur-sm border border-[#E60000]/20">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2.5 group-hover:text-[#E60000] transition-colors duration-300">
                  Restauramos lo que el campo le debe a la tierra
                </h3>
                <p className="text-zinc-300 text-sm mb-5 leading-relaxed">
                  Remediación de pasivos ambientales y manejo de suelos contaminados.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all duration-300">
                  Ver servicio <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Gas — full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3"
          >
            <Link
              to="/servicios/proyectos-de-gas"
              className="group relative overflow-hidden rounded-3xl bg-[#121212] border border-white/10 hover:border-[#E60000]/40 p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 min-h-[260px] transition-colors duration-400 block"
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761142874408-5ed58ee19881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXMlMjBwaXBlbGluZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzc3NDgxNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Proyectos de Gas"
                  className="w-full h-full object-cover opacity-15 grayscale group-hover:opacity-25 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/75 to-[#0a0a0a]/40 md:bg-gradient-to-r" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#E60000]/20 text-[#E60000] flex items-center justify-center mb-5 backdrop-blur-sm border border-[#E60000]/20">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2.5 group-hover:text-[#E60000] transition-colors duration-300">
                  Infraestructura de gas que impulsa operaciones
                </h3>
                <p className="text-zinc-300 max-w-lg leading-relaxed">
                  Desarrollo y expansión de redes de infraestructura gasífera en campos activos y áreas de producción.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold transition-all duration-300">
                  Ver servicio <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 1.4 CLIENTS ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#121212]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
        <div className="relative z-10 border-y border-white/5 py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ShieldCheck className="w-12 h-12 text-[#E60000] mx-auto mb-6" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl font-bold mb-10"
            >
              Operamos donde los grandes confían
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-16 items-center mb-10"
            >
              <div className="text-4xl font-black tracking-tighter text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
                PDVSA
              </div>
              <div className="text-3xl font-bold italic text-zinc-400 hover:text-white transition-colors duration-300 cursor-default">
                PETROBRAS
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 max-w-xl mx-auto leading-relaxed"
            >
              Contratistas activos de PDVSA Distritos Norte y Sur. Proyecto de
              bioremediación de fluidos para Petrobras en campo Oritupano.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── 1.5 ABOUT SNIPPET ─── */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#121212] border border-white/5 rounded-3xl overflow-hidden">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="p-10 md:p-14"
          >
            <span className="text-xs text-[#E60000] font-bold uppercase tracking-widest mb-4 block">
              Nuestra Historia
            </span>
            <h2 className="text-4xl font-bold mb-5 leading-tight">
              Desde Anaco al campo. Desde 1992.
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-8 max-w-md">
              PIONNER nació en el corazón del oriente petrolero venezolano. Desde el Edificio Pioneer en Anaco, Anzoátegui, operamos en los campos más exigentes del país durante más de tres décadas. Somos venezolanos, conocemos el terreno y nos comprometemos con el resultado.
            </p>
            <Link
              to="/nosotros"
              className="inline-flex items-center gap-2 text-[#E60000] font-bold hover:gap-4 transition-all duration-300 group"
            >
              Conoce nuestra historia
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-72 md:h-full min-h-[380px] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1774655852740-7cbe1fd4ba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmllbGQlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc3NzQ4MTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Operaciones Pionner"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#121212]/30" />
            <div className="absolute inset-0 bg-[#E60000] mix-blend-multiply opacity-10 hover:opacity-0 transition-opacity duration-700" />
          </motion.div>
        </div>
      </section>

      {/* ─── 1.6 CTA FINAL ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]" />
          <div className="absolute inset-0 border border-[#E60000]/15 rounded-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E60000]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center px-8 py-20 md:py-28">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto leading-tight">
              ¿Necesitas un contratista especializado en Venezuela?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#E60000] text-white font-bold text-lg hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:shadow-[0_0_50px_rgba(230,0,0,0.6)] hover:scale-105"
            >
              Contáctanos <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}