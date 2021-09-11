
import ContactForm from "./Components/ContactForm";
import Container from "./Components/Container";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import s from "./App.module.css";


function App() {
  
    return (
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }

export default App;

