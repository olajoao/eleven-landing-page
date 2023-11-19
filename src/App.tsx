import { Banner } from "./components/Banner";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Prices } from "./components/Prices";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <>
      <main className="container mx-auto px-5 2xl:px-0">
        <Header />
        <Hero />
        <Clients />
        <Description />
        <Services />
        <Banner />
        <Prices />
      </main>
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
