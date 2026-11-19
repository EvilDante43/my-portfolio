function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle Red Grid Lines */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-50
        "
      />
    </div>
  );
}

export default GridBackground;