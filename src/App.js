import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Layout/Rainymood/Home';
import User from './Layout/Rainymood/User';
import Intro from './Layout/Rainymood/Intro';
import Profile from './Layout/Profile';
import CarZone from '../src/landingpages/CarZone';
import Influexa from '../src/landingpages/Influexa';
import Spinfluence from '../src/landingpages/Spinfluence';
import UXUI_Desogner from '../src/landingpages/UXUI_Desogner';
import Warkinon from '../src/landingpages/Warkinon';
import VCBclone from './Layout/VCBclone';

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
                    <Route path="/UXUI_Desogner" element={<UXUI_Desogner />} />
                    <Route path="/Warkinon" element={<Warkinon />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
