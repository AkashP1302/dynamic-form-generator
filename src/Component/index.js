import React, { Fragment, useState } from "react";
import Form from "./Form";
import AddForm from "./AddForm";
import Button from "./inputComponent/Button";
import { AddIcon, ReloadIcon } from "../image";

export default function DynamicForm() {
  const [dynamicFormValues, setDynamicFormValues] = useState([
    {
      field_name: "",
      // label: "",
      type: "",
    },
  ]);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  // Check if all dynamic form fields have values
  const allDynamicFormHaveValues = dynamicFormValues.every((obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "string" && obj[key].trim() === "") {
        return false;
      }
    }
    return true;
  });

  // Function to toggle showing/hiding the form
  const handleShowButton = () => {
    if (allDynamicFormHaveValues) {
      setShow((prevShow) => {
        return !prevShow;
      });
    } else {
      setShowError(true);
    }
  };

  // Retrieve the serialized formConfig from local storage
  const savedFormConfig = localStorage.getItem("formConfig");

  // Function to load a previously saved form configuration
  const handleLoad = () => {
    // Retrieve the serialized formConfig from local storage

    if (savedFormConfig) {
      // Parse the JSON data back into an object
      const loadedFormConfig = JSON.parse(savedFormConfig);

      // Update the formContent state with the loaded configuration
      setDynamicFormValues(loadedFormConfig);
    } else {
      alert("No saved form configuration found.");
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "99vh",
          }}
        >
          {/* Header */}
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
            Dynamic Form Generator
          </p>

          {/* Load Button (if there is a saved configuration) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 15,
            }}
          >
            {savedFormConfig && (
              <Button
                onClick={handleLoad}
                icon={ReloadIcon}
                title={"Form configuration"}
                iconStyle={{
                  width: 50,
                  height: 50,
                }}
              />
            )}
          </div>

          {/* Add New Row Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 30,
            }}
          >
            <Button
              btnStyles={{
                color: "#FFF", // Text color
                border: "none", // Remove border
                borderRadius: "5px", // Add some border radius
                cursor: "pointer", // Change cursor to a hand on hover
                height: 20,
                width: 20,
              }}
              onClick={() => {
                setDynamicFormValues((val) => [
                  ...val,
                  {
                    field_name: "",
                    label: "",
                    type: "",
                  },
                ]);
              }}
              icon={AddIcon}
              title={"Add new row"}
            />
          </div>

          {/* Dynamic Form Fields */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 20,
              }}
            >
              {dynamicFormValues?.map((item, index) => {
                const onChange = (fieldName, value) => {
                  dynamicFormValues[index][fieldName] = value;
                  setDynamicFormValues(dynamicFormValues);
                };
                return (
                  <div key={index} style={{ display: "flex" }}>
                    <AddForm
                      index={index}
                      values={item}
                      onChangeValue={onChange}
                      setDynamicFormValues={setDynamicFormValues}
                      dynamicFormValues={dynamicFormValues}
                      showError={showError}
                      allDynamicFormHaveValues={allDynamicFormHaveValues}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Show/Hide Form Button */}
          <Button
            btnStyles={{
              backgroundColor: "#2f4f4f", // Background color
              color: "white", // Text color
              padding: "10px 20px", // Padding
              border: "none", // Remove border
              borderRadius: "25px", // Add some border radius
              cursor: "pointer", // Change cursor to a hand on hover
              width: "30%",
            }}
            onClick={handleShowButton}
            label={show ? "Hide" : "Show"}
          />
        </div>

        {/* Form Display Area */}
        <div
          style={{
            width: "40%",
            borderLeft: "1px solid #2f4f4f",
            height: window.innerHeight,
          }}
        >
          {show ? (
            <Form
              handleSubmit={(formValues) => {
                setDynamicFormValues(formValues);
              }}
              formContent={dynamicFormValues}
              allDynamicFormHaveValues={allDynamicFormHaveValues}
            />
          ) : (
            <p>{"Please select filed details"}</p>
          )}
        </div>
      </div>
    </>
  );
}
