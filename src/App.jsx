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
import Calculator from "./components/calculator";

function App() {
  return (
    <section className="mx-20 min-w-fit h-full flex my-16 max-md:mx-0 max-md:my-0">
      <section className="flex flex-col md:flex-row h-full relative">
        <div className="absolute inset-0 bg-white md:rounded-tl-3xl md:rounded-bl-3xl overflow-hidden">
          <div className="w-1/2 h-full bg-main md:rounded-bl-[6rem] md:rounded-tl-3xl absolute right-0"></div>
        </div>
        <Calculator />
      </section>
    </section>
  );
}

export default App;
