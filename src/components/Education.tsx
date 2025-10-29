import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor",
      institution: "Everest Engineering College",
      period: "Present",
      status: "current"
    },
    {
      degree: "Higher Secondary Education (Class 11-12)",
      institution: "Arniko College",
      period: "2019-2021",
    },
    {
      degree: "Secondary Education (Class 8-10)",
      institution: "Green Peace Academy",
      period: "2016-2019",
    },
    {
      degree: "Primary & Lower Secondary (Class 1-7)",
      institution: "Mahendra Memorial Secondary",
      period: "2009-2016",
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--nepal-red))] via-accent to-[hsl(var(--nepal-blue))]" />

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-all card-float">
                      {edu.status === "current" && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[hsl(var(--nepal-red))] to-[hsl(var(--nepal-blue))] text-white rounded-full mb-3">
                          Current
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-accent font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-card rounded-full border-4 border-accent flex items-center justify-center shadow-lg z-10 glow-cyan">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
