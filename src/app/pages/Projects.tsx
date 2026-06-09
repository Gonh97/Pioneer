import { motion } from "motion/react";
import { MapPin, Activity, Leaf, BriefcaseBusiness, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export default function Projects() {
  const projects = [
    {
      company: "PDVSA Petróleo, S.A.",
      districts: "Distritos Norte y Sur — Anzoátegui",
      service: "Guaya Eléctrica (Electric Wireline)",
      desc: "Contratos sostenidos de servicios de registros eléctricos en pozos activos de los dos distritos operacionales clave de PDVSA en el oriente venezolano. Ejecución continua con equipos propios y personal de campo certificado.",
      icon: <Activity className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1566085351395-42ad61f72165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjB3ZWxsJTIwd29ya2VyJTIwcHBlfGVufDF8fHx8MTc3NzQ4MTQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Wireline",
    },
    {
      company: "Petrobras Venezuela",
      districts: "Campo Oritupano, Anzoátegui",
      service: "Saneamiento Ambiental — Bioremediación de Fluidos",
      desc: "Proyecto de bioremediación de fluidos contaminados en uno de los campos de mayor actividad del oriente venezolano. Ejecución con maquinaria pesada especializada y metodología de tratamiento biológico in-situ.",
      icon: <Leaf className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1675600360057-cc25fe6d0962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwcmVtZWRpYXRpb24lMjBjbGVhbnVwfGVufDF8fHx8MTc3NzQ4MTQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tag: "Saneamiento",
    },
  ];

  return (
    <div className="flex flex-col gap-28 pb-28">

      {/* ─── HERO ─── */}
      <section className="container mx-auto px-6 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-bold text-sm mb-8"
          >
            <BriefcaseBusiness className="w-4 h-4 text-[#E60000]" />
            Experiencia Comprobada
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-[1.06]"
          >
            Nuestro trabajo{" "}
            <span className="text-[#E60000] glow-red-text">en campo.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl"
          >
            Los proyectos no se prometen. Se ejecutan.{" "}
            <br className="hidden md:block" />
            Aquí algunos de los trabajos que respaldan nuestra reputación en el sector petrolero venezolano.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── PROYECTOS ─── */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              key={index}
              className="group bg-[#121212] border border-white/8 rounded-3xl overflow-hidden hover:border-[#E60000]/40 transition-colors duration-400"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden bg-[#0a0a0a]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.company}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#E60000] text-white flex items-center justify-center shadow-lg">
                    {project.icon}
                  </div>
                  <span className="text-xs font-bold bg-[#0a0a0a]/70 backdrop-blur-sm text-zinc-300 px-3 py-1.5 rounded-full border border-white/10">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{project.company}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider block mb-0.5">
                        Ubicación
                      </span>
                      <span className="text-sm font-medium text-zinc-300">{project.districts}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="block w-2 h-2 rounded-full bg-[#E60000]" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider block mb-0.5">
                        Servicio Ejecutado
                      </span>
                      <span className="text-sm font-medium text-[#E60000]">{project.service}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/5">
                  <p className="text-zinc-400 leading-relaxed text-sm">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── NOTA DE CONFIDENCIALIDAD ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0f0f] border border-white/5 p-7 rounded-2xl flex items-start gap-5"
        >
          <div className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center shrink-0 border border-white/10 text-zinc-500 font-bold text-sm">
            i
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">
            La publicación de proyectos específicos se realiza bajo estricta confidencialidad y
            autorización de nuestros clientes. El historial completo de operaciones se encuentra a
            disposición en nuestro dossier técnico para procesos de licitación.
          </p>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-gradient-to-r from-[#121212] to-[#161616] border border-[#E60000]/15 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#E60000]/4 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto relative z-10 leading-relaxed">
            Contáctanos para conocer cómo PIONNER puede ejecutar tu próximo proyecto.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#E60000] text-white font-bold hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_25px_rgba(230,0,0,0.35)] hover:shadow-[0_0_40px_rgba(230,0,0,0.55)] hover:scale-105 relative z-10"
          >
            Contáctanos <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
