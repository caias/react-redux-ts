import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: #ebecf0;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1.25rem;
  margin-top: 2rem;
`;

const Section = ({children}) => {
  return (
    <SectionContainer>{children}</SectionContainer>
  );
}

export default Section;