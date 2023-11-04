// import React from "react";
// import Label from "./label";

// const TextInput = ({
//   values,
//   fieldName,
//   label,
//   maxLength,
//   onChange,
//   showError,
//   required,
//   placeholder,
//   minLength,
// }) => {
//   const value = values[fieldName];
//   return (
//     <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
//       <Label label={label} required={required} />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <input
//           type="text"
//           value={value}
//           maxLength={maxLength}
//           onChange={(e) => {
//             onChange && onChange(fieldName, e.target.value);
//           }}
//           placeholder={placeholder}
//           style={{
//             width: "90%",
//             padding: 9,
//             border: "1px solid #ccc",
//             borderRadius: 5,
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

// export default TextInput;

import React, { useState } from "react";
import Label from "./label";

const TextInput = ({
  values,
  fieldName,
  label,
  maxLength,
  onChange,
  required,
  placeholder,
  minLength,
}) => {
  const value = values[fieldName];
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleBlur = () => {
    if (fieldName === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailRegex.test(value));
    } else if (fieldName === "phone") {
      const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      setPhoneError(!phoneRegex.test(value));
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange && onChange(fieldName, newValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
      <Label label={label} required={required} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <input
          type="text"
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{
            width: "90%",
            padding: 9,
            border: "1px solid #ccc",
            borderRadius: 5,
            marginBottom: 15,
          }}
        />
        {(emailError || phoneError) && (
          <div
            style={{
              color: "red",
              fontSize: 14,
              position: "absolute",
              top: "100%",
              marginTop: -10,
            }}
          >
            <p>
              {emailError && "Invalid email"}
              {emailError && phoneError && " and "}
              {phoneError && "Invalid phone"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
