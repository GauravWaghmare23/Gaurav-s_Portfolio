import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const blogs = [
  {
    id: 1,
    title: "Why Web Development Still Matters in the Age of AI",
    summary: "Every AI product ultimately needs a web interface. Web development remains the backbone of digital innovation.",
    content: `The technology landscape is evolving faster than ever. Artificial Intelligence is transforming industries, automating workflows, and redefining how software is built. Yet, one thing remains constant: the importance of strong web development fundamentals.

Every AI product, SaaS platform, or modern application ultimately needs an interface — most commonly the web. From dashboards to analytics tools, web technologies remain the most accessible and scalable medium.

Modern web development includes real-time systems, distributed architectures, scalable microservices, and seamless user experiences. Frameworks like React and Next.js enable developers to build highly interactive applications while maintaining performance.

Developers who combine web development with AI, blockchain, and cloud technologies will have a strong competitive advantage. Instead of seeing AI as a replacement, we should see it as an accelerator.`,
    tags: ["Web Dev", "AI", "Future"],
    date: "2026-02-20",
  },
  {
    id: 2,
    title: "React Native vs Native Development: A Practical Perspective",
    summary: "Cross-platform vs native — understanding the trade-offs from real project experience.",
    content: `One of the most debated topics in mobile development is whether to choose native or cross-platform frameworks. React Native has become a strong contender because of its ability to build apps using JavaScript and React.

The biggest advantage of React Native is development speed. Teams can build for both Android and iOS using a single codebase, reducing time to market and costs.

However, for high-performance apps like gaming or heavy real-time processing, native development still offers better control and optimization.

React Native shines in startups, MVPs, and products that need quick iterations. Technology decisions should be driven by business goals rather than trends.`,
    tags: ["React Native", "Mobile", "Architecture"],
    date: "2026-02-15",
  },
  {
    id: 3,
    title: "The Future of AI and Machine Learning for Developers",
    summary: "AI is becoming a core skill. Developers who understand both engineering and AI will shape the next generation.",
    content: `AI and Machine Learning are no longer niche fields — they are becoming core skills for modern developers. Even web and mobile developers are expected to understand how AI can enhance products.

The most exciting aspect is the democratization of AI. With APIs and cloud platforms, developers can integrate advanced capabilities without deep expertise in mathematics.

However, the real value lies in problem-solving. AI should be used where it creates measurable impact, not just because it is trending.`,
    tags: ["AI", "ML", "Developer Skills"],
    date: "2026-02-10",
  },
  {
    id: 4,
    title: "Building Scalable Full Stack Applications",
    summary: "Scalability is about designing systems that evolve with business needs, not just handling traffic.",
    content: `Scalability is not just about handling traffic. It is about designing systems that evolve with business needs. Many developers focus too much on frameworks and not enough on architecture.

A scalable system requires clean code, modular design, and strong backend fundamentals. Technologies like Node.js, microservices, and cloud infrastructure play a crucial role.

Start simple and scale when needed. Overengineering early can slow down development.`,
    tags: ["Full Stack", "Architecture", "Node.js"],
    date: "2026-02-05",
  },
  {
    id: 5,
    title: "Agentic AI: The Next Evolution of Intelligent Systems",
    summary: "From passive models to autonomous decision-making — agents that plan, execute, and adapt.",
    content: `Agentic AI represents a shift from passive models to autonomous decision-making systems. Instead of generating responses, agents can plan, execute, and adapt.

This opens new possibilities in automation, productivity, and enterprise software. Developers will need to design systems that collaborate with AI agents.

The biggest challenge will be governance and reliability.`,
    tags: ["Agentic AI", "Automation", "Future"],
    date: "2026-01-28",
  },
  {
    id: 6,
    title: "Blockchain Beyond Cryptocurrency",
    summary: "Blockchain is a distributed trust infrastructure with applications in supply chain, identity, and more.",
    content: `Blockchain is often misunderstood as just cryptocurrency. In reality, it is a distributed trust infrastructure.

Applications include supply chain, identity verification, and secure data sharing. The future will involve hybrid systems combining blockchain and cloud.`,
    tags: ["Blockchain", "Web3", "Infrastructure"],
    date: "2026-01-20",
  },
  {
    id: 7,
    title: "Why Backend Development is Still Underrated",
    summary: "Backend systems drive performance, scalability, and reliability — the invisible backbone.",
    content: `Many developers focus on frontend because it is visible. But backend systems drive performance, scalability, and reliability.

Understanding databases, caching, and system design creates long-term career value.`,
    tags: ["Backend", "System Design", "Databases"],
    date: "2026-01-15",
  },
  {
    id: 8,
    title: "The Importance of System Design for Developers",
    summary: "System design isn't just for senior engineers — early exposure builds strong architectural thinking.",
    content: `System design is not only for senior engineers. Early exposure builds strong thinking.

It helps in building scalable and maintainable solutions from the start of your career.`,
    tags: ["System Design", "Career", "Architecture"],
    date: "2026-01-10",
  },
  {
    id: 9,
    title: "The Role of Open Source in Career Growth",
    summary: "Open source provides real-world learning, networking, and credibility for developers.",
    content: `Open source provides real-world learning and networking opportunities.

It helps developers build credibility and gain experience working on production-grade codebases.`,
    tags: ["Open Source", "Career", "Community"],
    date: "2026-01-05",
  },
  {
    id: 10,
    title: "How to Stay Relevant in Tech",
    summary: "Continuous learning, strong fundamentals, and adaptability — the only constants in technology.",
    content: `The only constant in technology is change. Continuous learning, strong fundamentals, and adaptability are key.

Focus on problem-solving rather than tools. Build real-world projects and understand business impact.`,
    tags: ["Career", "Learning", "Growth"],
    date: "2025-12-28",
  },
];

const BlogsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 4);

  return (
    <section id="blogs" className="terminal-bg py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-10 sm:mb-16">
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold">
              TECH_<span className="text-terminal-green">BLOGS</span>
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              $ cat ~/thoughts/*.md _
            </span>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <motion.div
                whileHover={{ x: 4 }}
                className="border border-terminal-border p-4 sm:p-6 cursor-pointer group"
                onClick={() =>
                  setExpandedId(expandedId === blog.id ? null : blog.id)
                }
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] text-terminal-green">
                        [{String(blog.id).padStart(2, "0")}]
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="font-sans text-base sm:text-lg font-bold group-hover:text-terminal-green transition-colors">
                      {blog.title}
                    </h3>
                    <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-1">
                      {blog.summary}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: expandedId === blog.id ? 45 : 0 }}
                    className="text-terminal-green font-mono text-xl shrink-0 mt-1"
                  >
                    +
                  </motion.span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-terminal-border font-mono text-[8px] sm:text-[9px] px-2 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {expandedId === blog.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-terminal-border mt-4 pt-4">
                        <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {blog.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {blogs.length > 4 && (
          <AnimatedSection>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border border-terminal-green text-terminal-green font-mono text-xs px-6 py-2 hover:bg-terminal-green hover:text-terminal-dark transition-colors"
              >
                {showAll ? "SHOW_LESS ↑" : `VIEW_ALL (${blogs.length}) →`}
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
