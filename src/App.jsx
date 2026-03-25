import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import Statistics from "./components/Statistics";
import TrustSection from "./components/TrustSection";
import RoleHighlights from "./components/RoleHighlights";
import Products from "./components/Products";
import CaseStudy from "./components/CaseStudy";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="bg-black text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Statistics />
      <TrustSection />
      <RoleHighlights />
      <Products />
      <CaseStudy />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;