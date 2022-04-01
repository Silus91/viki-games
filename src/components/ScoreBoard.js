import React from 'react'

import "./Box.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>Voldi - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>Harry - {oScore}</span>
    </div>
  )
}