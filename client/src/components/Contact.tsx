import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return false;
    }
    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setForm({ name: "", email: "", message: "" });
  };

  const sendEmail = (serviceId: string, templateId: string) => {
    emailjs
      .send(serviceId, templateId, form, "4pro9uiZiJeNK69-K")
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.");
        clearForm();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong, please try again later.");
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail("service_wo8z5x5", "template_6zilg8q"); // To you
      sendEmail("service_wo8z5x5", "template_u0lcevg"); // To user
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's work together!
            </p>
          </motion.div>

          {/* Form + Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form Animation */}
            <motion.div
              className="bg-card rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="rounded-xl"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="rounded-xl"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="rounded-xl min-h-[120px]"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Animation */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:aashrasaleem99@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        aashrasaleem99@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Aashra55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">@Aashra55</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/aashra-saleem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Aashra Saleem</p>
                    </div>
                  </a>
                </div>
              </div>

              <motion.div
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Open to Opportunities
                </h3>
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and full-time
                  positions. Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
