import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { URL, text, palette } from '../Data';

const Header = styled.div`
  width: 100vw;
  height: 50px;
  
  display: flex;
  align-items: center;
  
  background-color: ${palette.header};
`;

const HeaderTitle = styled.div`
  height: 100%;
  
  margin-left: 20px;
  
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 1.3rem;
`;

const Comp: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <HeaderTitle onClick={() => navigate(URL.main)}>
        {text.main.title}
      </HeaderTitle>
    </Header>
  );
}

export default Comp;
