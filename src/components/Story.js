import React from "react";

/**
 * Story component that displays the completed MadLib story
 * @param {Object} props - Component props
 * @param {Object} props.words - Object containing the user's input values
 * @param {Function} props.onRestart - Function to call when the restart button is clicked
 */
function Story({ words, onRestart }) {
  const { noun, noun2, adjective, color } = words;

  return (
    <div className="madlib-story">
      <p>
        There was a {color} {noun} who loved a {adjective} {noun2}.
      </p>
      <button className="restart-button" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default Story;
