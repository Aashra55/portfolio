import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Aashra Saleem
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
