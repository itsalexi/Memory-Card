/* eslint-disable react-hooks/exhaustive-deps */
import Card from './Card';
import '../styles/GameBoard.css';
import { useEffect, useState } from 'react';

const GameBoard = (props) => {
    const [cards, setCards] = useState(props.cards);
    const [flip, setFlip] = useState('');

    const shuffle = () => {
        let shuffled = cards.sort(() => Math.random() - 0.5);
        setCards(shuffled);
    };

    const shuffleBoard = () => {
        setFlip('');
        shuffle();
        setTimeout(() => {
            setFlip('flip');
        }, 1000);
    };

    useEffect(() => {
        shuffle();
        setTimeout(() => {
            setFlip('flip');
        }, 500);
    }, []);

    return (
        <div className="cards">
            {cards.map((card) => {
                return (
                    <div key={card.id} className={`${flip ? flip : ''} card`}>
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
