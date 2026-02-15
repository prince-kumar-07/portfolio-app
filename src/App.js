import './App.css';
import { Routes, Route } from "react-router-dom";

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

import AllProjects from './components/AllProjects';


function MainPage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>

    </div>
  );
}

export default App;
