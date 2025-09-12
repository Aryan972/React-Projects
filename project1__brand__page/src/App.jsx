import './App.css' //bad practice to use global css
import Navigation from './components/Navigation';
import HeroSection from './components/Hero';

const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
