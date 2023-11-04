import { DeleteIcon } from "../image";
import Button from "./inputComponent/Button";
import Dropdown from "./inputComponent/Dropdown";
import TextInput from "./inputComponent/TextInput";

const AddForm = ({
  values,
  onChangeValue,
  index,
  dynamicFormValues,
  setDynamicFormValues,
  showError,
  allDynamicFormHaveValues,
}) => {
  const removeFormField = (index) => {
    // Remove the form field at the specified index
    const updatedFields = dynamicFormValues.filter((_, i) => i !== index);
    setDynamicFormValues(updatedFields);
  };

  const handleChange = (fieldName, value) => {
    // Handle changes in the form field values
    const updatedFields = dynamicFormValues.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [fieldName]: value,
        };
      }
      return item;
    });

    setDynamicFormValues(updatedFields);
  };
  const validateOptions = (value) => {
    // Check if the value contains commas
    if (value && !value.includes(",")) {
      return "must be comma-separated";
    }
    return ""; // No error
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Dropdown
        values={values}
        label="Type"
        fieldName={"type"}
        onChange={handleChange}
        required={true}
        placeholder={"Select values"}
        options={["text", "textarea", "dropdown", "radio", "checkbox"]}
        showError={!dynamicFormValues[index].type && showError}
      />
      {dynamicFormValues[index].type !== "radio" && (
        <TextInput
          values={values}
          label="Label"
          fieldName={"label"}
          onChange={handleChange}
          required={true}
          placeholder={"Enter Label"}
          showError={!dynamicFormValues[index].label && showError}
        />
      )}
      <TextInput
        values={values}
        label="Field Name"
        fieldName={"field_name"}
        onChange={handleChange}
        placeholder={"Enter field name"}
        required={true}
        showError={!dynamicFormValues[index].field_name && showError}
      />
      {dynamicFormValues[index].type === "text" ||
        (dynamicFormValues[index].type === "textarea" && (
          <TextInput
            values={values}
            label="Set Max Length"
            placeholder={"Enter max length"}
            fieldName={"maxLength"}
            onChange={handleChange}
            required={true}
            showError={!dynamicFormValues[index].maxLength && showError}
          />
        ))}
      {dynamicFormValues[index].type === "dropdown" && (
        <TextInput
          values={values}
          label="Options"
          placeholder={"Enter Options (Comma-separated)"}
          fieldName={"options"}
          onChange={handleChange}
          required={true}
          showError={!dynamicFormValues[index].options && showError}
        />
      )}
      {dynamicFormValues[index].type === "dropdown" &&
      validateOptions(dynamicFormValues[index].options) &&
      showError ? (
        <p style={{ color: "red", display: "flex", flexDirection: "column" }}>
          {validateOptions(dynamicFormValues[index].options)}
        </p>
      ) : null}

      {dynamicFormValues[index].type === "radio" && (
        <TextInput
          values={values}
          label="Radio Values"
          fieldName={"valuesArray"}
          onChange={handleChange}
          placeholder={"Enter values (comma-separated)"}
          required={true}
          showError={!dynamicFormValues[index].valuesArray && showError}
        />
      )}
      {dynamicFormValues[index].type === "radio" &&
      validateOptions(dynamicFormValues[index].valuesArray) &&
      showError ? (
        <p style={{ color: "red", display: "flex", flexDirection: "column" }}>
          {validateOptions(dynamicFormValues[index].valuesArray)}
        </p>
      ) : null}
      {dynamicFormValues[index].type === "radio" && (
        <TextInput
          values={values}
          label="Id"
          fieldName={"id"}
          onChange={handleChange}
          required={true}
          placeholder={"Enter id (comma-separated)"}
          showError={!dynamicFormValues[index].id && showError}
        />
      )}
      {dynamicFormValues[index].type === "radio" &&
      validateOptions(dynamicFormValues[index].id) &&
      showError ? (
        <p style={{ color: "red", display: "flex", flexDirection: "column" }}>
          {validateOptions(dynamicFormValues[index].id)}
        </p>
      ) : null}
      <Button
        onClick={() => removeFormField(index)}
        icon={DeleteIcon}
        title={"Delete row"}
      />
    </div>
  );
};
export default AddForm;
