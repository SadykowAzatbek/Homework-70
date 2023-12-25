import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import ContactForm from './components/ContactForm/ContactForm';
import Home from './components/Home/Home';

function App() {

  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <h1>Contacts</h1>
        <Link className="text-dark" to="/new">Add new contact</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactForm />} />
          <Route path="*" element={<h2>Not found!</h2>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
