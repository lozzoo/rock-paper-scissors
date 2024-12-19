import { useState, useEffect } from 'react';
import './App.css';
import Rock from "./assets/rock.png";
import Paper from "./assets/paper.png";
import Scissors from "./assets/scissors.png";
import Video from "./assets/video.mp4"

function App() {
  const [result, getResult] = useState("");
  const [gameOver, setGameOver] = useState(false); // Stato per gestire quando il gioco è finito
  const [ai_guess, setAiGuess] = useState(Math.ceil(Math.random() * 3));
  const [ai_guess_translate, setAiGuessTranslate] = useState("");

  // UseEffect to update ai_guess_translate when ai_guess changes
  useEffect(() => {
    switch(ai_guess) {
      case 1:
        setAiGuessTranslate("Roccia");
        break;
      case 2:
        setAiGuessTranslate("Carta");
        break;
      case 3:
        setAiGuessTranslate("Forbice");
        break;
      default:
        break;
    }
  }, [ai_guess]); // Only run when ai_guess changes

  function Result(op) {
    let outcome = "";
    switch (op) {
      case 1:
        if (ai_guess === 1) {
          outcome = "PAREGGIO";
        } else if (ai_guess === 2) {
          outcome = "HAI PERSO!";
        } else if (ai_guess === 3) {
          outcome = "HAI VINTO!";
        }
        break;
      case 2:
        if (ai_guess === 1) {
          outcome = "HAI VINTO!";
        } else if (ai_guess === 2) {
          outcome = "PAREGGIO";
        } else if (ai_guess === 3) {
          outcome = "HAI PERSO!";
        }
        break;
      case 3:
        if (ai_guess === 1) {
          outcome = "HAI PERSO!";
        } else if (ai_guess === 2) {
          outcome = "HAI VINTO!";
        } else if (ai_guess === 3) {
          outcome = "PAREGGIO";
        }
        break;
      default:
        break;
    }
    getResult(outcome);
    setGameOver(true); // Impostiamo lo stato di fine partita
  }

  return (
    <>
      {!gameOver ? (
        <div className='title'>
          <h1>SASSO CARTA FORBICE</h1>
          <p>Seleziona operatore:</p>

          <div className='op-selector'>
            <button onClick={() => Result(1)}>
              <img src={Rock} alt="Rock" />
            </button>
            <button onClick={() => Result(2)}>
              <img src={Paper} alt="Paper" />
            </button>
            <button onClick={() => Result(3)}>
              <img src={Scissors} alt="Scissors" />
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h1 className='risultato-h1'>Il computer ha scelto: {ai_guess_translate}</h1>
          <p className='risultato'>{result}</p>
          <button onClick={() =>setGameOver(false)} className='rigioca'>Rigioca</button>
        </div>
        
      )}
    </>
  );
}

export default App;
