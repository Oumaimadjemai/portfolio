
import Navigation from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import Contact from "./components/Contacts"
import MainComponent from "./components/Main";
import AboutComponent from "./components/About";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50">
      <Navigation/>
      <div>
        <MainComponent/>
        <AboutComponent/>
        <Skills/>
        <Projects/>
        <Contact/>
         <footer className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white py-8 text-center">
        <p>&copy; 2025 Djemai Oumima. All rights reserved.</p>
      </footer>
        
      </div>
    </div>
  );
}
