import { useState, useEffect } from "react";
import { KEY } from "../constants";
import ErrorMessage from "./ErrorMessage";

const Inputs = ({ labels, errors, placeholders, state = true }) => {
  const [mortgageAmount, setMortgageAmount] = useState(""); // Default amount in base currency
  const [currency, setCurrency] = useState("GBP"); // Selected currency (acts as base currency)
  const [convertedAmount, setConvertedAmount] = useState(""); // Amount in the new base currency
  const [currencyRates, setCurrencyRates] = useState({ GBP: 1 }); // Fetched currency rates
  const [loading, setLoading] = useState(true); // Loading state for API call

  // Fetch currency rates from an API whenever the base currency changes
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = KEY;
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`
        );
        const data = await response.json();
        if (data.result === "success") {
          setCurrencyRates(data.conversion_rates);
        } else {
          console.error("Failed to fetch currency rates:", data.error);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [currency]); // Re-fetch rates when the selected currency changes

  // Handle currency change
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    // Convert the mortgage amount to the new base currency
    const newAmount = (mortgageAmount * currencyRates[newCurrency]).toFixed(2);
    setCurrency(newCurrency); // Update the base currency
    setConvertedAmount(newAmount); // Update the displayed amount
  };

  // Handle mortgage amount change
  const handleAmountChange = (e) => {
    const newAmount = e.target.value;
    // Convert the input value back to the base currency
    const baseAmount = newAmount / currencyRates[currency];
    setMortgageAmount(baseAmount); // Store the base amount
    setConvertedAmount(newAmount); // Update the displayed amount
  };

  if (loading) {
    console.log("Loading ...");
  }

  return (
    <>
      <div className="flex-1 relative overflow-visible">
        <label
          htmlFor={labels}
          className="block text-sm font-medium text-gray-700 text-left"
        >
          {labels}
        </label>
        <div className="relative">
          <input
            value={convertedAmount} // Ensure this is a number (no currency symbol)
            type="number" // Input type must be "number"
            id={labels}
            name={labels}
            onChange={handleAmountChange}
            className={`inline peer placeholder-transparent ${state && "pl-12"}
           font-bold h-10 mb-5 mt-1 w-full px-3 py-2 pr-12 border border-slate-400 rounded-md focus:outline-none focus:border-${
             state ? "lime" : "bg-slate-600"
           } sm:text-sm ${errors ? "border-red" : "border-gray-300"}`}
          />
          {state && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700">
              {currency === "GBP"
                ? "£"
                : currency === "USD"
                ? "$"
                : currency === "EUR"
                ? "€"
                : "₦"}
            </span>
          )}
        </div>
        {errors && (
          <p className="text-sm text-left text-red mt-[-0.7rem] mb-5">
            {errors}
          </p>
        )}
        {state ? (
          <select
            id="currency"
            className={`types bg-${state ? "lime" : "main"} ${
              errors && "bg-red"
            } ${errors && "text-white"} ${
              state ? "btn-bottom" : "btn-bottom3"
            } absolute flex items-center focus:outline-none justify-center inset-y-0 h-10 px-1 rounded-${
              state ? "s" : "e"
            }-md text-sm hover:cursor-pointer focus:cursor-pointer font-bold text-gray-700 ${
              !state && "right-0"
            }`}
            onChange={handleCurrencyChange} // Use onChange instead of onClick
          >
            <option value="GBP">£</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="NGN">₦</option>
          </select>
        ) : (
          <span
            id="price"
            className={`bg-main btn-bottom ${errors && "bg-red"} ${
              errors && "text-white"
            } ${
              errors && "btn-bottom4"
            } absolute flex items-center justify-center inset-y-0 h-10 px-4 rounded-e-md text-sm hover:cursor-pointer focus:cursor-pointer font-bold text-gray-700 right-0`}
          >
            {placeholders}
          </span>
        )}
      </div>
    </>
  );
};

export default Inputs;
