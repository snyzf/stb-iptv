import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  right: 40px;
  top: 40px;
  width: 220px;
  text-align: center;
  color: #fff;
`;

const No = styled.div`
  font-size: 60px;
`;
const Channel = styled.div`
  font-size: 30px;
`;

export default (props: any) => {
  const { id, name } = props.channel;

  return (
    <StyledWrapper>
      <No>{id}</No>
      <Channel>{name}</Channel>
    </StyledWrapper>
  );
};
