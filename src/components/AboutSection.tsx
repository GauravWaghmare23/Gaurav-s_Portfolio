import avatar from "@/assets/avatar.png";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="grid-bg-dark terminal-bg py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Avatar */}
        <AnimatedSection>
          <div className="border-2 border-foreground p-2 bg-card relative max-w-xs sm:max-w-sm mx-auto md:mx-0">
            <span className="absolute top-2 left-4 bg-destructive text-destructive-foreground font-mono text-[10px] px-2 py-0.5 font-bold">
              AVATAR.JPG
            </span>
            <img src={avatar} alt="Gaurav Waghmare" className="w-full grayscale" />
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection delay={0.2}>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">WHO AM I?</h2>
          <p className="font-mono text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            I am Gaurav Waghmare. A full-stack developer and 3rd-year B.Tech CSE student who
            believes the web has become too sanitized. I bring{" "}
            <span className="highlight-yellow font-bold">personality</span> back to code.
          </p>
          <div className="border-l-2 border-foreground pl-4 space-y-1 font-mono text-xs sm:text-sm mb-6 sm:mb-8">
            <p>&gt; Specialized in MERN Stack & AI-powered Web Apps.</p>
            <p>&gt; Google Gemini Student Ambassador.</p>
            <p>&gt; Hackathon Development Lead & Co-organiser.</p>
            <p>&gt; Building an AI-powered Browser IDE.</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="border-2 border-foreground bg-primary text-primary-foreground font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5"
            >
              📍 NAGPUR, INDIA
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="border-2 border-foreground bg-accent text-accent-foreground font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5"
            >
              💚 AVAILABLE
            </motion.span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
