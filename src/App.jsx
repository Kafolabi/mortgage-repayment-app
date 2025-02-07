/**
 * The main App component that renders the mortgage repayment calculator and results.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * return (
 *   <App />
 * )
 */
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./components/calculator";
import Results from "./components/results";
import retrieveCurrencyData from "./helpers/retrieveCurrencyData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="mx-20 min-w-fit h-full flex my-16 max-md:mx-0 max-md:my-0">
      <section className="flex flex-col md:flex-row h-full relative">
        <div className="absolute inset-0 bg-white md:rounded-tl-3xl md:rounded-bl-3xl overflow-hidden">
          <div className="w-1/2 h-full bg-main md:rounded-bl-[6rem] md:rounded-tl-3xl absolute right-0"></div>
        </div>
        <Calculator />
        {/* <Results /> */}
      </section>
    </section>
    //    <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  );
}

export default App;
