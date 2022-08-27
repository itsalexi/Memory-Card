/* eslint-disable react-hooks/exhaustive-deps */
import Card from './Card';
import '../styles/GameBoard.css';
import { useEffect, useState } from 'react';

const GameBoard = (props) => {
    const [cards, setCards] = useState(props.cards);
    const [flip, setFlip] = useState('');

    const shuffle = () => {
        let shuffleThis = [...cards];
        let shuffled = shuffleThis.sort(() => Math.random() - 0.5);
        setCards(shuffled);
        console.log('shuffling');
    };

    const shuffleBoard = () => {
        setFlip('');
        setTimeout(() => {
            shuffle();
            setTimeout(() => {
                setFlip('flip');
            }, 300);
        }, 300);
    };

    useEffect(() => {
        setTimeout(() => {
            setFlip('flip');
        }, 500);
    }, []);

    return (
        <div className="cards">
            {cards.map((card) => {
                return (
                    <div
                        key={card.id}
                        className={`${flip ? `${flip} card` : 'card'}`}
                    >
                        <div className="view front-view"></div>
                        <Card img={card.img} id={card.id} />
                    </div>
                );
            })}
            <button onClick={shuffleBoard}></button>
        </div>
    );
};

export default GameBoard;
