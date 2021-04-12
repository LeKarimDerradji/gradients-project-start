import GradientsList from "./components/GradientsList"
import GradientsSelect from './components/GradientsSelect'

function App() {
  return (
    <div>
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <main className="container">
        <GradientsSelect />
        <GradientsList />
      </main>
    </div>
  )
}

export default App
