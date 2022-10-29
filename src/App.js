import "./App.css";
import airbnb from "./assets/airbnb1.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          The Evolution of
          <br />
          Airbnb's Frontend
        </h1>
        <p>@spikebrehm</p>
        <img className="airbnb-logo" alt="airbnb-logo" src={airbnb} />
      </header>
    </div>
  );
}

export default App;
