/**
 * ResultsInterest component displays the total interest based on the provided currency symbol and total interest value.
 *
 * @param {Object} props - The component props.
 * @param {string} props.currencySymbol - The symbol of the currency (e.g., £, $, €, ₦).
 * @param {string} props.totalInterest - The total interest amount.
 * @returns {JSX.Element} The rendered ResultsInterest component.
 */
const ResultsInterest = ({ currencySymbol, totalInterest }) => {
  return (
    <section className="flex-1 bg-slate900 text-white p-10 md:rounded-e-3xl md:rounded-bl-[6rem] relative z-10">
      <h1 className="text-left font-bold text-xl mt-[20%]">Your Results</h1>
      <p className="text-left opacity-70 text-sm leading-relaxed pt-5">
        Your results are shown based on the information you provided. To adjust
        the results, edit the form and click 'calculate payments' again
      </p>
      <div className="bg-slatedeep shadow-md rounded-md mt-10 text-left">
        <hr className="border-none rounded-tl-md rounded-tr-md h-1 bg-lime" />
        <div className="p-5">
          <div className="opacity-70">Your Total Interest</div>
          <div className="text-4xl font-bold pt-3 text-lime">
            {totalInterest !== "" &&
              currencySymbol === "£" &&
              `${currencySymbol}${Number(totalInterest).toLocaleString(
                "en-US"
              )}`}
            {totalInterest !== "" &&
              (currencySymbol === "$" ||
                currencySymbol === "€" ||
                currencySymbol === "₦") &&
              `${currencySymbol}${(Number(totalInterest) * 100).toLocaleString(
                "en-US"
              )}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsInterest;
