import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section id="education" className="terminal-bg py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-center">
            EDU_<span className="text-terminal-green">CATION</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="border border-terminal-border p-5 sm:p-8"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-terminal-green/10 p-2 sm:p-3 border border-terminal-border shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-terminal-green" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-bold mb-1">
                  Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)
                </h3>
                <p className="font-mono text-xs sm:text-sm text-muted-foreground mb-3">
                  Bachelor of Engineering — B.E. Computer Science Engineering (Data Science)
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs">
                  <span className="border border-terminal-border px-3 py-1 text-terminal-green">
                    AUG 2023 — MAY 2027
                  </span>
                  <span className="border border-terminal-border px-3 py-1">
                    NAGPUR, MAHARASHTRA
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="border border-terminal-border p-3">
                <p className="font-mono text-[9px] text-muted-foreground mb-1">SPECIALIZATION</p>
                <p className="font-mono text-sm font-bold">DATA SCIENCE</p>
              </div>
              <div className="border border-terminal-border p-3">
                <p className="font-mono text-[9px] text-muted-foreground mb-1">YEAR</p>
                <p className="font-mono text-sm font-bold">3RD YEAR</p>
              </div>
              <div className="border border-terminal-border p-3">
                <p className="font-mono text-[9px] text-muted-foreground mb-1">STATUS</p>
                <p className="font-mono text-sm font-bold text-terminal-green">PURSUING</p>
              </div>
            </div>

            <div className="mt-4 font-mono text-[10px] text-muted-foreground">
              <span>$ education --status _</span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EducationSection;
