import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Section {
  title: string;
  content: string | string[] | { label: string; value: string }[];
  type?: "list" | "text" | "grid" | "tree";
}

const projects: Record<string, {
  title: string;
  tagline: string;
  overview: string;
  problem?: string;
  productSelling: string[];
  technicalTerms: string[];
  features: { category: string; items: string[] }[];
  tech: string[];
  link: string;
  // Extended details
  details?: {
    techStack?: { frontend: string[]; backend: string[] };
    repoLayout?: { name: string; items: string[] }[];
    authFlow?: { step: number; desc: string }[];
    apiReference?: { category: string; endpoints: { method: string; path: string; desc: string }[] }[];
    collaboration?: string;
    deployment?: string[];
  };
}> = {
  agritrace: {
    title: "AGRITRACE",
    tagline: "Agricultural Supply Chain Management",
    overview: "AgriTrace is a comprehensive web application designed to revolutionize agricultural supply chain management. It connects farmers, distributors, and retailers in a seamless ecosystem that tracks crops from farm to consumer, ensuring transparency, efficiency, and sustainability.",
    problem: "Traditional farming and distribution methods often lack proper tracking, leading to inefficiencies, food waste, and lack of accountability.",
    productSelling: [
      "Farm-to-consumer traceability for 100% transparency",
      "Reduces food waste through optimized logistics and tracking",
      "Direct market access for farmers to improve profitability",
      "Role-based dashboards for specialized entity management",
    ],
    technicalTerms: [
      "Next.js 14 App Router for optimized server-side rendering",
      "Mongoose ODM for complex data modeling and validation",
      "JWT-based role-level authentication and authorization",
      "Dynamic QR code generation for unique crop identification",
    ],
    features: [
      { category: "For Farmers", items: ["Crop Registration", "Dashboard Overview", "QR Code Generation", "Supply Chain Visibility"] },
      { category: "For Distributors", items: ["Crop Discovery", "Inventory Management", "Profit Tracking", "Retailer Assignment"] },
      { category: "For Retailers", items: ["Stock Management", "Inventory Tracking", "Quality Assurance"] },
      { category: "System Features", items: ["Secure Authentication", "Real-time Updates", "Responsive Design", "Data Analytics"] },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose"],
    link: "https://github.com/GauravWaghmare23/AgriTrace",
  },
  "uber-clone": {
    title: "UBER CLONE",
    tagline: "Full-Stack Ride-Hailing Platform",
    overview: "A high-performance ride-hailing ecosystem built to handle real-time passenger-driver matching. Orchestrates complex micro-interactions and location-based services.",
    productSelling: [
      "Seamless multi-role (User/Captain) ecosystem",
      "Dynamic fare calculation based on distance and vehicle type",
      "Real-time status tracking for enhanced rider confidence",
      "Scalable infrastructure designed for high-concurrency ride requests",
    ],
    technicalTerms: [
      "Socket.io for low-latency, bi-directional communication",
      "bcrypt hashing for robust security protocols",
      "JWT-signed cookie sessions for seamless authentication",
      "Integrated Maps API for precise geospatial coordinates and routing",
    ],
    features: [
      { category: "Core Features", items: ["User/Captain Authentication", "Real-time Ride Matching", "Maps Integration", "Ride Management", "Payment Simulation"] },
      { category: "Technical Details", items: ["Socket.io for real-time updates", "JWT for secure sessions", "GSAP for fluid UI animations", "Bcrypt for password safety"] },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "GSAP"],
    link: "https://github.com/GauravWaghmare23/UBER",
  },
  "gaurav-exe": {
    title: "GAURAV.EXE",
    tagline: "Premium Developer Portfolio Hub",
    overview: "A performance-first personal portfolio showcasing full-stack expertise and AI integration. Engineered for sub-second page loads and immersive user experience.",
    productSelling: [
      "Premium digital identity with high-converting brutalist design",
      "Performance-optimized with sub-second TTI (Time to Interactive)",
      "Interactive data visualizations of coding habits and skills",
      "Immersive micro-interactions that boost user engagement",
    ],
    technicalTerms: [
      "GSAP Timeline management for complex choreographed sequences",
      "Lenis smooth scroll integration for native-feeling kinetics",
      "TypeScript strict mode for type-safe architectural integrity",
      "Vite-swc for lightning-fast HMR and optimized production bundles",
    ],
    features: [
      { category: "Highlights", items: ["Brutalist Aesthetic", "Smooth GSAP Animations", "Lenis Smooth Scroll", "Optimized Build", "Responsive Terminal Design"] },
      { category: "Sections", items: ["Skills Node Map", "Interactive Experience Timeline", "Tech Blog System", "Live Coding Stats"] },
    ],
    tech: ["React", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
    link: "https://github.com/GauravWaghmare23/gaurav.exe",
  },
  "code-studio-ai": {
    title: "CODE STUDIO AI",
    tagline: "Collaborative AI Coding Platform",
    overview: "Code Studio AI is a production-ready collaborative coding environment designed for modern developer teams. It features real-time synchronization, secure project sandboxing, and a robust micro-service architecture built with React 19 and Express 5.",
    productSelling: [
      "Instant real-time collaboration for remote development teams",
      "Secure project management with granular access control",
      "Streamlined developer workflow with integrated team chat",
      "Enterprise-grade security with rate-limiting and helmet protection",
    ],
    technicalTerms: [
      "Express 5 with ES Modules for modern backend architecture",
      "Socket.io rooms for isolated, real-time communication channels",
      "JWT-signed cookies for secure, cross-origin authentication",
      "MongoDB aggregation pipelines for efficient data retrieval",
    ],
    features: [
      { category: "Collaboration", items: ["Real-time Project Chat", "Team Member Management", "Role-based project sharing", "Socket.io synchronization"] },
      { category: "Platform", items: ["Secure JWT Authentication", "Project CRUD Operations", "Rate Limiting & Security Middleware", "Centralized Error Handling"] },
    ],
    tech: ["React 19", "Vite", "Node.js", "Express 5", "MongoDB", "Socket.io"],
    link: "https://github.com/GauravWaghmare23/Code-Studio-Ai",
    details: {
      techStack: {
        frontend: ["React 19", "Vite", "Tailwind CSS", "Socket.io-client", "Axios", "React Router 7"],
        backend: ["Node.js (ESM)", "Express 5", "MongoDB", "Mongoose", "Socket.IO", "JWT", "Bcrypt"]
      },
      repoLayout: [
        { name: "client/src", items: ["App.jsx", "context/", "config/", "pages/ (Login, Register, Home, Project)"] },
        { name: "server", items: ["app.js", "server.js", "controllers/", "middlewares/", "models/", "routes/"] }
      ],
      authFlow: [
        { step: 1, desc: "User registers via POST /users/register with input validation." },
        { step: 2, desc: "User logs in via POST /users/login; server returns JWT in a secure signed cookie." },
        { step: 3, desc: "authenticateJWT middleware validates the token for all protected API routes." },
        { step: 4, desc: "Logout clears the authentication cookie and revokes the session." }
      ],
      apiReference: [
        { category: "Users", endpoints: [
          { method: "POST", path: "/users/register", desc: "Register a new account" },
          { method: "POST", path: "/users/login", desc: "Authenticate and set JWT cookie" },
          { method: "GET", path: "/users/profile", desc: "Fetch current user profile (Protected)" }
        ]},
        { category: "Projects", endpoints: [
          { method: "POST", path: "/projects/create", desc: "Create a new project" },
          { method: "GET", path: "/projects/list", desc: "List user projects" },
          { method: "PUT", path: "/projects/add-users", desc: "Manage collaborators" }
        ]}
      ],
      collaboration: "Leverages Socket.IO for low-latency, bi-directional communication. Each project operates in an isolated room identified by its MongoDB ID, ensuring message privacy and efficient broadcasting.",
      deployment: [
        "Frontend: Built with Vite, optimized for static hosting.",
        "Backend: Node.js server with environment-specific configurations.",
        "Database: MongoDB Atlas with IP allowlisting and encrypted URI."
      ]
    }
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold mb-4">PROJECT NOT FOUND</h1>
          <button onClick={() => navigate("/")} className="font-mono text-sm underline">
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b bg-background/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 font-mono text-xs font-bold hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PORTFOLIO
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-foreground text-background font-mono text-xs font-bold px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            VIEW SOURCE <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="pt-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-primary" />
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{project.tagline}</p>
            </div>
            <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl font-black mb-8 leading-[0.9]">
              {project.title.split(' ')[0]}<br />
              <span className="text-outline text-transparent">{project.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-6 py-2 bg-muted/30">
              {project.overview}
            </p>
          </motion.div>

          {/* Grid Layout for Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Product Value / Business Impact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-sans text-xl font-bold flex items-center gap-3">
                <span className="bg-primary text-primary-foreground px-2 py-0.5 text-xs">VAL</span> 
                PRODUCT IMPACT
              </h3>
              <ul className="space-y-4">
                {project.productSelling.map((point, i) => (
                  <li key={i} className="flex gap-4 font-mono text-xs md:text-sm text-balance">
                    <span className="text-primary mt-1">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Terms / Architecture */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-sans text-xl font-bold flex items-center gap-3">
                <span className="bg-primary text-primary-foreground px-2 py-0.5 text-xs">SYS</span> 
                TECHNICAL ARCHITECTURE
              </h3>
              <ul className="space-y-4">
                {project.technicalTerms.map((term, i) => (
                  <li key={i} className="flex gap-4 font-mono text-xs md:text-sm text-balance">
                    <span className="text-primary mt-1">#</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Core Features */}
          <div className="mb-20">
            <h3 className="font-sans text-3xl font-bold mb-10 text-center uppercase">System Capabilities</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="border-2 border-foreground hover:bg-muted transition-colors p-6">
                  <h4 className="font-mono text-xs font-black text-primary mb-4 uppercase tracking-[0.2em]">
                    // {feat.category}
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {feat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 font-mono text-[10px] sm:text-xs">
                        <div className="w-1 h-1 bg-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Extended Details Section */}
          {project.details && (
            <div className="space-y-24 mb-20">
              {/* Tech Stack Grid */}
              {project.details.techStack && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-sans text-3xl font-black mb-8 flex items-center gap-4">
                    <span className="w-12 h-[4px] bg-primary" />
                    DEEP TECH STACK
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-8 border-l-4 border-foreground">
                      <h4 className="font-mono text-xs font-bold text-primary mb-6 uppercase tracking-widest">// Frontend Core</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.techStack.frontend.map((t, i) => (
                          <span key={i} className="bg-foreground text-background font-mono text-[10px] sm:text-xs px-3 py-1 font-bold italic">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-muted/30 p-8 border-l-4 border-primary">
                      <h4 className="font-mono text-xs font-bold text-primary mb-6 uppercase tracking-widest">// Backend Infrastructure</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.techStack.backend.map((t, i) => (
                          <span key={i} className="bg-primary text-primary-foreground font-mono text-[10px] sm:text-xs px-3 py-1 font-bold italic">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Repo Layout / Blueprint */}
              {project.details.repoLayout && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-sans text-3xl font-black mb-8 flex items-center gap-4">
                    <span className="w-12 h-[4px] bg-primary" />
                    REPOSITORY BLUEPRINT
                  </h3>
                  <div className="bg-[#121212] p-6 sm:p-10 font-mono text-[10px] sm:text-xs leading-loose border-2 border-foreground/10 relative">
                    <div className="absolute top-4 right-6 flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    {project.details.repoLayout.map((dir, i) => (
                      <div key={i} className="mb-4">
                        <span className="text-primary font-bold">└── {dir.name}</span>
                        <div className="pl-6 border-l border-foreground/20 ml-2 mt-1 space-y-1">
                          {dir.items.map((item, j) => (
                            <div key={j} className="text-muted-foreground">├── {item}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Auth & API Reference */}
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <h3 className="font-sans text-3xl font-black flex items-center gap-4">
                    <span className="w-8 h-[4px] bg-primary" />
                    AUTH FLOW
                  </h3>
                  <div className="space-y-6">
                    {project.details.authFlow?.map((f, i) => (
                      <div key={i} className="flex gap-4 group">
                        <span className="font-sans text-4xl font-black text-foreground/10 group-hover:text-primary transition-colors italic">0{f.step}</span>
                        <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-3 space-y-8">
                  <h3 className="font-sans text-3xl font-black flex items-center gap-4">
                    <span className="w-8 h-[4px] bg-primary" />
                    API REFERENCE
                  </h3>
                  <div className="space-y-4">
                    {project.details.apiReference?.map((cat, i) => (
                      <div key={i} className="border-2 border-foreground/5 p-5 hover:border-primary/50 transition-colors">
                        <h4 className="font-mono text-[10px] font-black text-primary mb-4 uppercase tracking-widest">{cat.category}</h4>
                        <div className="space-y-3">
                          {cat.endpoints.map((ep, j) => (
                            <div key={j} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-foreground/5 pb-2 last:border-0 last:pb-0">
                              <code className="text-[10px] sm:text-xs">
                                <span className="text-primary font-bold mr-2 uppercase">{ep.method}</span>
                                <span className="text-muted-foreground">{ep.path}</span>
                              </code>
                              <span className="font-mono text-[9px] text-muted-foreground italic text-right">{ep.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Collaboration Highlight */}
              {project.details.collaboration && (
                <div className="bg-primary text-primary-foreground p-8 sm:p-12 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]" />
                   <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                     <div className="shrink-0">
                        <div className="w-20 h-20 rounded-full border-4 border-dashed border-primary-foreground/30 flex items-center justify-center animate-spin-slow">
                          <div className="w-4 h-4 bg-primary-foreground rounded-full animate-pulse" />
                        </div>
                     </div>
                     <div>
                       <h4 className="font-sans text-2xl font-black mb-4 italic tracking-tight uppercase">Real-Time Core</h4>
                       <p className="font-mono text-sm leading-relaxed text-primary-foreground/80">
                         {project.details.collaboration}
                       </p>
                     </div>
                   </div>
                </div>
              )}
            </div>
          )}

          {/* Problem Statement Detail */}
          {project.problem && (
            <div className="mb-20 p-8 sm:p-12 border-2 border-primary bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rotate-45 translate-x-16 -translate-y-16" />
              <h3 className="font-sans text-2xl font-bold mb-6 relative z-10">THE CHALLENGE</h3>
              <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed relative z-10">
                {project.problem}
              </p>
            </div>
          )}

          {/* CTA / Final Section */}
          <div className="text-center py-20 border-y border-foreground/10 bg-grid-white/[0.02]">
            <h3 className="font-sans text-4xl sm:text-5xl font-black mb-10 leading-tight">
              INTERESTED IN THE<br />IMPLEMENTATION?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-foreground text-background px-10 py-5 font-sans font-black text-xl hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_#22c55e] transition-all flex items-center justify-center gap-3"
              >
                GITHUB REPO <ExternalLink className="w-6 h-6" />
              </a>
              <button 
                onClick={() => navigate("/#projects")}
                className="w-full sm:w-auto border-2 border-foreground px-10 py-5 font-sans font-black text-xl hover:bg-foreground hover:text-background transition-colors"
              >
                VIEW PROJECTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
