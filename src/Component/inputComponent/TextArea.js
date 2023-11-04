import React from "react";
import Label from "./label";

const TextArea = ({
  values,
  fieldName,
  label,
  maxLength,
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
        <textarea
          name={fieldName}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(e) => {
            onChange && onChange(fieldName, e.target.value);
          }}
          style={{
            width: 140,
            padding: "8px", // Add padding to the input
            border: "1px solid #ccc", // Add a border
            borderRadius: "4px", // Add some border radius
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 15,
          }}
          rows="4"
          cols="50"
        />
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

export default TextArea;
