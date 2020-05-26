import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

// FUNCTIONAL COMPONENT W/ HOOKS
// THE 'this' KEYWORD IS NOT USED INSIDE OF FUNCTIONAL COMPONENTS
// WE PASS PROPS INSIDE OF OUR CounterHooks COMPONENT
// USING OBJECT DECONSTRUCTION TO MAKE PROPS EASIER TO READ AND USE
// SETTING OUR STATE IN A SINGLE VARIABLE THAT WILL ALWAYS BE AN ARRAY OF TWO ITEMS --
// THE FIRST IS THE STATE ITSELF, THE SECOND IS THE FUNCTION THAT CHANGES THE STATE
// 'count' WOULD BE THE SAME AS this.state = { count: props.initialCount } FROM OUR CLASS COMPONENT
// 'setCount' WOULD BE THE SAME AS USING this.setState() FROM OUR CLASS COMPONENT
// USING FUNCTIONAL COMPONENTS W/ HOOKS VS CLASS COMPONENTS MAKES FOR LESS 'CLUNKY' CODE AND EASIER TO READ AND INTERPRET
const CounterHooks = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    const style = useContext(ThemeContext);

    return (
        <div>
            <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button>{count}</button>
            <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
};

export default CounterHooks;