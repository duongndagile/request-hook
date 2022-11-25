import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useRequest } from "./utils/requestHook";

function App() {
  const [count, setCount] = useState(0);

  const { data, error, run } = useRequest("/posts", true);
  const handleGetPosts = () => {
    run();
  };
  console.log(data, error);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React OK</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={handleGetPosts}>Get Posts</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
