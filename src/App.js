import GradientsList from "./components/GradientsList"
import GradientsSelect from './components/GradientsSelect'
import gradients from './gradients'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import GradientTag from './components/GradientTag'


function App( {list, tagName} ) {
    list = gradients
    // List will be equal to gradients 
    const [filterName, setFilterName] = useState('Tous') // This is a state for the tagName

    const [filteredArray, setFilteredArray] = useState([]) // This is the state for the tabTags


    const handleClickEvent = (e) => {
      console.log(tagName)
    }

    const handleChange = ({currentTarget}) => {
      const {value} = currentTarget
      setFilterName(value)
      console.log(value)
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
      <Header/>
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <main className="container">
      <GradientsSelect handleSelectChange={handleChange}/>
      <GradientsList list={filteredArray}/>
      <GradientTag handleClickChange={handleClickEvent} />
      </main>
    </div>
  )
}

export default App
