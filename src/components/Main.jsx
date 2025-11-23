import { motion as Motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
export default function MainComponent() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <Motion.div
          className="absolute buttom-20 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <Motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg">
                👋 Hello, I'm Djemai Oumima
              </span>
            </Motion.div>
            <Motion.h1
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full stack web & Desktop Developer
            </Motion.h1>

            <Motion.p
              className="text-slate-700  mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Crafting elegant solutions and building seamless experiences
              across web and desktop platforms. Passionate about clean code,
              intuitive design, and innovative technology.
            </Motion.p>
            <Motion.div
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
              >
                View my work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-violet-600 text-violet-600 hover:bg-violet-50"
              >
                Get In Touch
              </button>
            </Motion.div>
            <Motion.div
              className="flex gap-4 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Motion.a
                href="https://github.com/Oumaimadjemai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </Motion.a>
              <Motion.a
                href="http://www.linkedin.com/in/djemai-oumima-8b9066267"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </Motion.a>
              <Motion.a
                href="mailto:o.djemai@esi-sba.com"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </Motion.a>
            </Motion.div>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[500px]">
              <Motion.div
                className="absolute top-0 right-0 bg-white p-6 rounded-2xl shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-32 bg-gradient-to-r from-violet-400 to-purple-400 rounded"></div>
                  <div className="h-2 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded"></div>
                  <div className="h-2 w-28 bg-gradient-to-r from-pink-400 to-rose-400 rounded"></div>
                </div>
              </Motion.div>
              <Motion.div
                className="absolute top-1/4 left-0 bg-white p-6 rounded-2xl shadow-2xl"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></div>
                  <span className="text-xs text-slate-600">component.jsx</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-28 bg-gradient-to-r from-violet-300 to-purple-300 rounded"></div>
                  <div className="h-2 w-36 bg-gradient-to-r from-cyan-300 to-blue-300 rounded"></div>
                  <div className="h-2 w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded"></div>
                  <div className="h-2 w-32 bg-gradient-to-r from-amber-300 to-orange-300 rounded"></div>
                </div>
              </Motion.div>
              <Motion.div
                className="absolute bottom-1/4 right-1/4 bg-white p-6 rounded-2xl shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  <span className="text-xs text-slate-600">App.jsx</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-gradient-to-r from-violet-300 to-purple-300 rounded"></div>
                  <div className="h-2 w-20 bg-gradient-to-r from-cyan-300 to-blue-300 rounded"></div>
                </div>
              </Motion.div>
              <Motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400 rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </Motion.div>
        </div>

        <Motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown
            size={32}
            className="text-violet-600 cursor-pointer"
            onClick={() => scrollToSection("about")}
          />
        </Motion.div>
      </div>
    </section>
  );
}
