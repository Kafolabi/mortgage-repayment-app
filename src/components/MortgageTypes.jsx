/**
 * MortgageTypes component renders a styled radio button for selecting a mortgage type.
 *
 * @param {Object} props - The component props.
 * @param {string} props.mortgageType - The type of mortgage to display.
 * @param {function} props.onChange - The function to call when the radio button value changes.
 * @returns {JSX.Element} The rendered MortgageTypes component.
 */
const MortgageTypes = ({ mortgageType, onChange }) => {
  return (
    <div className="space-y-4 mb-5 types">
      <label className="relative flex items-center cursor-pointer p-4 border rounded-lg transition duration-200 hover:bg-limelight">
        <input
          type="radio"
          name="componentSelection"
          value={mortgageType}
          className="hidden peer"
          onChange={onChange}
        />
        <div className="absolute inset-0 bg-limelight border-lime border-2 opacity-20 rounded-lg peer-checked:opacity-100 pointer-events-none"></div>
        <div className="relative z-10 flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500"></div>
          <span className="font-bold text-sm peer-checked:text-blue-600">
            {mortgageType}
          </span>
        </div>
      </label>
    </div>
  );
};

export default MortgageTypes;
