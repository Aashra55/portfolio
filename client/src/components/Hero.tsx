import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "../assets/hero-background.jpg";
import Typed from "typed.js";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Frontend Web Developer", "Agentic AI Developer"],
      typeSpeed: 120,
      backSpeed: 50,
      loop: true,
      showCursor: false
    });

    return () => typed.destroy();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
  variants={{
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Aashra Saleem
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            💻 <span className="auto-type" />
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Crafting clean UIs with modern code
          </motion.p>

<motion.div
  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
>
  {/* View Projects Button */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
    <Button
      variant="hero"
      size="lg"
      onClick={() => scrollToSection("projects")}
      className="group relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center">
        View Projects
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.4 }}
      />
    </Button>
  </motion.div>

  {/* Contact Me Button — outline + subtle gray hover */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
    <Button
      variant="outline"
      size="lg"
      onClick={() => scrollToSection("contact")}
      className="relative overflow-hidden border-primary text-primary bg-transparent hover:bg-muted hover:shadow-md hover:text-primary transition-colors duration-300"
    >
      <span className="relative z-10 flex items-center">
        Contact Me
        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
      </span>
    </Button>
  </motion.div>
</motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
