import './App.css';
import './component/dropdown.css'
import "./component/form.css"
import "./component/home.css"
import "./component/mobile.css"
import "./component/about.css"
import "./component/footer.css"
import Home from './component/home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from './component/about';
import Contact from './component/contact';
import Form from './component/form';
import Mobile from './component/mobile';
// import DropDown from './component/dropdown';

function App() {

  const myFunction = () => {
    document.querySelector("#nav").classList.toggle("show");
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <div className='toggle-btn' onClick={myFunction}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='logo'>
            <h1>Heaven's</h1>
          </div>
          <nav id='nav'>
            <ul>
              <li><Link to="/" className='nav-item'>Home</Link></li>
              <li><Link to="/about" className='nav-item'>About</Link></li>
              {/* <li><Link to="/contact" className='nav-item'>Contact</Link></li> */}
              <li><Link to="/form" className='nav-item'>Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path="/mobile" element={<Mobile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
