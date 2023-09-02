import React from 'react';

import Page from '../../Components/Page';

import { text } from '../../Data';

const Comp: React.FC = () => {
  return (
    <Page>
      {text.spectate.announcement}
    </Page>
  );
}

export default Comp;
