import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CODEJARVIS",
    desc: "An AI-powered coding agent with multi-team collaboration, intelligent code suggestions, and agentic workflows for automating dev tasks.",
    tech: ["React", "Node.js", "AI/ML", "TypeScript", "Socket.io"],
    link: "https://github.com/GauravWaghmare23/CodeJarvis",
  },
  {
    title: "HYPECHAT",
    desc: "A real-time chat application for mobile and web using Socket.io with instant messaging, typing indicators, and cross-platform support.",
    tech: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/GauravWaghmare23/HypeChat",
  },
  {
    title: "UBER CLONE",
    desc: "Full-stack Uber-style ride-hailing app with real-time tracking, fare calculation, JWT auth, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/GauravWaghmare23/UBER",
  },
  {
    title: "AGRITRACE",
    desc: "Agricultural supply-chain platform with role-based dashboards, QR-based crop traceability, and farm-to-consumer tracking.",
    tech: ["Next.js", "TypeScript", "MongoDB", "REST API"],
    link: "https://github.com/GauravWaghmare23/Crop-Tracking-App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-6xl md:text-8xl font-extrabold text-primary-foreground mb-16 text-center">
          SELECTED WORKS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border-2 border-foreground bg-card p-6 hover:translate-y-[-4px] transition-transform"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-sans text-2xl font-bold text-card-foreground">{p.title}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground p-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-foreground text-background font-mono text-[10px] font-bold px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
