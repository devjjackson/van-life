import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans"  element={<Vans/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

const Nav = () => {
  
  const [activePage, setActivePage] = React.useState("");
  console.log(activePage);
  
  const handlePageChange = (pageName) => {
    setActivePage(pageName)
  }
  return (
    <nav>
      <div>
        <Link className="bold" to="/" onClick={() => handlePageChange("")}>#VANLIFE</Link>
      </div>
      <div>
        <ul>
          <li><Link to="/about" onClick={() => handlePageChange("about")} className={activePage==="about" ? "active" : ""}>About</Link></li>
          <li><Link to="/vans" onClick={() => handlePageChange("vans")} className={activePage==="vans" ? "active" : ""}>Vans</Link></li>
        </ul>
      </div>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer>Ⓒ 2022 #VANLIFE</footer>
  )
}

const Home = () => {
  return (
    <main className="home">
      <h1>You got the travel plans, we got the travel vans</h1>
      <p>
        Add adventure to your life by joining the #VanLife movement.
      </p>
      <p>
        Rent the perfect van to make your perfect roadtrip.
      </p>
      <Link to="/vans"><button>Find your van</button></Link>
    </main>
  )
}

const About = () => {
  return (
    
    <main className="about">
      <div className="hero"></div>
      <div className="content">
        <h1>Don't squeeze in a sedan when you could relax in a van</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br/>(Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
      </div>
    </main>
    
  )
  
}

const Vans = () => {
  <>Vans</>
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);