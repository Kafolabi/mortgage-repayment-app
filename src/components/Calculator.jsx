import Inputs from "./Inputs";
import MortgageTypes from "./MortgageTypes";
import Repayments from "./Repayments";
import ResultsDefault from "./ResultsDefault";
import ResultsInterest from "./ResultsInterest";
import ResultsRepayment from "./ResultsRepayment";
import { useState, useEffect } from "react";

/**
 * Calculator component for calculating mortgage repayments.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <Calculator />
 * )
 *
 * @description
 * This component allows users to input mortgage details such as amount, term, and interest rate,
 * and calculates the monthly repayment and total interest. It supports different mortgage types
 * (Repayment and Interest Only) and currencies (GBP, USD, NGN, EUR).
 *
 * @function
 * @name Calculator
 *
 * @property {Array<string>} currencies - List of supported currency symbols.
 * @property {string} mortgageAmount - The amount of the mortgage.
 * @property {string} years - The term of the mortgage in years.
 * @property {string} interestRate - The interest rate of the mortgage.
 * @property {string} mortgageType - The type of mortgage (e.g., GBP, USD).
 * @property {string} monthlyRepayment - The calculated monthly repayment amount.
 * @property {string} totalInterest - The calculated total interest amount.
 * @property {string} currencySymbol - The symbol of the selected currency.
 * @property {string} selectedOption - The selected mortgage type option (Repayment or Interest Only).
 * @property {JSX.Element} activeComponent - The component to render based on the selected option.
 * @property {Object} errors - Object containing validation errors for the input fields.
 *
 * @method
 * @name checkMortgageType
 * @description Determines the currency symbol based on the mortgage type.
 * @param {string} type - The type of mortgage.
 * @returns {string} The corresponding currency symbol.
 *
 * @method
 * @name handleSelection
 * @description Handles the selection of the mortgage type.
 * @param {Event} event - The event triggered by selecting a mortgage type.
 *
 * @method
 * @name handleRender
 * @description Renders the appropriate result component based on the selected option.
 *
 * @method
 * @name calculateRepayment
 * @description Calculates the mortgage repayment and total interest based on user inputs.
 *
 * @method
 * @name handleSubmit
 * @description Handles form submission and validates the input fields.
 * @param {Event} e - The event triggered by form submission.
 *
 * @method
 * @name clearValues
 * @description Clears the input values in the form.
 */
const Calculator = () => {
  const currencies = ["£", "€", "$"];

  // State variables to store user inputs and calculated values
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("GBP");
  const [monthlyRepayment, setMonthlyRepayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [currencySymbol, setCurrencySymbol] = useState("£");

  const [selectedOption, setSelectedOption] = useState("");
  const [activeComponent, setActiveComponent] = useState(<ResultsDefault />);

  // Effect to re-render the component when monthlyRepayment or totalInterest changes
  useEffect(() => {
    handleRender();
  }, [monthlyRepayment, totalInterest]);

  // Function to determine the currency symbol based on mortgage type
  const checkMortgageType = (type) => {
    let symbol = "£"; // Default
    if (type === "USD") symbol = "$";
    if (type === "NGN") symbol = "₦";
    if (type === "EUR") symbol = "€";
    return symbol;
  };

  // Handle selection of mortgage type
  const handleSelection = (event) => {
    setSelectedOption(event.target.value);
  };

  // Render the appropriate result component based on selected option
  const handleRender = () => {
    selectedOption === "Repayment" &&
      setActiveComponent(
        <ResultsRepayment
          monthlyRepayment={monthlyRepayment}
          totalInterest={totalInterest}
          currencySymbol={currencySymbol}
        />
      );
    selectedOption === "Interest Only" &&
      setActiveComponent(
        <ResultsInterest
          monthlyRepayment={monthlyRepayment}
          totalInterest={totalInterest}
          currencySymbol={currencySymbol}
        />
      );
    console.log("Interest Only");
  };

  // Function to calculate mortgage repayment and total interest
  const calculateRepayment = () => {
    const inputs = document.getElementsByTagName("input");
    const amount = Number(inputs[0]?.value);
    const years = Number(inputs[1]?.value);
    const rate = Number(inputs[2]?.value);
    const type = document.getElementById("currency")?.value || "GBP";
    console.log(document.getElementById("currency"));

    setMortgageAmount(amount);
    setYears(years);
    setInterestRate(rate);
    setMortgageType(type);
    setCurrencySymbol(checkMortgageType(type));

    if (amount > 0 && years > 0 && rate > 0) {
      const monthlyInterestRate = rate / 100 / 12;
      const numberOfPayments = years * 12;

      let repayment = 0;
      let interest = 0;

      console.log(selectedOption);
      if (selectedOption === "Repayment") {
        repayment =
          (amount * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        interest = repayment * numberOfPayments; // ✅ Total interest paid
      } else {
        repayment = amount * monthlyInterestRate; // Interest-only payment
        interest = repayment * numberOfPayments; // ✅ Total interest paid
      }

      setMonthlyRepayment(repayment || 0);
      setTotalInterest(interest || 0); // ✅ Store total interest
    }
  };

  // State for errors
  const [errors, setErrors] = useState({
    mortgageAmount: false,
    years: false,
    interestRate: false,
  });

  // Handle form submission and validate inputs
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!mortgageAmount) newErrors.mortgageAmount = "This field is required.";
    if (!years) newErrors.years = "This field is required.";
    if (!interestRate) newErrors.interestRate = "This field is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    }
  };

  // Clear input values
  const clearValues = () => {
    const inputs = document.getElementsByTagName("input");
    [...inputs].forEach((input) => {
      input.value = "";
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-white text-slate-900 px-6 pb-10 rounded-s-xl relative z-10"
      >
        <div className="flex justify-between">
          <span className="font-bold py-9">Mortgage Calculator</span>
          <span
            className="opacity-60 py-9 text-sm cursor-pointer underline"
            onClick={clearValues}
          >
            Clear all
          </span>
        </div>
        <div className="flex-1 relative overflow-visible">
          <Inputs
            labels="Mortgage Amount"
            placeholders="£"
            state={true}
            currencies={currencies}
            errors={errors?.mortgageAmount || ""}
          />
        </div>

        <div className="md:flex md:flex-row md:space-x-8">
          <div className="flex-1 relative overflow-visible">
            <Inputs
              labels="Mortgage Term"
              placeholders="years"
              state={false}
              errors={errors?.years || ""}
            />
            {console.log(errors?.years)}
          </div>
          <div className="flex-1 relative overflow-visible">
            <Inputs
              labels="Interest Rate"
              placeholders="%"
              state={false}
              errors={errors?.interestRate || ""}
            />
          </div>
        </div>
        <span className="block text-sm font-medium text-gray-700 text-left pb-2">
          Mortgage Type
        </span>
        <MortgageTypes
          mortgageType="Repayment"
          value="Repayment"
          onChange={handleSelection}
        />
        <MortgageTypes
          mortgageType="Interest Only"
          value="interestOnly"
          onChange={handleSelection}
        />
        <Repayments onCalculate={calculateRepayment} />
      </form>
      {activeComponent}
    </>
  );
};

export default Calculator;
