import { useState } from "react";
import axios from "axios";

function App() {
  const [output, setOutput] = useState("");

  const runCode = async () => {
    const res = await axios.post("http://localhost:5000/run");
    setOutput(res.data.output);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Code Editor</h1>

      <button onClick={runCode}>
        Run Code
      </button>

      <h2>Output:</h2>
      <p>{output}</p>
    </div>
  );
}

export default App;