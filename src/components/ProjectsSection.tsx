import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedSection, { staggerContainer, staggerItem } from "./AnimatedSection";

const projects = [
  {
    title: "CODE STUDIO AI",
    slug: "code-studio-ai",
    desc: "Full-stack collaborative AI-powered coding platform with real-time team synchronization and secure project management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "AI/ML"],
    link: "https://github.com/GauravWaghmare23/Code-Studio-Ai",
  },
  {
    title: "AGRITRACE",
    slug: "agritrace",
    desc: "Next-gen Agricultural Supply Chain Management system with real-time crop tracking and QR-based traceability.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
    link: "https://github.com/GauravWaghmare23/AgriTrace",
  },
  {
    title: "UBER CLONE",
    slug: "uber-clone",
    desc: "A comprehensive full-stack ride-hailing platform with real-time passenger-driver matching using Socket.io and GSAP.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "GSAP"],
    link: "https://github.com/GauravWaghmare23/UBER",
  },
  {
    title: "GAURAV.EXE",
    slug: "gaurav-exe",
    desc: "Premium developer portfolio hub built with a brutalist aesthetic, smooth animations, and optimized for high performance.",
    tech: ["React", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
    link: "https://github.com/GauravWaghmare23/gaurav.exe",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="bg-primary py-16 sm:py-24 px-4 sm:px-6 reveal-on-scroll">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-extrabold text-primary-foreground mb-10 sm:mb-16 text-center">
            SELECTED WORKS
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-8"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              onClick={() => navigate(`/project/${p.slug}`)}
              className="border-2 border-foreground bg-card p-4 sm:p-6 transition-transform cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-card-foreground">{p.title}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-accent text-accent-foreground p-2 hover:bg-foreground hover:text-background transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-foreground text-background font-mono text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
