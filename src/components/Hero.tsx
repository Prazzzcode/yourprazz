import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Facebook, Instagram, Github } from "lucide-react";
import * as THREE from "three";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00E5FF,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/share/1B1ySS6Vzu/", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/prazzzz_10/", label: "Instagram" },
    { icon: Github, url: "https://github.com/Prazzzcode", label: "GitHub" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Floating blurred circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--nepal-red))] rounded-full blur-[120px] opacity-20 animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--nepal-blue))] rounded-full blur-[120px] opacity-20 animate-float" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-15 animate-float-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient inline-block animate-float">
                Prazol
              </span>{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Hi I'm <span className="text-accent font-semibold">Prazol Luitel</span>. I'm 21 years old. 
              I live in <span className="text-accent font-semibold">Sanepa-02, Lalitpur</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                variant="gradient" 
                size="lg" 
                className="text-base px-8 py-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                CONTACT ME
              </Button>
              <Button 
                variant="gradientOutline" 
                size="lg" 
                className="text-base px-8 py-6"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                LET'S TALK
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all hover:scale-110 glow-cyan"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
