import React from "react";

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
