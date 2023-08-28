import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Layout/Home';
import User from './Layout/User';
import Intro from './Layout/Intro';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
