import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import About from "@/components/About";
import LocationAdvantage from "@/components/LocationAdvantage";
import FloorPlans from "@/components/FloorPlans";
import Amenties from "@/components/Amenties";
import Specifications from "@/components/Specifications";
import Gallery from "@/components/Gallery";
import AboutKG from "@/components/AboutKG";
import Contact from "@/components/Contact";
export default function Home() {
  return (
   <>
    <HeroSection/>
    <Amenties/>
    <About/>
    <LocationAdvantage/>
    <FloorPlans/>
    
    <Specifications/>
    <Gallery/>
    <AboutKG/>
    <Contact/>
   </>
  );
}
