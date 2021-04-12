import reactDom from 'react-dom'
import {useState} from 'react'
import gradients from '../gradients'
import  {uniqueTags} from '../gradients.js'



  // Todo créer le form GradientsSelect 

  
const GradientsSelect = ({handleSelectChange, tag}) => {
  
    return (
        <div class="input-group mb-3">
          <label class="input-group-text" for="select">Filtrer par tag</label>
              <select onChange={handleSelectChange} class="form-select" id="select">
              <option value={tag}>{tag}</option>
              {uniqueTags.map((el) => (
                  <option key={el} value={el}>{el}</option>
                   ))}
             </select>
        </div>
        
    )
    
}

export default GradientsSelect

GradientsSelect.defaultProps = {
    tag: 'Tous'
}