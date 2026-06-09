import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/Recurso_29.png";

interface NavLink {
  name: string;
  path: string;
  dropdown?: { name: string; path: string }[];
}

const navLinks: NavLink[] = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  {
    name: "Servicios",
    path: "#",
    dropdown: [
      { name: "Guaya Eléctrica (Wireline)", path: "/servicios/wireline" },
      { name: "Saneamiento Ambiental", path: "/servicios/saneamiento-ambiental" },
      { name: "Proyectos de Gas", path: "/servicios/proyectos-de-gas" },
    ],
  },
  { name: "Proyectos", path: "/proyectos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="PIONNER Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
                  {link.name}
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                  <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#121212] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl overflow-hidden z-50 translate-y-1 group-hover:translate-y-0">
                    {link.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        to={drop.path}
                        className="block px-5 py-3.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#E60000] after:transition-all after:duration-300 ${
                    location.pathname === link.path
                      ? "text-white after:w-full"
                      : "text-zinc-300 hover:text-white after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contacto"
            className="px-6 py-2.5 rounded-full bg-[#E60000] text-white text-sm font-bold hover:bg-[#b30000] transition-all duration-300 shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] hover:scale-105"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.3 }}
                  className="flex flex-col"
                >
                  {link.dropdown ? (
                    <>
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2 mt-4">
                        {link.name}
                      </span>
                      <div className="flex flex-col gap-1 pl-4 border-l border-[#E60000]/30">
                        {link.dropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            to={drop.path}
                            className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all py-2"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-lg font-medium text-zinc-200 hover:text-white transition-colors py-3 border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link
                  to="/contacto"
                  className="mt-6 text-center block px-6 py-3.5 rounded-xl bg-[#E60000] text-white font-bold shadow-[0_0_20px_rgba(230,0,0,0.3)]"
                >
                  Contáctanos
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
