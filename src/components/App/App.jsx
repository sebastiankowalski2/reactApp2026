import React from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Landscapes from '../Landscapes/Landscapes.jsx'
import data from '../../assets/data.js'

function App() {
  const mappedData = data.map((item) => {
    return <Landscapes key={item.id} item={item} />
  })
  return (
    <>
      <Header />
      {mappedData}
    </>
  )
}

export default App
