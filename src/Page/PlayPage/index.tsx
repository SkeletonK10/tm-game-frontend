import React, { useEffect } from 'react';
import socket from '../../socket';

import Page from '../../Components/Page';

import { text } from '../../Data';

const Comp: React.FC = () => {
  useEffect(() => {
    socket.connect();
  }, []);
  
  return (
    <Page>
      {text.play.announcement}
    </Page>
  );
}

export default Comp;
