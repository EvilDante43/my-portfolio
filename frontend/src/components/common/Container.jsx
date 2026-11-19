import React from "react";

function Container({ children, className = "", id = "" }) {
  return (
    <div
      id={id}
      className={`
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
