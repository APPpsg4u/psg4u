import './App.css';
import logo from './images/logo_psg4u.png';
function App() {
  return (
    <div>
      <nav>
      <img src={logo} alt="PSG4U Logo" />
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className = "home">
        <h1>THE STUDENT'S SPACE</h1>
        <i>Where all the needs are met</i>
        <button>Login</button>
      </div>
    
    </div>
  );
}

export default App;
