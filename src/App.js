import { createContext, useState } from "react";
import { Counter } from "./components/Counter";
import Test from "./components/Test";

export const CounterContext = createContext({
  count: 0,
  setCount: () => null,
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CounterContext.Provider value={{ count, setCount }}>
        <Counter />
        <Test />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
