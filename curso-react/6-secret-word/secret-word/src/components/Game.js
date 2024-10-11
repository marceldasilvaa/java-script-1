import styles from "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div>
      <p>Game</p>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  )
}

export default Game;
