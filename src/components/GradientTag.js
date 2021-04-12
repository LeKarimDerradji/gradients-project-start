  
import React from "react"

const GradientTag = ({ tagName, handleClickEvent }) => {
  return <button  onClick={handleClickEvent} type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white">{tagName}</button>
}

export default GradientTag