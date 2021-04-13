import React from "react"

const GradientTag = ({tagName, setFilterName} ) => {
  
  return <button onClick={(e) => setFilterName(tagName)} type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white">{tagName}</button>
}

export default GradientTag