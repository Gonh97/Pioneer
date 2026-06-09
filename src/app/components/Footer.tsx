import { Link } from "react-router";
import { motion } from "motion/react";
import { MapPin, Mail, Phone } from "lucide-react";
import logoImg from "../../imports/Recurso_29.png";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 pt-20 pb-10 mt-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#E60000] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logoImg}
                alt="PIONNER Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed text-sm">
              Servicios especializados de wireline, saneamiento ambiental y
              desarrollo de gas para la industria petrolera venezolana. Más de
              30 años operando en campo.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@pionner.com.ve"
                className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-[#E60000] shrink-0" />
                contacto@pionner.com.ve
              </a>
              <a
                href="tel:+58282XXXXXXX"
                className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#E60000] shrink-0" />
                +58 (282) XXX-XXXX
              </a>
              <div className="flex items-center gap-3 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4 text-[#E60000] shrink-0" />
                Edificio Pioneer, Anaco, Anzoátegui
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Services Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Servicios
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Guaya Eléctrica", path: "/servicios/wireline" },
                { name: "Saneamiento Ambiental", path: "/servicios/saneamiento-ambiental" },
                { name: "Proyectos de Gas", path: "/servicios/proyectos-de-gas" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-400 hover:text-[#E60000] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="block w-4 h-px bg-[#E60000]/40 group-hover:w-6 group-hover:bg-[#E60000] transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Empresa
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Nosotros", path: "/nosotros" },
                { name: "Proyectos", path: "/proyectos" },
                { name: "Contacto", path: "/contacto" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="block w-4 h-px bg-white/20 group-hover:w-6 group-hover:bg-white/60 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Servicios Petroleros Pioneer, S.A. (PPS). Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E60000] animate-pulse" />
            Operando desde 1992 · Anaco, Anzoátegui, Venezuela
          </div>
        </div>
      </div>
    </footer>
  );
}
