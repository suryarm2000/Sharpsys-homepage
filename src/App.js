import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CtaBand from "./components/sections/CTABand";
import HeroSection from "./components/sections/HeroSection";
import MicrosoftSection from "./components/sections/MicrosoftSection";
import ServicesSection from "./components/sections/ServicesSection";
import TrustBar from "./components/sections/TrustBar";
import WhySharpsys from "./components/sections/WhySharpsys";

function App(){
    return(
        <>
            <Navbar />
            <HeroSection />
            <TrustBar />
            <ServicesSection />
            <WhySharpsys />
            <MicrosoftSection />
            <CtaBand />
            <Footer />
        </>
    )
}

export default App;
