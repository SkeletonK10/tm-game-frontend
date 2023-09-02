import React from 'react';
import { useNavigate } from 'react-router-dom';

import Page from '../../Components/Page';

import { URL } from '../../Data';

const Comp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <button onClick={() => navigate(URL.lobby)}>Go to Lobby</button>
    </Page>
  );
}

export default Comp;
