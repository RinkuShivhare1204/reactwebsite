import './App.css';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/AboutMe/About';
import MyResume from './PortfolioContainer/Resume/MyResume';
import Testimonials from './PortfolioContainer/Testimonial/Reviews';
import ContactMe from './PortfolioContainer/Contact/ContactMe'

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <MyResume/>
      <Testimonials/>
      <ContactMe/>
    </div>
  );
}

export default App;
