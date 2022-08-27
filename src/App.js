import './styles/App.css';
import GameBoard from './components/GameBoard';
import cards from './cards';

// TODO:

// Create an array of images, add an id to each image
// Create an element for each image and when someone clicks on it
// Add the id to a list of an array
// When someone clicks on an image, we check if the id of the image
// is already in the array of selected images, and if so, they lose

function App() {
    return (
        <div className="App">
            <div className="container">
                <GameBoard cards={cards} />
            </div>
        </div>
    );
}

export default App;
