import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  return (
    <>
      <header className="d-flex justify-content-between align-items-center">
        <h1>Contacts</h1>
        <Link className="text-dark" to="/new">Add new contact</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/new" element={<ContactForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
