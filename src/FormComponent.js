import { useState } from "react";

const jsonData = [
  {
    type: "input",
    label: "Name",
    name: "name",
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    options: ["Male", "Female", "Other"],
  },
  {
    type: "dropdown",
    label: "Country",
    name: "country",
    options: ["USA", "Canada", "UK", "Australia"],
  },
  {
    type: "textarea",
    label: "Bio",
    name: "bio",
  },
  {
    type: "checkbox",
    label: "Interests",
    name: "interests",
    options: ["Sports", "Music", "Travel"],
  },
];

export const FormComponent = () => {
  const [formData, setFormData] = useState({});
  console.log(formData, "123123");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderInput = (field) => {
    const { type, label, name, options } = field;

    switch (type) {
      case "input":
        return (
          <div className="mb-4">
            <p className="mb-2 font-bold">{label}</p>
            <input
              type="text"
              name={name}
              placeholder={label}
              value={formData[name] || ""}
              onChange={handleChange}
              className="border p-2 rounded mb-4 border-blue-500  focus:border-blue-500 focus:outline-none"
            />
          </div>
        );

      case "radio":
        return (
          <div className="mb-4">
            <p className="mb-2 font-bold">{label}</p>
            {options.map((option) => (
              <label key={option} className="mr-4">
                <input
                  type="radio"
                  name={name}
                  value={option}
                  checked={formData[name] === option}
                  onChange={handleChange}
                  className="mr-1 border-blue-500  focus:border-blue-500 focus:outline-none"
                />
                {option}
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <div className="mb-4">
            <p className="mb-2 font-bold">{label}</p>
            {options.map((option) => (
              <label key={option} className="flex items-center mr-4">
                <input
                  type="checkbox"
                  name={`${name}_${option}`}
                  checked={formData[`${name}_${option}`] || false}
                  onChange={handleChange}
                  className="mr-1"
                />
                {option}
              </label>
            ))}
          </div>
        );

      case "dropdown":
        return (
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor={name}>
              {label}
            </label>
            <select
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full border-blue-500  focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case "textarea":
        return (
          <textarea
            name={name}
            placeholder={label}
            value={formData[name] || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full border-blue-500  focus:border-blue-500 focus:outline-none"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form className="max-w-md mx-auto">
        {jsonData.map((field, index) => (
          <div key={index}>{renderInput(field)}</div>
        ))}
      </form>
    </div>
  );
};
