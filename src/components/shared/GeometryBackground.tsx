import React from "react";

import "./GeometryBackground.css";

type GeometryBackgroundProps = {
  children: React.ReactNode;
  color: string;
  invert?: boolean;
};

export const GeometryBackground = ({
  children,
  color,
  invert,
}: GeometryBackgroundProps) => {
  return (
    <div className="triangle-geometry-background">
      <div
        className={`triangle top ${invert ? "inverted" : ""}`}
        style={{ backgroundColor: color }}
      />
      <div style={{ backgroundColor: color }}>{children}</div>
      <div
        className={`triangle bottom ${invert ? "inverted" : ""}`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
