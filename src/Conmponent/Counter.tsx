import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const handleIncrease = (): void => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <h1>Counter</h1>
            <h2>0</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;
