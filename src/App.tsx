import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './Page/MainPage';
import LobbyPage from './Page/LobbyPage';
import PlayPage from './Page/PlayPage';
import SpecPage from './Page/SpecPage';

import { URL } from './Data';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={URL.main} element={<MainPage />} />
        <Route path={URL.lobby} element={<LobbyPage />} />
        <Route path={URL.play} element={<PlayPage />} />
        <Route path={URL.spectate} element={<SpecPage />} />
      </Routes>
    </Router>
  );
}

export default App;
