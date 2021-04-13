import React from "react"
import {useState} from 'react'

const GradientTag = ({tagName, setFilterName} ) => {

 
  const [disabledButton, setdisabledButton] = useState(false)

  const handleClick = (func) => {
    setFilterName(tagName)
  }
  let classNameValue='btn btn-sm me-2 mb-2 text-light bg-dark'
  let classNameDisabled='btn btn-sm me-2 mb-2 bg-light'
  const handleOnChange = () => {
    setdisabledButton(value => value = true)
    classNameValue={classNameDisabled}
  }
  return <button 
  onChange={handleOnChange}
  onClick={() => handleClick(setFilterName)} type="button" 
  className={classNameValue}
  disabled={disabledButton}
  >{tagName}</button>
}

export default GradientTag