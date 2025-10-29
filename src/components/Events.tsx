import { useState } from "react";
import { X, Calendar, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      title: "Aarohan 2.0 – Robotics Coordinator",
      date: "28th Ashad, 2081 (July 2024)",
      location: "Everest Engineering College, Pokhara University",
      role: "Robotics Coordinator",
      description: "Coordinated the Robotics Segment of Aarohan 2.0, the college's annual tech festival. Managed event logistics, participant engagement, and technical setup for robotics competitions.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Robotics Bootcamp – 2 Days Workshop",
      date: "June 5–6, 2025",
      location: "Everest Engineering College, Pokhara University",
      role: "Organizer",
      description: "Organized a two-day hands-on Robotics Bootcamp introducing 60+ students to Arduino, sensors, and autonomous robot design. Led the workshop sessions and coordinated training materials.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Daydream Biratnagar 2025",
      date: "September 28, 2025",
      location: "Biratnagar, Nepal",
      role: "Organizer",
      description: "Organized Daydream Biratnagar 2025, Asia's biggest teen hackathon fostering innovation among young developers and creators. Collaborated with local partners and managed event coordination.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Events & Activities</span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--nepal-red))] to-[hsl(var(--nepal-blue))] mx-auto mb-16 glow-cyan" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedEvent(index)}
            >
              <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all card-float">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90`} />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      {event.location}
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[hsl(var(--nepal-red))] to-[hsl(var(--nepal-blue))] text-white rounded-full">
                    {event.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-3xl">
            {selectedEvent !== null && (
              <>
                <DialogTitle className="text-2xl font-bold text-gradient mb-4">
                  {events[selectedEvent].title}
                </DialogTitle>
                
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${events[selectedEvent].gradient} opacity-90`} />
                  <img
                    src={events[selectedEvent].image}
                    alt={events[selectedEvent].title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>{events[selectedEvent].date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>{events[selectedEvent].location}</span>
                  </div>

                  <div>
                    <span className="inline-block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[hsl(var(--nepal-red))] to-[hsl(var(--nepal-blue))] text-white rounded-full mb-4">
                      Role: {events[selectedEvent].role}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {events[selectedEvent].description}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Events;
