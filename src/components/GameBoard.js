import Card from './Card';
import '../styles/GameBoard.css';

const GameBoard = (props) => {
    const { cards } = props;
    return (
        <div className="game-board">
            {cards.map((card) => {
                return <Card key={card.id} img={card.img} id={card.id} />;
            })}
        </div>
    );
};

export default GameBoard;