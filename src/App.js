import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CtaBand from "./components/sections/CTABand";
import HeroSection from "./components/sections/HeroSection";
import ProductsSection from "./components/sections/ProductsSection";
import ServicesSection from "./components/sections/ServicesSection";
import TrustBar from "./components/sections/TrustBar";
import WhySharpsys from "./components/sections/WhySharpsys";

function App(){
    return(
        <>
            <Navbar />
            <HeroSection />
            <TrustBar />
            <ProductsSection />
            <ServicesSection />
            <WhySharpsys />
            <CtaBand />
            <Footer />
        </>
    )
}

export default App;
