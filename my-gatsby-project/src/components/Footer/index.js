import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/aticodein" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.facebook.com/attila.szaloki"
          rel="noreferrer noopener"
          target="_blank"
        >
          Facebook
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/attila-szaloki-9b205b36/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
