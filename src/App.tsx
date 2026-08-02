import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer.tsx";

function App() {

  return (

    <>

      <Navbar />


      <main>

        <section id="home">
          <Hero />
        </section>


        <section id="projects">
          <Projects />
        </section>


        <section id="contact">
          <Contact />
        </section>

        <Footer/>


      </main>


    </>

  );

}


export default App;