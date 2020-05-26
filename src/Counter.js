import React, { Component } from 'react';
import { ThemeContext } from './App';

// CLASS COMPONENT STRUCTURE 
// ** SET THE INITIAL STATE USING THE CONSTRUCTOR FUNCTION W/ SUPER() AND PASSING PROPS IN BOTH **
// IN THIS EXAMPLE, WE ASSIGNED THE COUNT VALUE TO 'INITIALCOUNT' AND PASSED THE 'INITIALCOUNT' INSIDE THE COUNTER COMPONENT IN OUR MAIN APP COMPONENT
// WHEN USING CLASS COMPONENTS, WE USE THE 'THIS' KEYWORD WHEN DEALING WITH PROPS AND STATE -- CAN ALSO DESTRUCTURE PROPS AND/ OR STATE AND ASSIGN IT TO A VARIABLE SO WE DON'T HAVE TO USE this.props or this.state EVERY TIME WE PASS THEM
// WHEN PASSING THE ONCLICK PROPERTY IN OUR BUTTON, WE PASS IT AS A FUNCTION
// WE ALSO PASS prevState AS A FUNCTION WHEN CHANGING THE STATE INSIDE OF OUR changeCount FUNCTION SO THAT EVERY TIME OUR STATE IS CHANGED, WE ARE CHANGING IT BASED ON OUR PREVIOUS STATE INSTEAD OF THE INITIAL STATE
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        }
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <button>{this.state.count}</button>
                        <button style={style} onClick={() => this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    };

    changeCount(amount) {
        this.setState(prevState => {
            return { count: prevState.count + amount }
        });
    };
};

export default Counter;