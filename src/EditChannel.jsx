import React, { useState } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  height: 25px;
  width: 600px;
`;

const Button = styled.button`
  background: #6200ee;
  color: #fff;
  font-size: 16px;
`;

export default () => {
  const [value, setValue] = useState();

  const onClick = ({ target: { value } }) => setValue(value);
  const onButtonClick = () => {
    const n = value
      .split(/\n/g)
      .map(d => d.split(','))
      .map((d, k) => ({ id: k, name: d[0], url: d[1] }));
    setValue(n);
    console.log(n);
  };

  return (
    <div>
      <div>
        <textarea name="name" rows="20" cols="100" onChange={onClick} />
        <textarea
          rows="20"
          cols="100"
          value={JSON.stringify(value)}
          style={{ display: value ? 'block' : 'none' }}
        ></textarea>
      </div>

      <Button onClick={onButtonClick}>submit</Button>
    </div>
  );
};
