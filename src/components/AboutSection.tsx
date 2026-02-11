import avatar from "@/assets/avatar.png";

const AboutSection = () => {
  return (
    <section id="about" className="grid-bg py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <div className="border-2 border-foreground p-2 bg-card relative max-w-sm mx-auto md:mx-0">
          <span className="absolute top-2 left-4 bg-destructive text-destructive-foreground font-mono text-[10px] px-2 py-0.5 font-bold">
            AVATAR.JPG
          </span>
          <img src={avatar} alt="Gaurav Waghmare" className="w-full grayscale" />
        </div>

        {/* Bio */}
        <div>
          <h2 className="font-sans text-5xl md:text-6xl font-bold mb-6">WHO AM I?</h2>
          <p className="font-mono text-sm leading-relaxed mb-6">
            I am Gaurav Waghmare. A full-stack developer and 3rd-year B.Tech CSE student who
            believes the web has become too sanitized. I bring{" "}
            <span className="highlight-yellow font-bold">personality</span> back to code.
          </p>
          <div className="border-l-2 border-foreground pl-4 space-y-1 font-mono text-sm mb-8">
            <p>&gt; Specialized in MERN Stack & AI-powered Web Apps.</p>
            <p>&gt; Google Gemini Student Ambassador.</p>
            <p>&gt; Hackathon Development Lead & Co-organiser.</p>
            <p>&gt; Building an AI-powered Browser IDE.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="border-2 border-foreground bg-primary text-primary-foreground font-mono text-xs font-bold px-4 py-1.5">
              📍 LOCATION: NAGPUR, INDIA
            </span>
            <span className="border-2 border-foreground bg-accent text-accent-foreground font-mono text-xs font-bold px-4 py-1.5">
              💚 STATUS: AVAILABLE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
