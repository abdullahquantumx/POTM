// App.jsx
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans advanced-gradient">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="tech">
        <TechStack />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Footer />
    </div>
  );
};

export default App;