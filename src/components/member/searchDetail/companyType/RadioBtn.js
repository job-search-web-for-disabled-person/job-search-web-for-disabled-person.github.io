const RadioBtn = ({ value, labelValue, defaultChecked }) => {
  return (
    <p className="p-4 flex items-center">
      <input
        type="radio"
        id={value}
        name="company-type"
        value={value}
        className="h-4 w-4 mb-1 border-gray-300 align-middle"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value} className="pl-2">
        {labelValue}
      </label>
    </p>
  );
};

export default RadioBtn;
