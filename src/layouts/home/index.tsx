import ComplexNavbar from "components/navbar/home_navbar";
import PresentationSection from "views/Home/presentation";
import BannerSection from "views/Home/banner";
import RequestFormSection from "views/Home/request_form";
import RessourcesSwitcherSection from "views/Home/switcher";
import SecuritySection from "views/Home/security";
import WhyHeriSection from "views/Home/why_heri";
import LinksSection from "views/Home/links";
import Footer from "views/Home/footer";
import { useState, useEffect } from "react";
import ThreeDotesLoader from "components/loaders/ThreeDotesLoader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full bg-lightPrimary dark:!bg-sky-900">
      {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center w-full h-screen bg-white">
            <ThreeDotesLoader />
          </div>
      ) : (
          <div className="h-full scroll-smooth">
            <ComplexNavbar />
            <PresentationSection />
            <BannerSection />
            <RequestFormSection />
            <RessourcesSwitcherSection />
            <SecuritySection />
            <WhyHeriSection />
            <LinksSection />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;