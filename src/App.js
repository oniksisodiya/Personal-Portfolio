import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Chatbot from './components/Chatbot'; // Adjust the path as needed
//import ImageGallery from './components/ImageGallery';



function App() {
  return (
    <div>
     <NavBar/>
     <Home/>
     <About/> 
     <Skills/>
     <Work/>
     <Contact/>
     <Chatbot />
    </div>
  );
}

export default App;
