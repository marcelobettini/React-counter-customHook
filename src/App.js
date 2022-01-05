import "./App.css";
import Counter from "./components/Counter";

function App() {
  // return <Counter />;
  return <Counter value={23} />; //para chequear PropTypes, inicializamos con value=1
}

export default App;
