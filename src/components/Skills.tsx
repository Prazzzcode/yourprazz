import { useEffect, useState } from "react";
import { Code, Cpu, Palette } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Tech & Development",
      icon: Code,
      skills: [
        { name: "HTML", level: 90, gradient: "from-orange-500 to-red-500" },
        { name: "CSS / Tailwind", level: 80, gradient: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 75, gradient: "from-yellow-500 to-orange-500" },
        { name: "React (MERN)", level: 85, gradient: "from-blue-400 to-cyan-400" },
        { name: "Node.js / Express", level: 80, gradient: "from-green-500 to-emerald-500" },
        { name: "MongoDB", level: 75, gradient: "from-green-600 to-green-400" },
      ]
    },
    {
      title: "Robotics & IoT",
      icon: Cpu,
      skills: [
        { name: "IoT Systems (ESP8266/ESP32)", level: 95, gradient: "from-purple-500 to-pink-500" },
        { name: "Robotics (Arduino)", level: 90, gradient: "from-cyan-500 to-blue-500" },
        { name: "Embedded Programming", level: 80, gradient: "from-indigo-500 to-purple-500" },
        { name: "Python", level: 60, gradient: "from-blue-600 to-yellow-400" },
        { name: "NodeRed", level: 80, gradient: "from-red-500 to-red-400" },
      ]
    },
    {
      title: "Design & Creative",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 90, gradient: "from-pink-500 to-rose-500" },
        { name: "Graphic Design", level: 85, gradient: "from-purple-500 to-pink-500" },
        { name: "Motion Graphics", level: 80, gradient: "from-orange-500 to-pink-500" },
        { name: "Git & GitHub", level: 85, gradient: "from-gray-600 to-gray-400" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Skills</span>
        </h2>

        <div className="max-w-7xl mx-auto space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <category.icon className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-gradient-reverse">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all card-float"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-accent font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
