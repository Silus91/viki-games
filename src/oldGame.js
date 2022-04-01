import React,{ useState} from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "Voldi" : "Harry";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber +1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if(winner || squares[i]) return;

        squares[i] =xO;
        setHistory([...history, squares]);
        setStepNumber(historyPoint.length);
        setxIsNext(!xIsNext);
    };

   const reset =() => {
        setStepNumber(stepNumber, 0);
        setHistory([Array(9).fill(null)]);
        setxIsNext(xIsNext, false);
      }

    return (
        <div>
            <h1>React tic</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
            </div>
            <h3>{winner ? "winner: " + winner : " Next Player: " + xO}</h3>
            <button className="" onClick={() => reset()}>
            New game
          </button>
        </div>
    )
}

export default Game;