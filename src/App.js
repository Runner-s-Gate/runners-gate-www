import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>
          Download game client
        </h1>

        <p>
          Choose your platform:
        </p>

        <a
          className="App-link"
          href="https://runnersgatesa.blob.core.windows.net/release/runners-gate-windows.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          Windows (64 bit .exe)
        </a>

        <a
          className="App-link"
          href="https://runnersgatesa.blob.core.windows.net/release/runners-gate-linux.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          GNU/Linux (Ubuntu, x86_64 executable)
        </a>

        <a
          className="App-link"
          href="https://runnersgatesa.blob.core.windows.net/release/runners-gate-mac.zip"
          target="_blank"
          rel="noopener noreferrer"
        >
          MacOS (.app bundle)
        </a>

        <p>
          Contact: alexander.hjelm@solidify.dev
        </p>

        <a
          className="App-link"
          href="https://github.com/Runner-s-Gate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
