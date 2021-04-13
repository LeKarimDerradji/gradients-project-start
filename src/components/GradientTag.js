import {useState} from 'react'


const GradientTags = ({tags, setFilterName, filterName}) => {


  return (
  <div className="mt-3">
          {tags.map((tag) => {
            return (
              <button 
               onClick={() => setFilterName(tag)} key={tag} type="button" 
               disabled={filterName === tag}
               className={filterName === tag ? "btn btn-sm me-2 mb-2 bg-light" : 
               "btn btn-sm me-2 mb-2 bg-dark text-white"}>{tag}</button>)
            
          })}
        </div>
          
          )
          
}

export default GradientTags