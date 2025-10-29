import { ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--nepal-red))] to-[hsl(var(--nepal-blue))] rounded-2xl blur-xl opacity-30 animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Prazol Luitel"
              className="relative rounded-2xl w-full shadow-2xl border-2 border-accent/50"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer and innovator based in{" "}
              <span className="text-accent font-semibold">Sanepa, Lalitpur</span>. 
              I specialize in full-stack development, IoT systems, robotics, and UI/UX design.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in the <span className="text-accent font-semibold">MERN stack</span>, 
              embedded systems, and creative design tools, I bring ideas to life through technology. 
              I've organized major tech events including Asia's Biggest Teen Hackathon and led robotics workshops.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Portfolio Links</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Prazzzcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.facebook.com/share/1B1ySS6Vzu/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
