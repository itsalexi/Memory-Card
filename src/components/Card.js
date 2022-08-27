import '../styles/Card.css';

const Card = (props) => {
    const { flip, card, checkCard } = props;

    const check = () => {
        checkCard(card);
    };

    return (
        <div
            onClick={check}
            key={card.id}
            className={`${flip ? `${flip} card` : 'card'}`}
        >
            <div className="view front-view"></div>
            <div className="view back-view">
                <img src={card.img} alt={card.id}></img>
            </div>
        </div>
    );
};

export default Card;
