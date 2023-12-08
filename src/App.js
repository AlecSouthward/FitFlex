import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Admin from './components/Admin'
import NoPage from './components/NoPage'

import './CSS/Footer.css'
import './CSS/Navbar.css'

const API_URL = process.env.API_URL || 'http://localhost:8080'

// Component for the Navbar
const Nav = () => {
  const [user, setUser] = useState('')

  fetch(`${API_URL}/api/users/${localStorage.getItem('user')}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => setUser(data[0].name))
    .catch(err => console.log(err));

  return (
    <div>
      <nav className="container">
        <img src="/Icon.png" alt="Logo" />

        <h2>{!user ? '' : `Welcome, ${user}!`}</h2>

        <ul className="navbar">
          {/* Nav button for Home */}
          <li className="nav-item">
            <Link to="/"><p>Home</p></Link>
          </li>

          {/* Nav button for About */}
          <li className="nav-item">
            <Link to="/about"><p>About</p></Link>
          </li>

          {/* Nav button for Contact */}
          <li className="nav-item">
            <Link to="/contact_us"><p>Contact</p></Link>
          </li>

          {/* Nav button for Products */}
          <li className="nav-item">
            <Link to="/products"><p>Products</p></Link>
          </li>

          {/* Displays SignUp button if the 
        user is not logged in, if the user IS logged in
        then display the SignOut button */}
          {!user ?
            <li className="nav-item">
              {/* Nav button for Sign Up */}
              <Link to="/signup"><p>Sign Up</p></Link>
            </li>
            :
            <li className="nav-item">
              {/* Nav button for Sign Out */}
              <Link to="/signin"><p>Sign Out</p></Link>
            </li>
          }

          {/* Displays SignIn button if the 
        user is not logged in, if the user IS logged in
        then display nothing */}
          {!user ?
            <li className="nav-item">
              {/* Nav button for Sign In */}
              <Link to="/signin"><p>Sign In</p></Link>
            </li>
            : ''
          }

          {/* If the user is an admin, display the Admin button */}
          {localStorage.getItem('perms') == 1 ?
            <li className="nav-item">
              <Link to="/admin"><p>Admin</p></Link>
            </li> : ''}
        </ul>
      </nav>
    </div>
  );
};

// Component for the Footer
const Footer = () => (
  // Styling to stick the footer 
  // at the bottom of the page
  <div className='footer-styling'>

    <p>Copyright 2023 ©</p>
  </div>
);

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        {/* Route for the home component */}
        <Route exact path='' element={<Home />} />

        {/* Route for the about component */}
        <Route path="about" element={<About />} />

        {/* Route for the contact component */}
        <Route path="contact_us" element={<Contact />} />

        {/* Route for the contact component */}
        <Route path="products" element={<Products />} />

        {/* Route for the login component */}
        <Route path="signin" element={<SignIn />} />

        {/* Route for the login component */}
        <Route path="signup" element={<SignUp />} />

        {/* Route for the login component */}
        <Route path="admin" element={<Admin />} />

        {/* Route for urls that are not recognized */}
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
