import Navigation from "./components/Navigation/Navigation";
import './App.css' 
import Contact from "./components/ContactHeader/Contact";
import ContactForm from "./components/ContactForm/ContactForm";

const App =()=>{
  return(<div>
    <Navigation/>

    <main className="main_container">
      <Contact />
      <ContactForm/>
    </main>

  </div>)
}

export default App;