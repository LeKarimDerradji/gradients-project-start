import reactDom from 'react-dom'
import gradients from '../gradients'
import  {uniqueTags} from '../gradients.js'



  // Todo créer le form GradientsSelect 

const GradientsSelect = ({tag}) => {
    
    return (
        <div class="input-group mb-3">
          <label class="input-group-text" for="select">Filtrer par tag</label>
              <select class="form-select" id="select">
              <option value="all">{tag}</option>
              {uniqueTags.map((el) => (
                  <option key={el} value='all'>{el}</option>
                   ))}
             </select>
        </div>
    )
    
}

export default GradientsSelect

GradientsSelect.defaultProps = {
    tag: 'Tous'
}