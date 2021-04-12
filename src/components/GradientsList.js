import Gradient from "./Gradient"
import gradients from "../gradients"
import GradientsSelect from './GradientsSelect'
import {useState} from 'react'

// Selon la valeur passer dans select (ou non) ; générer la gradient list. 



const GradientsList = ({list}) => {
 
  return (
    <ul className="row list-unstyled">
    
      {list.map((el) => {
        return (
          <Gradient
            key={el.name}
            colorStart={el.start}
            colorEnd={el.end}
            name={el.name}
            tags={el.tags}
          />
        )
      })}
    </ul>
  )
}

export default GradientsList