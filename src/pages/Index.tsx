
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToStart from "@/components/HowToStart";
import Servers from "@/components/Servers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowToStart />
      <Servers />
      <Footer />
    </div>
  );
};

export default Index;
