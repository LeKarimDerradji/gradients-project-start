import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import GradientsApp from "./components/GradientsApp"
import React from 'react'

function App() {
  return (
    <React.Fragment>
    <GradientsHeader/>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <GradientsApp />
      </main>
      <Footer/>
      </React.Fragment>
  )
}

export default App
