/**
 * The main App component that renders the mortgage repayment calculator.
 *
 * This component sets up the layout and styling for the application, including
 * a responsive design that adjusts for different screen sizes.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * return (
 *   <App />
 * )
 */
import "./App.css";
import Calculator from "./components/Calculator.jsx";

function App() {
  return (
    <>
      <section className="mx-20 min-w-fit h-full flex mt-16 max-md:mx-0 max-md:my-0">
        <section className="flex flex-col md:flex-row h-full relative">
          <div className="absolute inset-0 bg-white md:rounded-tl-3xl md:rounded-bl-3xl overflow-hidden">
            <div className="w-1/2 h-full bg-main md:rounded-bl-[6rem] md:rounded-tl-3xl absolute right-0"></div>
          </div>
          <Calculator />
        </section>
      </section>

      <div className="attribution mt-2">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Kafolabi/mortgage-repayment-app">
          Kolade Afolabi
        </a>
        .
      </div>
      <footer className="mt-8">
        <p>© 2025 Kolade Afolabi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
