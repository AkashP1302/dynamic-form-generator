import React from "react";

export default function Label({ label, required }) {
  return (
    <>
      <span
        style={{
          color: "#000",
          fontSize: 14,
          lineHeight: 1,
          fontWeight: 500,
          marginBottom: 4,
          marginLeft: 10,
          textAlign: "left",
        }}
      >
        {label && label}
        {required ? <span style={{ color: "red" }}>*</span> : null}
      </span>
    </>
  );
}
