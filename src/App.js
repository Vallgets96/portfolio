
import About from './Component/About/About';
import Contact from './Component/Contactme/Contact';
import Eduction from './Component/Education/Education';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Numbers from './Component/Numbers/Numbers';
import Projects from './Component/Projects/Projects';
import Services from './Component/Services/Services';
import Skills from './Component/Skills/Skills';
import Freelancing from './Freelancing/Freelancing';
import "./index.css"
function App() {
  return (
    <div  className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Eduction/>
      <Services/>
      <Skills/>
      <Projects/>
      <Numbers/>
      <Freelancing/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
