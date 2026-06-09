import { motion } from "motion/react";
import { Shield, Leaf, Target, MapPin, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function About() {
  return (
    <div className="flex flex-col gap-28 pb-28">

      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[520px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1533739095279-9e34b82d441a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBleHRyYWN0aW9uJTIwdmVuZXp1ZWxhfGVufDF8fHx8MTc3NzQ4MTQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="PIONNER en campo"
            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/20" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs text-[#E60000] font-bold uppercase tracking-widest block mb-4"
            >
              Nosotros
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-bold leading-[1.06]"
            >
              Tres décadas en el campo.{" "}
              <span className="text-[#E60000] glow-red-text">
                Una empresa que opera y restaura.
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ─── HISTORIA ─── */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5 text-zinc-300 text-lg leading-relaxed"
          >
            <p>
              <strong className="text-white">
                PIONNER fue fundada en 1992 en Anaco, Estado Anzoátegui
              </strong>{" "}
              — el corazón de la actividad petrolera del oriente venezolano.
            </p>
            <p>
              Con más de 30 años de operaciones ininterrumpidas, comenzamos especializándonos en guaya eléctrica para pozos, y con el tiempo desarrollamos dos nuevas capacidades que definen quiénes somos hoy: el saneamiento de pasivos ambientales y el desarrollo de proyectos de infraestructura de gas.
            </p>
            <p>
              Hemos operado en los campos de PDVSA Distritos Norte y Sur, y completado proyectos de bioremediación de fluidos para Petrobras en campo Oritupano. Nuestros equipos y maquinaria son propios. Nuestro personal es de campo. Y nuestra sede en Anaco nos pone siempre cerca de donde más se nos necesita.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#121212] border border-white/5 p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#E60000] opacity-[0.06] blur-[80px] rounded-full" />
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { value: "1992", label: "Año de fundación" },
                { value: "30+", label: "Años de operaciones continuas" },
                { value: "PPS", label: "Sigla Operacional" },
                { value: "S.A.", label: "Servicios Petroleros Pioneer" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="border-b border-white/5 pb-6 last:border-0"
                >
                  <span className="block text-4xl font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-sm text-zinc-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MISIÓN & VISIÓN ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Propósito y Dirección</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-[#161616] to-[#0e0e0e] border border-white/8 p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E60000] to-transparent rounded-full" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E60000]/5 blur-[50px] rounded-full" />
            <Target className="w-12 h-12 text-[#E60000] mb-7" />
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Proveer servicios técnicos especializados en wireline, saneamiento ambiental y gas con los más altos estándares de seguridad, eficiencia operacional y responsabilidad ambiental, siendo el contratista de confianza de la industria petrolera venezolana.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-bl from-[#161616] to-[#0e0e0e] border border-white/8 p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#E60000] to-transparent rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E60000]/5 blur-[50px] rounded-full" />
            <Shield className="w-12 h-12 text-[#E60000] mb-7" />
            <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Ser la empresa venezolana de servicios petroleros especializados reconocida por su capacidad técnica, su integridad operacional y su compromiso con la restauración ambiental del ecosistema de los campos productores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section className="container mx-auto px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E60000]/[0.04] blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Valores que nos definen</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Experiencia de Campo",
              desc: "30 años de operaciones reales en condiciones exigentes.",
              icon: <CheckCircle2 className="w-8 h-8 text-[#E60000]" />,
            },
            {
              title: "Responsabilidad Ambiental",
              desc: "Operamos con conciencia. Restauramos lo que la industria impacta.",
              icon: <Leaf className="w-8 h-8 text-[#E60000]" />,
            },
            {
              title: "Confiabilidad",
              desc: "Nuestros clientes nos renuevan porque cumplimos.",
              icon: <Shield className="w-8 h-8 text-[#E60000]" />,
            },
            {
              title: "Arraigo Local",
              desc: "Venezolanos operando en Venezuela, conociendo cada kilómetro del campo.",
              icon: <MapPin className="w-8 h-8 text-[#E60000]" />,
            },
          ].map((value, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              key={i}
              className="bg-[#121212]/80 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-[#E60000]/30 transition-colors duration-300 cursor-default"
            >
              <div className="mb-6 bg-[#E60000]/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-[#E60000]/10">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PRESENCIA ─── */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-[#121212] border border-white/8 rounded-3xl overflow-hidden"
        >
          <div className="p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
            {/* Left */}
            <div className="md:w-80 shrink-0">
              <MapPin className="w-10 h-10 text-[#E60000] mb-5" />
              <h2 className="text-3xl font-bold mb-3 text-white">Nuestra Presencia</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Distribuimos nuestra capacidad operativa para responder rápidamente en los principales centros petroleros del país.
              </p>
            </div>

            {/* Right - locations */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border-l-2 border-l-[#E60000] border-t border-r border-b border-white/5">
                <span className="text-xs text-[#E60000] font-bold uppercase tracking-widest mb-2 block">
                  Sede Principal
                </span>
                <h4 className="text-white font-bold text-lg mb-1">Anaco</h4>
                <p className="text-zinc-500 text-sm">Edificio Pioneer, Estado Anzoátegui</p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2 block">
                  Sucursal
                </span>
                <h4 className="text-white font-bold text-lg mb-1">Barinas</h4>
                <p className="text-zinc-500 text-sm">Sector Guanipa</p>
              </div>
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2 block">
                  Sucursal
                </span>
                <h4 className="text-white font-bold text-lg mb-1">Caracas</h4>
                <p className="text-zinc-500 text-sm">CCCT, Chuao</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
