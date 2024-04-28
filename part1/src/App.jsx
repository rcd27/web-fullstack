import {useState} from "react";
import * as PropTypes from "prop-types";

function Display(props) {
    return (
        <div>{props.counter}</div>
    )
}

Display.propTypes = {
    counter: PropTypes.number,
    children: PropTypes.func
};

function Button(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                {props.name}
            </button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.any,
    name: PropTypes.string
};

export default function App() {
    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter + 1)
    }
    function decrease() {
        setCounter(counter - 1)
    }

    return (
        <>
            <Display counter={counter}/>
            <Button onClick={decrease} name={'minus'}/>
            <Button onClick={increase} name={'plus'}/>
        </>
    )
}


