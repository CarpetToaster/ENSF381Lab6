import logo from './logo.svg';
import './App.css';
import EngineeringTopics from './EngineeringTopics';

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
      <EngineeringTopics></EngineeringTopics>
    </div>
  );
}

export default App;
