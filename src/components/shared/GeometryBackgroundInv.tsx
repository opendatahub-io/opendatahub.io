import React from "react";

import "./GeometryBackgroundInv.css";

type GeometryBackgroundProps = {
  children: React.ReactNode;
  color: string;
};

export const GeometryBackgroundInv = ({
  children,
  color,
}: GeometryBackgroundProps) => {
  return (
    <div>
      <div className="invtriangle top" style={{ backgroundColor: color }} />
      <div style={{ backgroundColor: color }}>{children}</div>
      <div className="invtriangle bottom" style={{ backgroundColor: color }} />
    </div>
  );
};
