import React from "react";

function GlowButton({
  children,
  onClick,
  type = "button",
  variant = "red", // red, gold
  className = "",
  disabled = false,
}) {
  const baseStyle = "px-5 py-2.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded disabled:opacity-50 active:scale-98";

  const variants = {
    red: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg",
    gold: "bg-amber-500 hover:bg-amber-600 text-black shadow-md hover:shadow-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant] || variants.red} ${className}`}
    >
      {children}
    </button>
  );
}

export default GlowButton;
