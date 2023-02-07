import React from 'react'
import { Turns } from '../typings'

const ShowTurns: React.FC<Turns> = ({ turns }) => {
  return (
    <>
      <p>{turns}<br/>voltas</p>
    </>
  )
}

export default ShowTurns