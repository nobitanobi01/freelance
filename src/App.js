import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTopButton';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div id='experience'>
        <Experience />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <ScrollToTopButton />
      <Footer />

    </>
  );
}

export default App;
