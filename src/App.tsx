/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import './App.css'
import ShowTurns from './components/ShowTurns'
import TimingTurns from './components/TimingTurns'
import Button from './components/Button'

function App() {
  const [numTurns, setNumTurns] = useState( 0 )
  const [timing, setTiming] = useState( 0 )
  const [running, setRunning] = useState( false )

  useEffect(() => {
    let timer: number | null = null
    if ( running ) {
      setInterval(() => {
        setTiming( old => old + 1 )
      }, 1000)
    }
    return () => {
      if ( timer ) {
        clearInterval ( timer )
      }
    } 
  }, [ running ])

  const toogleRunning = () => {
    setRunning ( !running )
    console.log( { running } )
  }

  const increment = () => {
    setNumTurns( numTurns + 1 )
  }

  const decrement = () => {
    setNumTurns( numTurns - 1 )
  }

  const reset = () => {
    setNumTurns(0)
    setTiming(0)
  }

  return (
    <div className="App">
      <ShowTurns turns = { numTurns }/>
      <Button text='-' onClick = { decrement }/>
      <Button text='+' onClick = { increment }/>
      {
        numTurns > 0 &&
        <TimingTurns timing = { timing / numTurns }/>
      }
      <Button text='inicar' onClick = { toogleRunning }/>
      <Button text='reiniciar' onClick = { reset }/>
    </div>
  )
}

export default App