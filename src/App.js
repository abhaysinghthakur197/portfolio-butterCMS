// import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Blogs from './components/Blog/Blog'

function App() {
  return (
    <div  className="border border-danger">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
