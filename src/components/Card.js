import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className="view back-view">
            <img src={props.img} alt={props.id}></img>
        </div>
    );
};

export default Card;
