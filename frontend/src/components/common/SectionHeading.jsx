import React from "react";

function SectionHeading({ title, subtitle, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      
      {/* Small accent label */}
      <span className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-1.5 font-mono">
        // {title}
      </span>

      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight relative">
        {title}
        {/* Simple underline bar */}
        <span className={`absolute bottom-[-8px] left-0 h-[2px] bg-red-600 ${isCenter ? "w-16 left-1/2 -translate-x-1/2" : "w-12"}`} />
      </h2>

      {subtitle && (
        <p className="mt-5 text-sm text-gray-400 max-w-xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;
