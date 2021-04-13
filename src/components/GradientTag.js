import React from "react"
import {useState} from 'react'

const GradientTag = ({tagName, setFilterName, value, setValue, classNameValue, classNameDisabled} ) => {

 
  

  const handleClick = (funcOne, funcTwo) => {
    setFilterName(tagName)
    setValue(value = true)
  }

  return (
    <button 
       onClick={() => handleClick(setFilterName, setValue)} type="button" 
       disabled={value}
        className={value ? classNameDisabled : classNameValue}
        >{tagName}</button>
  )
}

export default GradientTag