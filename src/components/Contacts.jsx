import { motion as Motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { Mail, MapPin, Phone } from "lucide-react";

// MUI Components
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  

 

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "o.djemai@esi-sba.dz",
      href: "mailto:o.djemai@esi-sba.dz",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213552174233",
      href: "tel:+213552174233",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null,
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
   <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out if you'd like to work together!
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <Motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${info.color} p-4 rounded-full flex-shrink-0 shadow-md mb-4`}>
                <info.icon className="text-white" size={28} />
              </div>
              <h4 className="text-slate-900 mb-2">{info.label}</h4>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-slate-600 hover:text-violet-600 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-slate-600">{info.value}</p>
              )}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
