import React, { useState, useMemo } from "react";
import "./App.css";
import { LpNavbar1 } from "./components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection1 } from "./components/pro-blocks/landing-page/hero-sections/hero-section-1";
import { FeaturedPosts } from "./components/sections/featured-posts";
import { FeaturesSection } from "./components/pro-blocks/landing-page/features";
import { CTASection } from "./components/pro-blocks/landing-page/cta-section";
import { BentoGrid1 } from "./components/pro-blocks/landing-page/bento-grids/bento-grid-1";
import { Footer1 } from "./components/pro-blocks/landing-page/footers/footer-1";
import { WritingSection, ProjectsSection, AboutSection, ArchiveSection } from "./components/sections/static-sections";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const handleNavigate = (page) => setActivePage(page);

  const Home = useMemo(
    () => (
      <>
        <HeroSection1 />
        <FeaturedPosts />
        <BentoGrid1 />
        <FeaturesSection />
        <CTASection />
      </>
    ),
    []
  );

  const Page = () => {
    switch (activePage) {
      case "writing":
        return <WritingSection />;
      case "projects":
        return <ProjectsSection />;
      case "about":
        return <AboutSection />;
      case "archive":
        return <ArchiveSection />;
      case "home":
      default:
        return Home;
    }
  };

  return (
    <div className="App">
      <LpNavbar1 variant="none" onNavigate={handleNavigate} />
      <Page />
      <Footer1 />
    </div>
  );
}
