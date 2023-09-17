import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Layout/Rainymood/Home';
import User from './Layout/Rainymood/User';
import Intro from './Layout/Rainymood/Intro';
import Profile from './Layout/Profile';
import CarZone from '../src/landingpages/CarZone';
import Influexa from '../src/landingpages/Influexa';
import Spinfluence from '../src/landingpages/Spinfluence';
import Adidas from './landingpages/Adidas';
import VCBclone from './Layout/VCBclone';
import Project from './Layout/Profile/Project';
import Landingpages from './Layout/Profile/Landingpages';
import CV from './Layout/Profile/CV';
import Tetris from './Project/TetrisGame';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/VCBclone" element={<VCBclone />} />
                    <Route path="/CarZone" element={<CarZone />} />
                    <Route path="/Influexa" element={<Influexa />} />
                    <Route path="/Spinfluence" element={<Spinfluence />} />
                    <Route path="/Adidas" element={<Adidas />} />
                    <Route path="/Tetris" element={<Tetris />} />
                    <Route path="/Landingpages" element={<Landingpages />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/CV" element={<CV />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
