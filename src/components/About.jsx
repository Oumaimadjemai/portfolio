import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { Code2,GraduationCap,Laptop,Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Laptop,
      title: "Cross-Platform",
      description: "Building applications for web and desktop environments",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
      color: "from-pink-500 to-rose-600",
    },
  ];
  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      <Motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        
      />
      <Motion.div
      className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <Motion.div  initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10">
            <Motion.div  initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mb-6"/>
             <h2 className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <Motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Passionate developer crafting digital experiences
          </Motion.p>
        </Motion.div>
         <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-violet-100 mb-20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div className="text-left">
              <p className="text-slate-900">Final Year Student</p>
              <p className="text-slate-600 text-sm">Higher School of Computer Science - Sidi Bel Abbès</p>
              <p className="text-violet-600 text-sm">Spécialité: Système d'Information et Web</p>
            </div>
          </div>
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <Motion.div
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-violet-600 to-purple-600 rounded-full"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <p className="text-slate-700 leading-relaxed">
                I'm a passionate full stack developer specializing in creating
                robust web applications and desktop solutions. With a keen eye for
                design and a commitment to writing clean, efficient code, I bring
                ideas to life through technology.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group"
            >
              <Motion.div
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-cyan-600 to-blue-600 rounded-full"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <p className="text-slate-700 leading-relaxed">
                My expertise spans both frontend and backend development, allowing
                me to build complete, end-to-end solutions. I stay current with
                the latest technologies and best practices to deliver modern,
                scalable applications.
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              <Motion.div
                className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-pink-600 to-rose-600 rounded-full"
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
              <p className="text-slate-700 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing
                to open-source projects, and continuously learning to improve my
                craft.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <Motion.div
              className="relative w-full h-96 group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              {/* Elegant rotating gradient border */}
              <Motion.div
                className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl opacity-75 blur-sm"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image container */}
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBjb2RlfGVufDF8fHx8MTc2MzYzODg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Programming"
                  className="relative rounded-2xl w-full h-full object-cover"
                />
              </div>

              {/* Elegant corner accents */}
              <Motion.div
                className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-violet-600 rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.8 }}
              />
              <Motion.div
                className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-indigo-600 rounded-br-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1 }}
              />
            </Motion.div>
          </Motion.div>
        </div>

        {/* Feature cards - more elegant design */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Gradient background on hover */}
              <Motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Animated top border */}
                <Motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-t-2xl`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
                />

                <Motion.div
                  className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl inline-block mb-6 shadow-md`}
                  whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={32} />
                </Motion.div>

                <h3 className="text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </Motion.div>
          ))}
          </Motion.div>
      </div>
    </section>
  );
}
