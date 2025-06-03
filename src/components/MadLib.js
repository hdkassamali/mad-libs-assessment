import React, { useState } from "react";
import MadLibForm from "./MadLibForm";
import Story from "./Story";

/**
 * MadLib component that manages the state and renders either the form or the story
 */
function MadLib() {
  const [showStory, setShowStory] = useState(false);

  const [words, setWords] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  /**
   * Handles form submission and shows the story
   * @param {Object} formData - Object containing the user's input values
   */
  const handleSubmit = (formData) => {
    setWords(formData);
    setShowStory(true);
  };

  /**
   * Resets the form and hides the story
   */
  const handleRestart = () => {
    setShowStory(false);
  };

  return (
    <div className="madlib-container">
      <h1>Madlibs!</h1>
      {!showStory ? (
        <MadLibForm onSubmit={handleSubmit} />
      ) : (
        <Story words={words} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default MadLib;
