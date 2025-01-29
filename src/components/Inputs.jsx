import { useState, useEffect } from "react";
import { KEY } from "../constants";

const Inputs = ({ labels, placeholders, currencies, state = true }) => {
  const [rate, setRate] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    const value = event.target.previousElementSibling.value;
    setRate(value === "" ? "" : value * 2); // ✅ Allow empty string, otherwise store as string

    // console.log(rate);
  };

  useEffect(() => {
    const retrieveCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${KEY}&symbols=USD,EUR,CAD&base=GBP`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };
    retrieveCurrencyData();
  }, []);

  return (
    <div className="flex-1 relative overflow-visible">
      <label
        htmlFor={labels}
        className="block text-sm font-medium text-gray-700 text-left"
      >
        {labels}
      </label>
      <input
        value={rate} // ✅ Uses `rate` state
        type="number"
        id={labels}
        name={labels}
        onChange={(e) => setRate(e.target.value)}
        className={`inline peer placeholder-transparent ${state && "pl-12"} 
         font-bold h-10 mb-5 mt-1 w-full px-3 py-2 pr-12 border border-slate-400 rounded-md focus:outline-none focus:border-${
           state ? "lime" : "bg-slate-600"
         } sm:text-sm`}
      />

      {/* <select
          className="absolute inset-y-0 left-0 h-10 pl-2 pr-8 border border-slate-400 rounded-md focus:outline-none focus:border-lime sm:text-sm"
          onChange={(e) => setRate(e.target.value)}
        >
          <option value="">Select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>  */}

      {/* <select
        id="price"
        className={`bg-${
          state ? "lime" : "main"
        } btn-bottom absolute flex items-center justify-center inset-y-0 h-10 px-4 rounded-${
          state ? "s" : "e"
        }-md text-sm hover:cursor-pointer focus:cursor-pointer font-bold text-gray-700 ${
          !state && "right-0"
        }`}
        onClick={handleInputChange} // ✅ Correctly passes `event`
      >
        {console.log(currencies)}
        {currencies.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))} */}
      {/* {console.log(placeholders)} */}
      {/* {placeholders.map(curr) => (
        <option value=""> {placeholders}</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        ))} */}
      {/* </select> */}
    </div>
  );
};

export default Inputs;
