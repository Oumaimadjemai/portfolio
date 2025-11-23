import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Chip from "@mui/material/Chip";
import login from "../assets/projects/darlokman/login.png";
import dashboard from "../assets/projects/darlokman/dashboard1.png";
import depenses from "../assets/projects/darlokman/depenses.png";
import achat from "../assets/projects/darlokman/Achats.png";
import vente from "../assets/projects/darlokman/vente.png";
import dashboard_loan from "../assets/projects/loan/dashboard.png";
import result from "../assets/projects/loan/result.png";
import logincode from "../assets/projects/Codegrad/logincode.png";
import dashboardcode from "../assets/projects/Codegrad/dashboardcode.png";
import addteacher from "../assets/projects/Codegrad/addteacher.png";
import addstudent from "../assets/projects/Codegrad/addstudent.png";
import signup from "../assets/projects/Codegrad/signup.png";
import school from "../assets/projects/Codegrad/school.png";
import soutenance from "../assets/projects/Codegrad/soutenance.png";
import dash from "../assets/projects/assirem/dash.png";
import signupcan from "../assets/projects/assirem/signupcan.png";
import signuprec from "../assets/projects/assirem/signuprec.png";
import loginassirem from "../assets/projects/assirem/loginassirem.png";
import recherche from "../assets/projects/assirem/recherche.png";
// ---------------------------
// Image Carousel (JSX version)
// ---------------------------
function ImageCarousel({ images, alt, color }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full group/carousel">
      <div className="relative h-full overflow-hidden">
        <Motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity`}
        />
      </div>

      {images.length > 1 && (
        <>
          {/* Image Counter */}
          <div className="absolute top-3 right-3 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="text-violet-600" size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="text-violet-600" size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex gap-1 bg-black/40 px-1.5 py-1 rounded-full backdrop-blur-sm">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`transition-all rounded-full ${
                  i === currentIndex
                    ? "bg-white w-3 h-1" // actif très fin
                    : "bg-white/40 hover:bg-white/70 w-1 h-1" // inactif minuscule
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ---------------------------
// Projects Component (JSX)
// ---------------------------
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Dar Lokman Desktop",
      description:
        "A desktop inventory and sales management system built with Electron, React, and Django REST.",
      tags: [
        "React",
        "Electron.js",
        "Django REST Framework",
        "PostgreSQL",
        "MUI",
        "Tailwind CSS",
        "Git & GitHub",
        "Deployment",
        "UI/UX",
      ],
      github: "https://github.com/Oumaimadjemai/demo_front.git",
      demo: "https://demo-front-unx5.onrender.com",
      images: [login, dashboard, depenses, achat, vente],
      color: "from-violet-500 to-purple-600",
      details:
        "Dar Lokman Desktop is a complete stock management and sales tracking application. It provides real-time inventory updates, supplier management, purchase and sales operations, and financial tracking — all packaged in a cross-platform Electron desktop app.",
      features: [
        "Real-time stock updates",
        "Purchase and sales management",
        "Supplier management",
        "User authentication with roles (Admin, Vendeur, Magasinier…) ",
        "Financial tracking: expenses, payments, remaining amounts",
        "Modern UI with MUI components styled using Tailwind CSS",
        "Desktop app powered by Electron.js",
      ],
    },
    {
      title: "Loan Desktop",
      description:
        "A cross-platform desktop application for calculating loan eligibility based on salary, charges, duration, and bank rates.",
      tags: ["Electron", "React", "Django REST Framework", "Git & GitHub"],
      github: "https://github.com/Oumaimadjemai/loan_front.git",
      demo: "https://loan-front-aqno.onrender.com",
      images: [dashboard_loan, result],
      color: "from-cyan-500 to-blue-600",
      details:
        "Loan Desktop is a financial calculation tool built with Electron and React. It helps users determine their borrowing capacity by analyzing salary, monthly charges, loan duration, and interest rates. The backend, powered by Django REST Framework, handles all financial formulas and eligibility rules.",
      features: [
        "Loan eligibility calculation based on salary and monthly charges",
        "Automatic computation of borrowing capacity and monthly payments",
        "Support for custom bank interest rates and loan durations",
        "Real-time calculation with a clean and intuitive UI",
        "Cross-platform desktop support (Windows, macOS, Linux)",
      ],
    },
    {
      title: "Codegrad Platform",
      description:
        "Plateforme pluridisciplinaire basée sur une architecture microservices pour la gestion des projets de fin d'études (PFE) et projets pluridisciplinaires.",
      tags: [
        "DRF",
        "Nodejs",
        "SpringBoot",
        "Docker",
        "ReactJS",
        "Microservices",
        "WebSockets",
        "Redis",
        "Git&GitHub",
        "mysql",
        "mongodb",
      ],
      github: "https://github.com/Oumaimadjemai/projet_2cs_v1.git",
      demo: "https://example.com",
      images: [
        logincode,
        signup,
        dashboardcode,
        addteacher,
        addstudent,
        school,
        soutenance,
      ],
      color: "from-pink-500 to-rose-600",
      details:
        "Développement d'une plateforme avancée de gestion et de suivi des projets PFE avec architecture microservices. Intégration d'un tableau de bord interactif pour visualiser les métriques, suivi en temps réel via WebSockets, et gestion multi-utilisateurs (étudiants, enseignants, administrateurs).",
      features: [
        "Mise à jour des données en temps réel via WebSockets",
        "Graphiques et tableaux interactifs pour le suivi des projets",
        "Widgets personnalisables pour le tableau de bord",
        "Export des rapports en PDF/Excel",
        "Collaboration multi-utilisateurs",
      ],
    },
    {
      title: "HoraPay",
      description:
        "Application de gestion des heures supplémentaires dans les universités, avec architecture microservices et portail centralisé.",
      tags: ["Django REST Framework", "React", "Docker", "Redis", "JWT"],
      github: null, // Pas de GitHub fourni
      demo: null, // Pas de démo en ligne
      images: [
        "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGNsb3VkfGVufDF8fHx8MTc2MzgxNDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM3NDA0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1676030789467-a097e2291bb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NlcnZpY2VzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2Mzc4NDU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      color: "from-amber-500 to-orange-600",
      details:
        "Projet pluridisciplinaire visant à automatiser le suivi et le calcul des heures supplémentaires des enseignants et du personnel universitaire. L’application inclut un portail web pour la gestion et un backend API robuste pour le traitement et l’authentification sécurisée.",
      features: [
        "Gestion des heures supplémentaires par utilisateur et par département",
        "Authentification centralisée avec JWT",
        "Architecture microservices pour modularité et scalabilité",
        "Cache et optimisation des performances avec Redis",
        "Portail web interactif avec React pour visualisation et gestion",
      ],
    },
    {
      title: "Assirem",
      description:
        "Site de recrutement pour gérer et publier des offres d'emploi avec suivi des candidats.",
      tags: ["django", "mysql", "html", "css", "js"],
      github: null, // Pas de GitHub pour ce projet
      demo: null, // Pas de démo en ligne
      images: [dash, signuprec, signupcan, loginassirem, recherche],
      color: "from-emerald-500 to-teal-600",
      details:
        "Premier projet pluridisciplinaire, un site de recrutement permettant aux recruteurs de publier des offres et aux candidats de postuler. Comprend une interface administrateur et des fonctionnalités de gestion des candidatures.",
      features: [
        "Gestion des offres d'emploi",
        "Inscription et connexion pour recruteurs et candidats",
        "Recherche et filtrage des offres",
        "Suivi des candidatures",
        "Interface administrateur simple",
      ],
    },
    // ,
    //     {
    //       title: "Mobile-First Social App",
    //       description:
    //         "Progressive web application for social networking with offline capabilities.",
    //       tags: ["React", "Firebase", "PWA"],
    //       github: "https://github.com",
    //       demo: "https://example.com",
    //       images: [
    //         "https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2MzcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //         "https://images.unsplash.com/photo-1741721816798-2ab57b7a3a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtZXNzYWdpbmd8ZW58MXx8fHwxNzYzODE0ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //         "https://images.unsplash.com/photo-1696695368125-fc0d809b4ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc29jaWFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjM4MTQ4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //       ],
    //       color: "from-indigo-500 to-purple-600",
    //       details: "Developed a mobile-first Progressive Web App for social networking with features like real-time messaging, media sharing, and offline support for a seamless user experience.",
    //       features: [
    //         "Progressive Web App capabilities",
    //         "Real-time messaging with Firebase",
    //         "Offline support and sync",
    //         "Image and video sharing",
    //         "Push notifications",
    //       ],
    //     },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto" />
        </Motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-2xl transition-all group rounded-2xl overflow-hidden">
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <ImageCarousel
                    images={project.images}
                    alt={project.title}
                    color={project.color}
                  />
                </div>

                <CardHeader
                  title={
                    <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  }
                  subheader={project.description}
                  className="pb-0"
                />

                <CardContent className="mt-4 flex flex-col flex-1 justify-between">
                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        variant="secondary"
                        className="bg-gradient-to-r from-violet-100 to-purple-100 !text-violet-700 font-bold"
                      />
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outlined"
                      className="flex-1 !text-violet-600 !border-violet-300  hover:!bg-violet-50 "
                      href={project.github}
                      target="_blank"
                    >
                      <Github size={16} className="mr-2" /> Code
                    </Button>

                    <Button
                      className={`flex-1 !text-white bg-gradient-to-r ${project.color} hover:opacity-90`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink size={16} className="mr-2 !text-white" />{" "}
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Motion.div>
          ))}
        </div>
      </div>

      {/* DETAILS DIALOG */}
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto !p-6">
          {selectedProject && (
            <>
              <DialogTitle className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent !text-2xl">
                {selectedProject.title}
              </DialogTitle>

              <p className="text-slate-600">{selectedProject.description}</p>

              {/* IMAGE CAROUSEL */}
              <div className="h-64 mt-4 rounded-xl overflow-hidden">
                <ImageCarousel
                  images={selectedProject.images}
                  alt={selectedProject.title}
                  color={selectedProject.color}
                />
              </div>

              {/* DETAILS */}
              <h3 className="mt-6 text-slate-900">About This Project</h3>
              <p className="text-slate-600 leading-relaxed">
                {selectedProject.details}
              </p>

              {/* FEATURES */}
              <h3 className="mt-6 text-slate-900">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, i) => (
                  <Motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color} mt-2`}
                    />
                    <span className="text-slate-600">{feature}</span>
                  </Motion.li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-6">
                <Button
                  variant="outlined"
                  className="flex-1 !border-violet-300 !text-violet-600  hover:!bg-violet-50"
                  href={selectedProject.github}
                  target="_blank"
                >
                  <Github size={18} className="mr-2  !text-violet-600 " /> View
                  Code
                </Button>

                <Button
                  className={`flex-1 !text-white bg-gradient-to-r ${selectedProject.color} hover:opacity-90`}
                  href={selectedProject.demo}
                  target="_blank"
                >
                  <ExternalLink size={18} className="mr-2 text-white" /> Live
                  Demo
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
