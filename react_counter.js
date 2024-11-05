import { useState } from "react"; //allow us to use states
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0); //using object destructuring
  //whenever there is a "use" as prefix then it's called a hook
useEffect(()=>{alert('You have set the counter into' + counter)},[counter])
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
