import { ICON_CALCULATOR } from "../constants/index";

/**
 * Repayments component renders a button that triggers the onCalculate function when clicked.
 *
 * @param {Object} props - The properties object.
 * @param {Function} props.onCalculate - The function to be called when the button is clicked.
 * @returns {JSX.Element} The rendered component.
 */
const Repayments = ({ onCalculate }) => {
  return (
    <div className="text-left mt-3">
      <button
        className="rounded-3xl px-5 py-3 mt-5 bg-lime text-sm font-bold hover:opacity-70 focus:opacity-100"
        onClick={onCalculate}
      >
        <img
          src={ICON_CALCULATOR}
          alt="Icon-calculator"
          className="inline px-2"
        />
        Calculate Repayments
      </button>
    </div>
  );
};

export default Repayments;
