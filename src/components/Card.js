import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.id}></img>
        </div>
    );
};

export default Card;
