import React from "react";
import Label from "./label";

const Checkbox = ({
  values,
  fieldName,
  label,
  maxLength,
  onChange,
  showError,
}) => {
  const value = values[fieldName];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Label label={label} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <input
          type="checkbox"
          value={value}
          maxLength={maxLength}
          onChange={(e) => {
            onChange && onChange(fieldName, e.target.value);
          }}
          style={{
            marginBottom: 15,
          }}
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

export default Checkbox;
