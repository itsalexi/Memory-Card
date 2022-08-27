/* eslint-disable react-hooks/exhaustive-deps */
import Card from './Card';
import { useEffect, useState } from 'react';

const GameBoard = (props) => {
    const { lost, checkCard } = props;
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

    const checkAndShuffle = (card) => {
        if (!lost) {
            if (checkCard(card)) {
                shuffleBoard();
            }
        }
    };

    return (
        <div className="cards">
            {cards.map((card) => {
                return (
                    <Card
                        checkCard={checkAndShuffle}
                        key={card.id}
                        card={card}
                        flip={flip}
                    />
                );
            })}
        </div>
    );
};

export default GameBoard;
