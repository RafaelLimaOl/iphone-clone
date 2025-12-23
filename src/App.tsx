import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import HowItWorks from "./components/howItWorks";
import IPhoneModel from "./components/iPhoneModel";
import Navbar from "./components/navbar";
import "./index.css";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <IPhoneModel />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default App;
