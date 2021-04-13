import GradientsList from "./components/GradientsList"
import GradientsSelect from './components/GradientsSelect'
import gradients from './gradients'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import GradientsApp from './components/GradientsApp'


function App( {list} ) {
    list = gradients
    // List will be equal to gradients 
    const [filterName, setFilterName] = useState('Tous') // This is a state for the tagName

    const [filteredArray, setFilteredArray] = useState([]) // This is the state for the tabTags

    const handleChange = (e) => {
      setFilterName(e.target.value)
    }


    // Monitor changes on FilterName, if FilterName changes, it will apply the callBack Function to filter the Array
    
    
    useEffect(() => {
    // Ternary operator to check if Filname is equal to 'Tous', return the complete array if so
    filterName === 'Tous' ? list = gradients  :
    list = list.filter(item => item.tags.includes(filterName))
    setFilteredArray(list)

    }, [filterName])
    
  return (
    <div>
    <main>
      <Header/>
      <GradientsApp />
      </main>
    </div>
  )
}

export default App
