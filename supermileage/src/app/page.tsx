import Footer from "components/Footer";
import Hero from "components/Hero";
import About from "components/About";
import Cars from "components/Cars";
import Sponsors from "components/Sponsors";


export default function Home() {

  return (
    <div>
      <Hero/>
      <section>
        <main id="main">
          <section id="start" className="page-section py-20">
            <About />
          </section>

          <section id="cars">
            <Cars />
          </section>

          <section id="sponsors">
            <Sponsors />
          </section>
        </main>
      </section>
      <Footer/>
    </div>
  );
};