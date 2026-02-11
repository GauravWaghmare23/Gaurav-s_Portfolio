const navItems = ["/ABOUT", "/SKILLS", "/PROJECTS", "/STATS", "/CONTACT"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("/", "").toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="border border-foreground px-3 py-1 font-mono font-bold text-sm">
          GAURAV.exe
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-mono text-xs px-3 py-1.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              {item}
            </button>
          ))}
          <a
            href="mailto:gauravwaghmare95032@gmail.com"
            className="ml-2 border-2 border-foreground bg-primary text-primary-foreground font-mono text-xs font-bold px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
