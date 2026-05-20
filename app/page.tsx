import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Feature  from "./components/Feature";
import Screens from "./components/Screens";
import Footer from "./components/Footer";
import Updates from "./components/Updates";
import Video from "./components/Video";

 
export default function Home() {
  return (
    <main className="bg-[#111010] text-[#F7F6F2] min-h-screen">
      <Navbar />
      <Hero />
      <Feature />
      <Screens />
      <Video />
      <Updates />
      <Footer />

    </main>
  );
}
 