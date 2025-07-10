import "./App.css";
function App() {
  return (
    <main>
      <img
        src="src\assets\images\react-icon-small.png"
        width="40px"
        alt="React Logo"
      />
      <h1> Fun facts about React!</h1>
      <ul>
        <li>Was first created in 2013</li>
        <li>Was orignally created by Jordan Walke</li>
        <li>Has well over 100k stars on github</li>
        <li>is maintained by facebook</li>
        <li>Powers thousands of enterprise apps including mobile apps</li>
        <li>It gives you high paying jobs</li>
      </ul>
    </main>
  );
}

export default App;

/*
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <main>
        <img src='react-logo.png' width='40px'/>
        <h1> Fun facts about React!</h1>
        <ul>
            <li>Was first created in 2013</li>
            <li>Was orignally created by Jordan Walke</li>
            <li>Has well over 100k stars on github</li>
            <li>is maintained by facebook</li>
            <li>Powers thousands of enterprise apps including mobile apps</li>
            <li>It gives you high paying jobs</li>
        </ul>
    </main>
);
*/
