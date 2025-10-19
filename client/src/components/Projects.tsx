import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping experience with cart management, product filtering, and checkout flow.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "https://github.com/Aashra55/Marketplace-Builder-Hackathon-General-E-Commerce",
      demo: "https://marketplace-builder-hackathon-general-e-commerce-m89l.vercel.app/",
    },
    {
      title: "News Hub App",
      description: "A modern news platform that fetches real-time headlines from multiple sources, featuring category filters, responsive design, and a smooth user experience.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "News API"],
      github: "https://github.com/Aashra55/ReactJS_Projects/tree/main/News-Hub",
      demo: "https://react-js-projects-272x.vercel.app/",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location search, 5-day and hourly forecasts, and beautiful data visualizations with dark and light themes.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
      github: "https://github.com/Aashra55/Elevvo-Pathways-Internship/tree/main/Frontend-Web-Development/Level-3/weather-dashboard",
      demo: "https://elevvo-pathways-internship.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      description: "A responsive admin dashboard for managing users, analytics, and system data — featuring interactive charts, dynamic tables, and dark mode support.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Chart.js", "Redux Toolkit", "Framer Motion"],
      github: "https://github.com/Aashra55/Elevvo-Pathways-Internship/tree/main/Frontend-Web-Development/Level-3/admin-dashboard",
      demo: "https://elevvo-pathways-internship-7aze.vercel.app/profile",
    },
    {
      title: "Food Blogs",
      description: "A beautifully designed food blog built with Next.js, featuring recipe posts, dynamic routing, SEO optimization, and a fully responsive layout for a smooth reading experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      github: "https://github.com/Aashra55/NextJS-Projects/tree/main/food-blog",
      demo: "https://food-blog-delta.vercel.app/",
    },
    {
      title: "Job Tracker App",
      description: "A smart job tracking application that helps users manage and monitor their job applications efficiently — featuring CRUD operations, status filters, search, and an intuitive dashboard.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage", "Framer Motion"],
      github: "https://github.com/Aashra55/Elevvo-Pathways-Internship/tree/main/Frontend-Web-Development/Industry-Level/job-application-tracker",
      demo: "https://elevvo-pathways-internship-25ha.vercel.app/",
    },
    {
      title: "Single Page Blog Website",
      description: "A beautifully designed personal blog built with React.js, featuring tech, travel and food posts, and a fully responsive layout for a smooth reading experience.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Aashra55/Elevvo-Pathways-Internship/tree/main/Frontend-Web-Development/Level-2/personal-blog",
      demo: "https://elevvo-pathways-internship-z4j8.vercel.app/",
    },
    {
      title: "Image Gallery",
      description: "An interactive image gallery featuring smooth lightbox previews. Built with a responsive layout and elegant transitions for a clean visual experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aashra55/CodeAlpha-Frontend-Development-Internship/tree/main/Image%20Gallery",
      demo: "https://imagegallery-jet.vercel.app/",
    },
    {
      title: "Smart Unit Converter",
      description: "An intelligent unit converter powered by NLP that understands natural language queries like 'convert 5 meters to feet' and also supports categories dropdown including currency, temperature, speed, and more, with dark mode and real-time exchange rates.",
      tech: ["Python", "Streamlit", "spaCy", "ExchangeRate API"],
      github: "https://github.com/Aashra55/Python-and-Streamlit-Projects/tree/main/01_Unit_Converter",
      demo: "https://python-projects-wznjv6uhvtmbt5uxe4bdce.streamlit.app/",
    },
    {
      title: "Secure Data Encryption System",
      description: "A powerful encryption and decryption tool that safeguards sensitive information using advanced cryptographic algorithms — featuring a user-friendly Streamlit interface for secure text and file encryption.",
      tech: ["Python", "Streamlit"],
      github: "https://github.com/Aashra55/Python-and-Streamlit-Projects/tree/main/05_Secure%20Data%20Encryption",
      demo: "https://python-projects-myndncjfojyahlv5nqbufq.streamlit.app/",
    },
    {
      title: "AI Chatbot",
      description: "An intelligent conversational assistant powered by Google's Gemini API — designed to generate human-like responses, handle contextual conversations, and provide real-time answers within a clean Streamlit interface.",
      tech: ["Python", "Streamlit", "Gemini API"],
      github: "https://github.com/Aashra55/AI-Chatbot/tree/master",
      demo: "https://ai-chatbot-nm5j66t5l4wrxexkzquqjz.streamlit.app/",
    },
    {
      title: "Sticky Notes App",
      description: "A digital sticky notes application that allows users to create, edit, and organize notes with ease — featuring a clean and modern interface for quick note-taking and management.",
      tech: ["React.js", "JavaScript", "CSS", "MongoDB", "Express.js", "Node.js", "JWT Authentication"],
      github: "https://github.com/Aashra55/ReactJS_Projects/tree/main/Sticky-Notes",
      demo: "https://react-js-projects-pc8o.vercel.app/",
    }
  ];

  // Parent container animation (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // controls how much delay between each card
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in modern web development
          </p>
        </motion.div>

        {/* Grid with staggered animation */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 min-h-[280px]">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

