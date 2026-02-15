import './App.css';
import Awards from './components/awards';
import Education from './components/education';
import Experience from './components/experince';
import Home from './components/home';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';
import Contact from './components/contact';
import Summary from './components/summary';
import Hobbies from './components/hobbie';

function App() {
  return (
    <div className="App">
      <Home/>
      <Summary/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Awards/>
      <Hobbies/>
      <Contact/>
      <Footer/>
      
    
    </div>
  );
}

export default App;
