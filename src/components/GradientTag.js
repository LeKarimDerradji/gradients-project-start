import React from "react"
import {useState} from 'react'

const GradientTag = ({tagName, setFilterName, value, setValue} ) => {

 
  

  const handleClick = (funcOne, funcTwo) => {
    setFilterName(tagName)
    setValue(value = true)
  }
  const classNameValue='btn btn-sm me-2 mb-2 text-light bg-dark'
  const classNameDisabled='btn btn-sm me-2 mb-2 bg-light'

  return (
    <button 
       onClick={() => handleClick(setFilterName, setValue)} type="button" 
       disabled={value}
        className={value ? classNameDisabled : classNameValue}
        >{tagName}</button>
  )
}

export default GradientTag