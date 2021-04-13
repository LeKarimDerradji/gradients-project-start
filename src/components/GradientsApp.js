import GradientsSelect from './GradientsSelect'
import gradients from '../gradients'
import React from "react"
import {useState, useEffect} from 'react'
import GradientsList from './GradientsList'


/*
function sortByTagName (value) {
    const [filterName, setFilterName] = useState('Tous')
    const getTagName = () => {
        setFilterName(value)
    }
    return [filterName, setFilterName]
}
*/


function GradientsApp( {list} ) {
    list = gradients

    const [filterName, setFilterName] = useState('Tous')
    
    const [filteredArray, setFilteredArray] = useState([])


    const handleChange = (value) => {
      setFilterName(value)
      
    }
    
    
    
    useEffect(() => {
    
    
    setFilteredArray(filterName === 'Tous' ? list  : list.filter(item => item.tags.includes(filterName)))

    }, [filterName])
    
  return (
    <div>
      <GradientsSelect tag={filterName} handleSelectChange={handleChange}/>
      <GradientsList setFilterName={setFilterName} list={filteredArray}/>
    </div>
  )
}

export default GradientsApp