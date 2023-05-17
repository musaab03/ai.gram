import React from "react";

type FormFieldProps = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSupriseMe?: boolean;
  handleSupriseMe?: () => void;
  darkMode: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSupriseMe,
  handleSupriseMe,
  darkMode,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className={`block text-sm font-medium ${
            darkMode
              ? `text-white`
              : `text-gray-900 transition-colors duration-700`
          }`}
        >
          {labelName}
        </label>
        {isSupriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className={`font-semibold text-xs ${
              darkMode ? `bg-green-600 text-gray-200` : `bg-[#ECECF1]`
            } py-1 px-2 rounded-md text-black transition-colors duration-700`}
          >
            Suprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-800 focus:border-gray-800 transition-all duration-300 outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
