import React, {useState, useContext} from 'react';
import {observer} from 'mobx-react'
import Button from './Button'
import './App.css';
import CalculationStore from './CalculationStore'

function App() {
  const [currentX, setCurrentX] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const {addCalculation, calculations} = useContext(CalculationStore)

  const onClick = () => {
    addCalculation(currentX, currentY)
    setCurrentX(0)
    setCurrentY(0)
  }

  return (
    <div className="App">
      <input value={String(currentX)} maxLength={10} onChange={(e) => setCurrentX(Number(e.target.value.replace(/[^\d]/, '')))}></input>
      <input value={String(currentY)} maxLength={10} onChange={(e) => setCurrentY(Number(e.target.value.replace(/[^\d]/, '')))}></input>
      
      <Button onClick={onClick} text='Add'/>

      {calculations.map(({x, y, result}, index) => (
        <p key={index}>The value of {x} + {y} = {result}</p>
      ))}

      <br/>
      <br/>
      
      <Button theme='light' text='Light'/>
      <Button theme='dark' text='Dark'/>
      <Button theme='primary' text='Primary'/>
      <Button theme='secondary' text='Secondary'/>

    </div>
  )
}

export default observer(App)
