const MortgageTypes = ({ mortgageType }) => {
  return (
    <div className="space-y-4 mb-5">
      {/* Option 1 */}
      <label className="relative flex items-center cursor-pointer p-4 border rounded-lg transition duration-200 hover:bg-limelight">
        <input type="radio" name="option" value="1" className="hidden peer" />
        {/* Full Box Background on Check */}
        <div className="absolute inset-0 bg-limelight border-lime border-2 opacity-20 rounded-lg peer-checked:opacity-100 pointer-events-none"></div>
        {/* Text and Custom Circle */}
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
