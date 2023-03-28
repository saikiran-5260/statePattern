import "./App.css";
import Ball from "./Ball";
import Lottery from "./Lottery.js";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="MiniLotto" maxBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
