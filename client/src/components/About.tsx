import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Vite",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "BootStrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Python",
    "Streamlit",
    "Agentic AI",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Clean Code",
                text: "Writing maintainable and scalable solutions",
                delay: 0,
              },
              {
                icon: <Palette className="w-8 h-8 text-primary" />,
                title: "Design Focus",
                text: "Creating beautiful and intuitive interfaces",
                delay: 0.15,
              },
              {
                icon: <Sparkles className="w-8 h-8 text-primary" />,
                title: "User-Centric",
                text: "Prioritizing seamless user experiences",
                delay: 0.3,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl bg-card hover:shadow-xl shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* About Text */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Hi there! I'm{" "}
              <span className="text-primary font-semibold">Aashra</span>, a
              passionate frontend developer who loves turning ideas into
              beautiful, functional web experiences. With a strong foundation in
              modern web technologies, I specialize in building responsive,
              user-friendly applications that not only look great but perform
              seamlessly. Whether it's crafting pixel-perfect UIs or optimizing
              for the best user experience, I'm always excited to take on new
              challenges and learn along the way.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">
                Skills & Technologies
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
