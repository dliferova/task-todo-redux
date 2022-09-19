import React from 'react';
import {Container, Typography} from '@material-ui/core';

const Header = () => {
  return (
    <Container
      maxWidth={"xl"}
      style={{
        padding: '20px 24px',
        marginBottom: '70px'
      }}
    >
      <Typography
        align={'left'}
        style={{
          fontSize: '36px',
          letterSpacing: '16.8px',
          fontWeight: 'bold',
        }}>TODO</Typography>
    </Container>
  );
};

export default Header;
