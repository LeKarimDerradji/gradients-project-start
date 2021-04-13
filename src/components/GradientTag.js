import React from "react"
import {useState} from 'react'

const GradientTag = ({tagName, setFilterName} ) => {

 
  let [disabledButton, setdisabledButton] = useState(false)

  const handleClick = (funcOne, funcTwo) => {
    setFilterName(tagName)
    setdisabledButton(disabledButton = true)
  }
  const classNameValue='btn btn-sm me-2 mb-2 text-light bg-dark'
  const classNameDisabled='btn btn-sm me-2 mb-2 bg-light'

  return (
    <button 
       onClick={() => handleClick(setFilterName, setdisabledButton)} type="button" 
       disabled={disabledButton}
        className={disabledButton ? classNameDisabled : classNameValue}
        >{tagName}</button>
  )
}

export default GradientTag