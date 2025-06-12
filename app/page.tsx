
import FullPageCarousel from "@/components/FullPageCarousel";
import ToppersCarousel from "@/components/ToppersCarousel";
import Contact from "@/components/Contact";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="home">
      
      <FullPageCarousel />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Toppers</h2>
        <ToppersCarousel />
        <VideoSection />
        <Contact />
      </div>
    </div>
  );
}
