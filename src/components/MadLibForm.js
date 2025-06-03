import React, { useState } from "react";

/**
 * MadLibForm component that manages the form inputs
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Function to call when form is submitted
 */
function MadLibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const isFormValid =
    formData.noun && formData.noun2 && formData.adjective && formData.color;

  /**
   * Handles input changes and updates the form data
   * @param {Object} e - Event object
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  /**
   * Handles form submission
   * @param {Object} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  return (
    <form className="madlib-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="noun"
        value={formData.noun}
        onChange={handleChange}
        placeholder="noun"
      />
      <input
        type="text"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
        placeholder="noun 2"
      />
      <input
        type="text"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
        placeholder="adjective"
      />
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="color"
      />
      <button type="submit" disabled={!isFormValid}>
        Get Story
      </button>
    </form>
  );
}

export default MadLibForm;
