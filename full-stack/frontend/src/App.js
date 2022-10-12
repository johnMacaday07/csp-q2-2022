import Form from "./components/Form";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8888";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
