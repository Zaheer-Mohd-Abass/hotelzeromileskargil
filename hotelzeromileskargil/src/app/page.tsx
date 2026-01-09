import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
