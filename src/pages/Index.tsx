import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Film, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Cinematic background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="text-center relative z-10 px-4">
        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
          <Film className="w-16 h-16 text-primary" />
        </div>
        <h1 className="mb-6 text-6xl font-bold text-foreground">
          Film Studio Admin
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional content management platform for filmmakers and creative studios
        </p>
        <Button 
          size="lg" 
          onClick={() => navigate("/login")}
          className="group"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
