import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="grid-bg py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-5xl md:text-7xl font-extrabold mb-4">
          LET'S <span className="text-outline">CONNECT</span>
        </h2>
        <p className="font-mono text-sm text-muted-foreground mb-10 max-w-md mx-auto">
          Currently open to freelance MERN projects, SaaS tools, and AI-integrated web apps.
          Let's build something awesome.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          <a
            href="mailto:gauravwaghmare95032@gmail.com"
            className="bg-foreground text-background font-mono text-xs font-bold px-6 py-3 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> EMAIL ME
          </a>
          <a
            href="https://github.com/GauravWaghmare23"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground font-mono text-xs font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" /> GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-waghmare2307/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground font-mono text-xs font-bold px-6 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" /> LINKEDIN
          </a>
        </div>

        <div className="font-mono text-[10px] text-muted-foreground border-t pt-6">
          <p>© 2026 GAURAV WAGHMARE • BUILT WITH ❤️ AND CAFFEINE</p>
          <p className="mt-1">+91 95032 17384 • gauravwaghmare95032@gmail.com • Nagpur, India</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
