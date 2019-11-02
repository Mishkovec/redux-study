import React from 'react';

const Counter = ({count, inc, dec}) => {
    return (
        <div>
            <h2 >{count}</h2>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
        </div>
    );
};

export default Counter;