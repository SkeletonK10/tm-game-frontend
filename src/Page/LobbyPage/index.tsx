import React from 'react';
import { useNavigate } from 'react-router-dom';

import Page from '../../Components/Page';

import { text, URL } from '../../Data';

const Comp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <div>{text.lobby.announcement}</div>
      <div>
        <button onClick={() => navigate(URL.play)}>Play</button>
        <button onClick={() => navigate(URL.spectate)}>Spectate</button>
      </div>
    </Page>
  );
}

export default Comp;
