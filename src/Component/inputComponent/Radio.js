// import React from "react";
// import Label from "./label";

// const RadioBox = ({
//   values,
//   fieldName,
//   label,
//   maxLength,
//   onChange,
//   showError,
// }) => {
//   const value = values[fieldName];

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Label label={label} />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <input
//           type="radio"
//           value={value}
//           onChange={(e) => {
//             onChange && onChange(fieldName, e.target.value);
//           }}
//           style={{
//             marginBottom: 15,
//           }}
//         />
//         {showError && (
//           <div
//             style={{
//               color: "red",
//               fontSize: 14,
//               position: "absolute",
//               top: "100%",
//               marginTop: -10,
//             }}
//           >
//             <p>{"required"}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RadioBox;

import React from "react";
import Label from "./label";

const RadioBox = ({
  values,
  fieldName,
  label,
  maxLength,
  onChange,
  showError,
  id,
  valuesArray,
}) => {
  const value = values[fieldName];
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Label label={label} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {id &&
          id.map((radioId, index) => {
            return (
              <div key={radioId}>
                <input
                  type="radio"
                  id={radioId}
                  name={fieldName}
                  value={valuesArray[index]} // Use corresponding value
                  onChange={(e) => {
                    onChange && onChange(fieldName, e.target.value);
                  }}
                />
                <label htmlFor={radioId}>{valuesArray[index]}</label>
              </div>
            );
          })}
        {showError && (
          <div
            style={{
              color: "red",
              fontSize: 14,
            }}
          >
            <p>{"required"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioBox;
