import { motion } from "framer-motion";
import AnimatedSection, { staggerContainer, staggerItem } from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Google Student Ambassador",
    org: "Google Student Ambassadors India",
    type: "Internship",
    period: "Jan 2026 – Present",
    desc: "Organize workshops, events, and hands-on sessions to promote Google Gemini experimentation and cutting-edge AI tools.",
    skills: ["Leadership", "Organizational Leadership", "AI Tools"],
  },
  {
    role: "Contributor",
    org: "Social Winter of Code (SWOC)",
    type: "Open Source",
    period: "Jan 2026 – Present",
    desc: "Contributing to open-source projects focusing on full-stack web development and front-end engineering.",
    skills: ["Back-End Web Development", "Front-End Development"],
  },
  {
    role: "ECWoC'26 Contributor",
    org: "Elite Coders",
    type: "Open Source",
    period: "Jan 2026 – Present",
    desc: "Active contributor in ECWoC'26 program, collaborating on innovative coding projects.",
    skills: ["Open Source", "Collaboration"],
  },
  {
    role: "Development Lead & Organiser",
    org: "Central India Hackathon",
    type: "Leadership",
    period: "Nov 2025 – Present",
    desc: "Leading development initiatives and organizing hackathon events for the tech community.",
    skills: ["Leadership Development", "Organizational Leadership"],
  },
  {
    role: "Data Science Student Association",
    org: "DSSA",
    type: "Full-time · On-site",
    period: "8 mos",
    desc: "Active member contributing to data science initiatives and student community building.",
    skills: ["Data Science", "Community Building"],
  },
  {
    role: "NeuraX Coding Community Head & Founder",
    org: "Surjodaja College of Engineering",
    type: "Leadership",
    period: "Aug 2025 – Present",
    desc: "Founded and leading the college's premier coding community, mentoring students in tech.",
    skills: ["Leadership", "Management", "Community Building"],
  },
  {
    role: "Event Coordinator",
    org: "Technical Events",
    type: "Volunteer",
    period: "Jul 2025 – Dec 2025",
    desc: "Coordinated technical events and workshops for the student community in Nagpur.",
    skills: ["Event Management", "Coordination"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="grid-bg py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-extrabold mb-12 sm:mb-16 text-center">
            EXPER<span className="text-outline">IENCE</span>
          </h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-foreground/20 hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative sm:pl-14 pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-4 top-6 w-4 h-4 border-2 border-foreground bg-primary hidden sm:block" />

                <div className="border-2 border-foreground bg-card p-4 sm:p-6 hover:translate-x-1 transition-transform">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="font-sans text-base sm:text-lg font-bold text-card-foreground">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mb-2">
                    {exp.org} · {exp.type}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-3">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="bg-foreground text-background font-mono text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
