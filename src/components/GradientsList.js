import Gradient from "./Gradient"
import GradientsList from './GradientsSelect'

// Selon la valeur passer dans select (ou non) ; générer la gradient list. 

const GradientsList = () => {
  /* Créer ou importer une fonction qui génère les éléments gradient 
  selon la valeur passer dans le formulaire select
  */
  return (
    <ul className="row list-unstyled">
      <Gradient
        colorStart="rgb(189, 195, 199)"
        colorEnd="rgb(44, 62, 80)"
        name="Grade Grey"
        tags="Grey"
      />
    </ul>
  )
}

export default GradientsList