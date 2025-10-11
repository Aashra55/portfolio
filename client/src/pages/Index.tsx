import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ChatBubble } from "../components/ChatBubble";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
