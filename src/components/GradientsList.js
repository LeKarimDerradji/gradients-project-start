import Gradient from "./Gradient"

// Selon la valeur passer dans select (ou non) ; générer la gradient list. 



const GradientsList = ({list, filterName, setFilterName}) => {
 
  return (
    <ul className="row list-unstyled">
    
      {list.map((el) => {
        return (
          <Gradient
            filterName={filterName}
            setFilterName={setFilterName}
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