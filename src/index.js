//lets start with the header. how hard can it be?
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Corpo from './Corpo';
import Rodape from './Rodape';

function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
            <Rodape />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))