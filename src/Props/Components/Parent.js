import React from 'react';
import Child from './Child';

const Parent = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>I am Parent Component</h1>
      <Child />
    </div>
  );
};

export default Parent;
