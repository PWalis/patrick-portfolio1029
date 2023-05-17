import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import Header from "./components/Header";
import SectionOne from "./components/landingPage/SectionOne";
import SectionTwo from "./components/landingPage/SectionTwo";

function App() {
  return (
    <>
      <Header></Header>
      <SectionOne />
      <SectionTwo />
      <ContactForm />
    </>
  );
}

export default App;
