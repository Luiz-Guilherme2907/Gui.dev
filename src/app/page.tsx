import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StackMarquee from "@/components/StackMarquee";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StackMarquee />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
