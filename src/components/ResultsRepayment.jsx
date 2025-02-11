/**
 * Component to display the results of mortgage repayment calculations.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.mortgageType - The type of mortgage.
 * @param {string} props.monthlyRepayment - The calculated monthly repayment amount.
 * @param {string} props.currencySymbol - The currency symbol to display.
 * @param {string} props.totalInterest - The total interest to be repaid over the term.
 * @returns {JSX.Element} The JSX element representing the results section.
 */
function ResultsRepayment({ monthlyRepayment, currencySymbol, totalInterest }) {
  return (
    <section className="flex-1 bg-slate900 text-white p-10 md:rounded-e-3xl md:rounded-bl-[6rem] relative z-10">
      {/* Section header */}
      <h1 className="text-left font-bold text-xl">Your Results</h1>
      <p className="text-left opacity-70 text-sm leading-relaxed pt-5">
        Your results are shown based on the information you provided. To adjust
        the results, edit the form and click 'calculate payments' again
      </p>

      {/* Results container */}
      <div className="bg-slatedeep shadow-md rounded-md mt-10 text-left">
        <hr className="border-none rounded-tl-md rounded-tr-md h-1 bg-lime" />

        {/* Monthly repayment details */}
        <div className="p-5">
          <div className="text-sm opacity-70">Your monthly repayments</div>
          <div className="text-4xl font-bold pt-3 text-lime">
            {monthlyRepayment !== "" &&
              currencySymbol === "£" &&
              `${currencySymbol}${Number(monthlyRepayment).toLocaleString(
                "en-US"
              )}`}
            {monthlyRepayment !== "" &&
              (currencySymbol === "$" ||
                currencySymbol === "€" ||
                currencySymbol === "₦") &&
              `${currencySymbol}${(
                Number(monthlyRepayment) * 100
              ).toLocaleString("en-US")}`}
          </div>
        </div>

        <hr className="m-4" />

        {/* Total interest details */}
        <div className="mt-4 p-5">
          <div className="opacity-70">Total you'll repay over the term</div>
          <div className="text-white text-lg font-bold pt-2">
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
}

export default ResultsRepayment;
