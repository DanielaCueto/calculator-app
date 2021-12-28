import "../styles/KeyBoard.scss"

function KeyBoard (props) {
    return (
<section className="keyboard" >
<button onClick={props.handleNumber}>7</button>
<button onClick={props.handleNumber}>8</button>
<button onClick={props.handleNumber}>9</button>
<button onClick={props.handleDelete}>DEL</button>
<button onClick={props.handleNumber}>4</button>
<button onClick={props.handleNumber}>5</button>
<button onClick={props.handleNumber}>6</button>
<button onClick={props.handleOperation}>+</button>
<button onClick={props.handleNumber}>1</button>
<button onClick={props.handleNumber}>2</button>
<button onClick={props.handleNumber}>3</button>
<button onClick={props.handleOperation}>-</button>
<button onClick={props.handleNumber} >.</button>
<button onClick={props.handleNumber}>0</button>
<button onClick={props.handleOperation} >/</button>
<button onClick={props.handleOperation}>x</button>
<button onClick={props.handleReset}>RESET</button>
<button onClick={props.handleResult}>=</button>
</section>) }

export default KeyBoard; 