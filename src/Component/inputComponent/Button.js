import React from "react";

export default function Button({
  onClick,
  icon,
  label,
  btnStyles,
  title,
  iconStyle,
}) {
  return (
    <div>
      <button
        title={title}
        onClick={onClick}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          marginTop: 10,
          ...btnStyles,
        }}
      >
        {icon ? (
          <img
            src={icon}
            style={{
              width: 20,
              height: 20,
              marginTop: -5,
              ...iconStyle,
            }}
          />
        ) : (
          label && label
        )}
      </button>
    </div>
  );
}
