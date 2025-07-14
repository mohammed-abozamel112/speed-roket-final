import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
