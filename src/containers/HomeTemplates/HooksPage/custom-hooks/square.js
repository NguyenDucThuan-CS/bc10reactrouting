import React, { useState, useEffect } from 'react'
import "./style.css"
export default function Square() {
    const [state, setState] = useState("red");
    return (
        <div className = "square" style = {{backgroundColor: state}}>
            
        </div>
    )
}
