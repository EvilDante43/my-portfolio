import React from "react";

function AnimatedText({ text, className = "" }) {
  return <span className={className}>{text}</span>;
}

export default AnimatedText;
