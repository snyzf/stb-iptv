import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Marker from './Marker';

const StyleWrapper: any = styled.div`
  position: fixed;
  left: 40px;
  top: 40px;
  bottom: 40px;
  width: 280px;
  font-size: 24px;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  box-shadow: 0 0 4px 0px #fff;
  overflow: hidden;

  visibility: ${({ visible }: any) => (visible ? 'visible' : 'hidden')};
`;

const Title = styled.div`
  color: #fff;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow-y: auto;
  height: calc(100% - 66px);
  color: #fff;

  > li {
    margin: 0;
    padding: 16px 20px;
    cursor: pointer;
    text-align: center;
    position: relative;

    &.active,
    &:focus {
      background: #673ab7;
      color: #fff;
    }
  }
`;

const ChannelId = styled.span`
  display: inline-flex;
  width: 30px;
  position: absolute;
  left: 20px;
  bottom: 0;
  top: 0;
  align-items: center;
`;

interface channel {
  id?: string;
  name?: string;
  url?: string;
}

let timer: any = null;

export default ({ data, onChange }: any) => {
  const [item, setItem] = useState<channel>({});
  const [visible, setVisible] = useState(true);
  const onClick = (d: channel) => {
    setItem(d);
    onChange && onChange(d);
  };

  const resetVisible = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => setVisible(false), 6000);
  };

  const onKeyUp = (event: any) => {
    if (event.key === 'Escape') {
      setVisible(false);
      return;
    }

    setVisible(true);

    resetVisible();
  };

  useEffect(() => {
    resetVisible();
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('click', onKeyUp);
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <StyleWrapper visible={visible}>
        <Title>全部频道</Title>
        <List>
          {data.map((d: channel) => (
            <li
              key={d.url}
              className={`${item.id === d.id ? 'active' : ''}`}
              onClick={() => onClick(d)}
            >
              <ChannelId>{d.id}</ChannelId>
              {d.name}
            </li>
          ))}
        </List>
      </StyleWrapper>
      <Marker channel={item} visible={visible} />
    </React.Fragment>
  );
};
