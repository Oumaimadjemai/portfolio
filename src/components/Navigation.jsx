import { AnimatePresence, motion as Motion } from "framer-motion";
import { Menu,X } from "lucide-react";
import { useEffect, useState } from "react";
export default function Navigation() {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Fermer le menu d'abord puis scroller après un petit délai
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms est suffisant pour que le menu disparaisse
  }
};


  return (
    <>
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 ">
        <div className="flex items-center justify-between">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Djemai oumima
            </span>
          </Motion.div>
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <Motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-violet-600 transition-colors relative group bg-transparent border-none"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all group-hover:w-full"></span>
              </Motion.button>
            ))}
          </div>
          <button className="md:hidden text-violet-600 bg-transparent border-none"
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} className="border-none" /> : <Menu size={24} className="border-none" />}
           </button>
        </div>
        <AnimatePresence>
         {isMobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-900 hover:text-violet-600 transition-colors py-2 bg-transparent"
              >
                {item.label}
              </button>
            ))}
          </Motion.div>
        )}
</AnimatePresence>

      </div>
    </Motion.nav>
    <AnimatePresence>
  {isMobileMenuOpen &&(
    <Motion.div
     initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
    />
  )}
</AnimatePresence>
</>
  );
}
