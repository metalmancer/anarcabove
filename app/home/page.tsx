import HeroCarousel from "@/components/HeroCarousel";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "var(--stone)" }}>
      <HeroCarousel />
      <HomeContent />
    </main>
  );
}
