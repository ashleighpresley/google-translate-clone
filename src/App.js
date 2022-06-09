import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="app">
      <TextBox style={`input`} />
      <TextBox style={`output`} />
    </div>
  );
}

export default App;
