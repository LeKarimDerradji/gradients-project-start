import  {uniqueTags} from '../gradients.js'



  // Todo créer le form GradientsSelect 
uniqueTags.unshift('Tous')
  
const GradientsSelect = ({handleSelectChange, tag}) => {

    return (
        <div className="input-group mb-3">
          <label className="input-group-text" for="select">Filtrer par tag</label>
              <select value={tag} onChange={(e) => handleSelectChange(e.target.value)} className="form-select" id="select">
              {uniqueTags.map((el) => (
                  <option key={el} value={el}>{el}</option>
                   ))}
             </select>
        </div>
        
    )
    
}

GradientsSelect.defaultProps = {
  tag: 'Tous'
}

export default GradientsSelect

