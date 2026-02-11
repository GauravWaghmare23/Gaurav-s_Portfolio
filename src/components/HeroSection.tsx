import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen grid-bg flex flex-col items-center justify-center relative pt-16 px-6">
      {/* Floating shapes */}
      <div className="absolute left-[10%] top-[30%] w-10 h-10 bg-accent animate-float" />
      <div className="absolute right-[8%] top-[55%] w-12 h-12 rounded-full bg-destructive/30 animate-float-delayed" />

      {/* Faded "CODE" text */}
      <div className="absolute right-[5%] top-[20%] text-[8rem] font-sans font-bold text-foreground/5 select-none hidden lg:block">
        CODE
      </div>

      {/* Status badge */}
      <div className="border border-foreground px-4 py-1.5 flex items-center gap-2 mb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-dot" />
        <span className="font-mono text-xs font-medium tracking-wider">SYSTEM STATUS: ONLINE</span>
      </div>

      {/* Main heading */}
      <h1 className="text-center">
        <span className="block font-sans font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
          FULL STACK
        </span>
        <span className="block font-sans font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none text-outline">
          DEVELOPER
        </span>
      </h1>

      {/* Tagline */}
      <div className="mt-8 bg-primary px-6 py-3 max-w-lg text-center">
        <p className="font-mono text-sm text-primary-foreground">
          I build digital products that refuse to be boring.
        </p>
        <p className="font-mono text-sm text-primary-foreground mt-1">
          React • Node.js • TypeScript • Python
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/GauravWaghmare23"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background font-mono text-xs font-bold px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-foreground"
        >
          VIEW GITHUB
        </a>
        <a
          href="mailto:gauravwaghmare95032@gmail.com"
          className="bg-background text-foreground font-mono text-xs font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          ✉ CONTACT ME
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
