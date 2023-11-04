import React from "react";
import Label from "./label";

const Dropdown = ({
  values,
  fieldName,
  label,
  options,
  onChange,
  showError,
  required,
  placeholder,
}) => {
  const value = values[fieldName];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label label={label} required={required} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div style={{ marginLeft: 10, marginRight: 10 }}>
          <select
            value={value}
            onChange={(e) => {
              onChange && onChange(fieldName, e.target.value);
            }}
            style={{
              minWidth: "50%",
              width: "100%", // Make the select full-width
              padding: "8px", // Add padding
              border: "1px solid #ccc", // Add a border
              borderRadius: "4px", // Add rounded corners
              marginBottom: 15,
            }}
            placeholder={placeholder}
          >
            <option value="">Select an option</option>
            {options &&
              options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
        {showError && (
          <div
            style={{
              color: "red",
              fontSize: 14,
              position: "absolute",
              top: "100%",
              marginTop: -10,
            }}
          >
            <p>{"required"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
