import './styles/App.css';
import GameBoard from './components/GameBoard';
import cards from './cards';
import { useState, useEffect } from 'react';
// TODO:

// Create an array of images, add an id to each image
// Create an element for each image and when someone clicks on it
// Add the id to a list of an array
// When someone clicks on an image, we check if the id of the image
// is already in the array of selected images, and if so, they lose

function App() {
    const [flipped, setFlipped] = useState([]);
    const [lost, setLost] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const checkCard = (card) => {
        if (flipped.includes(card.id)) {
            console.log('lost');
            setLost(true);
            return false;
        } else {
            flipped.push(card.id);
            setFlipped(flipped);
            setScore(score + 1);
            return true;
        }
    };

    const resetGame = () => {
        setFlipped([]);
        setLost(false);
        setScore(0);
    };

    // const checkWin = () => {
    //     if (flipped.length === 20) return true;
    // };

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score, highScore]);

    if (lost) {
        return (
            <div className="App">
                <div className="container">
                    <GameBoard
                        lost={lost}
                        checkCard={checkCard}
                        cards={cards}
                    />
                </div>
                <div className="score">
                    <div className="score-container">
                        <p className="score-text">Score: {score}</p>
                        <p className="high-score-text">
                            High Score: {highScore}
                        </p>
                    </div>
                    <button className="reset-button" onClick={resetGame}>
                        Play Again?
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="container">
                    <GameBoard
                        lost={lost}
                        checkCard={checkCard}
                        cards={cards}
                    />
                </div>
                <div className="score">
                    <div className="score-container">
                        <p className="score-text">Score: {score}</p>
                        <p className="high-score-text">
                            High Score: {highScore}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
