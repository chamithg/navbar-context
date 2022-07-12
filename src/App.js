import "./App.css";
import { useGlobalContext, AppProvider } from "./Context";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
    </div>
  );
}

export default App;
