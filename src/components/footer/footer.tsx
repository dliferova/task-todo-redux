import React from 'react';
import {Container, Typography} from '@material-ui/core';

const Footer = () => {
  return (
    <Container
      maxWidth={"xl"}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '20px'
      }}
    >
      <Typography
        component={'span'}
        align={'left'}
        style={{
          fontSize: '14px',
          color: '#515369'
        }}>Created by <a href="https://github.com/dliferova">Daria Liferova</a>
      </Typography>
    </Container>
  );
};

export default Footer;
