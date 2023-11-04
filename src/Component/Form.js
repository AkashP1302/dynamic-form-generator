import { useEffect, useState } from "react";
import { inputTypes } from "./inputTypes";
import Button from "./inputComponent/Button";

const Form = ({ formContent, handleSubmit, allDynamicFormHaveValues }) => {
  const [formValues, setFormValues] = useState({});

  const onFieldChange = (fieldName, value) => {
    // Update the form values when a field changes
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const handleSave = () => {
    // Serialize the formContent object to JSON
    const formConfig = JSON.stringify(formContent);
    // Store the serialized formConfig in local storage
    localStorage.setItem("formConfig", formConfig);
    alert("Form configuration saved!");
  };

  return (
    <div>
      <form>
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            backgroundColor: "#2f4f4f",
            padding: 20,
            color: "#FFF",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          Dynamic Form
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 20,
            alignItems: "flex-start",
          }}
        >
          {formContent &&
            formContent.map((item) => {
              const {
                type,
                field_name,
                label,
                maxLength,
                options,
                id,
                valuesArray,
              } = item;
              if (allDynamicFormHaveValues) {
                const Component = inputTypes[type];
                return (
                  <Component
                    key={field_name}
                    values={formValues}
                    fieldName={field_name}
                    label={label}
                    maxLength={maxLength}
                    onChange={onFieldChange}
                    options={(options && options.split(",")) || []}
                    id={(id && id.split(",")) || []}
                    valuesArray={(valuesArray && valuesArray.split(",")) || []}
                  />
                );
              } else {
                return null; // Or handle the error in your preferred way
              }
            })}
        </div>
      </form>
      {allDynamicFormHaveValues && (
        <Button
          onClick={handleSave}
          label={"SAVE"}
          btnStyles={{
            backgroundColor: "#2f4f4f", // Background color
            color: "white", // Text color
            padding: "10px 20px", // Padding
            border: "none", // Remove border
            borderRadius: "25px", // Add some border radius
            cursor: "pointer", // Change cursor to a hand on hover
            width: "30%",
          }}
        />
      )}
    </div>
  );
};
export default Form;
