/* eslint-disable no-const-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';

interface PropsVoltas {
  voltas: number
}

interface PropsTempo {
  tempo: number
}

interface PropsButton {
  text: string
  onClick: () => void
}

const MostrarVoltas: React.FC<PropsVoltas> = ({ voltas }) => {
  return (
    <>
      <p>{voltas}<br/>voltas</p>
    </>
  )
}

const TempoVolta: React.FC<PropsTempo> = ({ tempo }) => {
  const minutos = Math.round ( tempo / 60 )
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? '0' + minutos : minutos
  const segundosStr = segundos < 10 ? '0' + segundos : segundos
  return (
    <>
      <p>
        {`${minutosStr}:${segundosStr}`} <br/>
        tempo médio por volta
      </p>
    </>
  )
}


const Button: React.FC<PropsButton> = ({ text, onClick }) => <button onClick = { onClick }> { text } </button>

function App() {
  const [numVoltas, setNumVoltas] = useState( 0 )
  const [tempo, setTempo] = useState( 0 )
  const [running, setRunning] = useState( false )

  useEffect(() => {
    let timer: number | null = null
    if(running) {
      setInterval(() => {
        setTempo( old => old + 1 )
      }, 1000)
    }
    return () => {
      if ( timer ) {
        clearInterval ( timer )
      }
    } 
  }, [running])

  const toogleRunning = () => {
    setRunning ( !running )
    console.log( { running } )
  }

  const increment = () => {
    setNumVoltas( numVoltas + 1 )
  }

  const decrement = () => {
    setNumVoltas( numVoltas - 1 )
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className="App">
      <MostrarVoltas voltas = { numVoltas }/>
      <Button text='-' onClick = { decrement }/>
      <Button text='+' onClick = { increment }/>
      {
        numVoltas > 0 &&
        <TempoVolta tempo = { tempo / numVoltas }/>
      }
      <Button text='inicar' onClick = { toogleRunning }/>
      <Button text='reiniciar' onClick = { reset }/>
    </div>
  )
}

export default App;