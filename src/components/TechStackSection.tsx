const skills = [
  { label: "LIBRARY", name: "REACT" },
  { label: "FRAMEWORK", name: "NEXT.JS" },
  { label: "LANGUAGE", name: "JAVASCRIPT" },
  { label: "LANGUAGE", name: "TYPESCRIPT" },
  { label: "BACKEND", name: "NODE.JS" },
  { label: "FRAMEWORK", name: "EXPRESS" },
  { label: "STYLING", name: "TAILWIND" },
  { label: "DATABASE", name: "MONGODB" },
  { label: "DATABASE", name: "SUPABASE" },
  { label: "MOBILE", name: "REACT NATIVE" },
  { label: "LANGUAGE", name: "JAVA" },
  { label: "LANGUAGE", name: "PYTHON" },
  { label: "TOOLS", name: "DOCKER" },
  { label: "VERSION", name: "GIT" },
  { label: "API", name: "REST" },
  { label: "STATE", name: "REDUX" },
];

const TechStackSection = () => {
  return (
    <section id="skills" className="terminal-bg grid-bg-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-sans text-5xl md:text-6xl font-bold">
            TECH_<span className="text-terminal-green">STACK</span>
          </h2>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse-dot" />
            <span className="font-mono text-xs text-terminal-green">/// SYSTEM_OPTIMIZED</span>
          </div>
        </div>

        <div className="border-t border-b border-terminal-border">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 divide-x divide-y divide-terminal-border border-l border-r border-terminal-border">
            {skills.map((s) => (
              <div key={s.name} className="p-4 hover:bg-terminal-green/10 transition-colors">
                <p className="font-mono text-[9px] text-terminal-green mb-1">&gt;_ {s.label}</p>
                <p className="font-mono text-sm font-bold">{s.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4 font-mono text-[10px] text-muted-foreground">
          <span>TOTAL_NODES: {skills.length}</span>
          <span>MEMORY_USAGE: 128MB</span>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
