import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Phone, Send, Building2 } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  nombre: string;
  empresa: string;
  cargo: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Mensaje enviado con éxito", {
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });
    reset();
  };

  return (
    <div className="flex flex-col gap-24 pb-28">

      {/* ─── HERO ─── */}
      <section className="container mx-auto px-6 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <span className="text-xs text-[#E60000] font-bold uppercase tracking-widest block mb-4">
            Contacto
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-[1.06]">
            Cuéntanos tu{" "}
            <span className="text-[#E60000] glow-red-text">proyecto</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Respondemos en menos de 24 horas. Si necesitas un contratista especializado para wireline, saneamiento ambiental o proyectos de gas en Venezuela, estamos listos.
          </p>
        </motion.div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 xl:gap-20">

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Sede Principal */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-7">
              <h3 className="text-lg font-bold mb-5 text-white flex items-center gap-3">
                <Building2 className="text-[#E60000] w-5 h-5 shrink-0" />
                Sede Principal
              </h3>
              <div className="flex items-start gap-3 text-zinc-400 mb-5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-zinc-600" />
                <div className="text-sm leading-relaxed">
                  <strong className="block text-white mb-1">Edificio Pioneer</strong>
                  Anaco, Estado Anzoátegui
                  <br />
                  Venezuela
                </div>
              </div>
            </div>

            {/* Sucursales */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-7">
              <h3 className="text-sm font-bold mb-5 text-zinc-400 uppercase tracking-widest">
                Sucursales
              </h3>
              <div className="space-y-5">
                {[
                  { city: "Barinas", addr: "Sector Guanipa" },
                  { city: "Caracas", addr: "CCCT, Chuao" },
                ].map((loc) => (
                  <div key={loc.city} className="flex items-start gap-3 text-zinc-400">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-zinc-600" />
                    <div className="text-sm">
                      <strong className="block text-white mb-0.5">{loc.city}</strong>
                      {loc.addr}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto directo */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-7 space-y-5">
              <a
                href="mailto:contacto@pionner.com.ve"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E60000]/15 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000]/25 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">contacto@pionner.com.ve</span>
              </a>
              <a
                href="tel:+58282XXXXXXX"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E60000]/15 flex items-center justify-center text-[#E60000] shrink-0 group-hover:bg-[#E60000]/25 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+58 (282) XXX-XXXX</span>
              </a>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3 bg-[#121212] border border-white/8 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#E60000]/[0.05] blur-[90px] rounded-full pointer-events-none" />

            <h3 className="text-xl font-bold text-white mb-8 relative z-10">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Nombre completo *
                  </label>
                  <input
                    {...register("nombre", { required: true })}
                    className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E60000] transition-colors placeholder:text-zinc-600"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Empresa *
                  </label>
                  <input
                    {...register("empresa", { required: true })}
                    className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E60000] transition-colors placeholder:text-zinc-600"
                    placeholder="Ej. Operadora C.A."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Cargo
                  </label>
                  <input
                    {...register("cargo")}
                    className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E60000] transition-colors placeholder:text-zinc-600"
                    placeholder="Ej. Gerente de Operaciones"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Teléfono *
                  </label>
                  <input
                    {...register("telefono", { required: true })}
                    type="tel"
                    className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E60000] transition-colors placeholder:text-zinc-600"
                    placeholder="+58 XXX XXXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Correo electrónico *
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E60000] transition-colors placeholder:text-zinc-600"
                  placeholder="correo@empresa.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Servicio de interés
                </label>
                <select
                  {...register("servicio")}
                  className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-zinc-300 text-sm focus:outline-none focus:border-[#E60000] transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="wireline">Guaya Eléctrica (Wireline)</option>
                  <option value="ambiental">Saneamiento Ambiental</option>
                  <option value="gas">Proyectos de Gas</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Descripción del proyecto *
                </label>
                <textarea
                  {...register("mensaje", { required: true })}
                  rows={5}
                  className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E60000] transition-colors resize-none placeholder:text-zinc-600"
                  placeholder="Cuéntanos brevemente sobre los requerimientos..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E60000] hover:bg-[#b30000] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_35px_rgba(230,0,0,0.5)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>Enviar consulta <Send className="w-4 h-4" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
