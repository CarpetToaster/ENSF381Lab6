import logo from './logo.svg';
import './App.css';
import Contact from './Contact.js'
import Home from './Home.js'
import About from './About.js'


function App() {

  var currentyear = Date().split(" ")[3]
  console.log(currentyear)

  var isLoggedIn = true

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentyear}</p>
      <p>{isLoggedIn ? "Welcome back!":"Please log in"}</p>
      <div>''
        <Home title = "Home page" desc="Welcome to our website" />
        <About title = "About page" desc="We are passionate about delivering quality experiences"/>
        <Contact title = "Contact Page" desc="Feel free to reach out to us via email or phone"/>
      </div>
    </div>
  );
}

export default App;
