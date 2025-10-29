import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Weather Station Dashboard",
      description: "Real-time weather monitoring using MQTT protocol with environmental sensor data display",
      tags: ["IoT", "MQTT", "ESP8266", "Dashboard"],
      github: "https://github.com/Prazzzcode/Weather-station-dash-mqtt",
      category: "iot",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Motion Distance Detection Control",
      description: "Web-based IoT dashboard for motion detection, distance measurement, and LED control",
      tags: ["IoT", "Sensors", "Web Dashboard", "Arduino"],
      github: "https://github.com/Prazzzcode/Motion-distance-detection-control",
      category: "iot",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "MindEase - Mental Health App",
      description: "Thoughtfully designed UI for mental well-being with relaxation tools and professional support",
      tags: ["UI/UX", "Figma", "Mobile Design"],
      github: "https://github.com/Prazzzcode/MindEase-Mental-Health-App-UI",
      category: "design",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Roam Wallet Design",
      description: "Nepali-currency virtual wallet app for tourists with multi-currency support and QR payments",
      tags: ["UI/UX", "Fintech", "Mobile App"],
      github: "https://github.com/Prazzzcode/Roam-Wallet-Design",
      category: "design",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "PrazzChat Ultra",
      description: "Anonymous, end-to-end encrypted real-time chat platform with secure messaging",
      tags: ["MERN", "WebSocket", "Encryption", "Chat"],
      github: "https://github.com/Prazzzcode/PrazzzChat--Ultra",
      category: "web",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">My Projects</span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--nepal-red))] to-[hsl(var(--nepal-blue))] mx-auto mb-16 glow-cyan" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all card-float animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
