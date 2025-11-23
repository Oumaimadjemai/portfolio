import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "material ui"],
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
    },
    {
      category: "Backend",
      skills: ["Django rest framework", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      category: "Desktop",
      skills: ["Electron js"],
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "Microservices"],
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
        </Motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`bg-gradient-to-br ${category.bgColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
            >
              <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg mb-4 shadow-md`}>
                <h3 className="text-white">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                    <span className="text-slate-700">{skill}</span>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}