import React from 'react'
import "./GeometryBackground.css"

type GeometryBackgroundProps = {
    children: React.ReactNode
    color: string
}

export const GeometryBackground = ({children, color}: GeometryBackgroundProps) => {
    return (
        <div>
            <div className="triangle top" style={{backgroundColor: color}}/>
            <div style={{ backgroundColor: color}}>{children}</div>
            <div className="triangle bottom" style={{backgroundColor: color}}/>
        </div>
    )
}

