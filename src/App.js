import './App.scss';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {Routes, Route} from "react-router-dom";
import TranscationsDetails from "./components/TranscationsDetails";
import TranscationsList from "./components/TranscationsList";

library.add(faCheck, faChevronRight, faChevronLeft)

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<TranscationsList />}/>
                <Route path="/details" element={<TranscationsDetails />} />
            </Routes>
        </div>
    );
}

export default App;
