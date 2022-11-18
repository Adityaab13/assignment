import React from 'react'
import {Navbar, Cards} from './components'
import {Header, Footer, Features, Card} from './containers'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        
      </div>
      <Features />
      <Card />
      <Footer />
      <h1>Test Push</h1>
    </div>
  )
}

export default App