import "../styles/KeyBoard.scss"

function KeyBoard (props) {
    return (
<section className="keyboard" >
<button onClick={props.handleNumber} className="keyboard__key">7</button>
<button onClick={props.handleNumber} className="keyboard__key">8</button>
<button onClick={props.handleNumber} className="keyboard__key">9</button>
<button onClick={props.handleDelete} className="keyboard__key">DEL</button>
<button onClick={props.handleNumber} className="keyboard__key">4</button>
<button onClick={props.handleNumber} className="keyboard__key">5</button>
<button onClick={props.handleNumber} className="keyboard__key">6</button>
<button onClick={props.handleOperation} className="keyboard__key">+</button>
<button onClick={props.handleNumber} className="keyboard__key">1</button>
<button onClick={props.handleNumber} className="keyboard__key">2</button>
<button onClick={props.handleNumber} className="keyboard__key">3</button>
<button onClick={props.handleOperation} className="keyboard__key">-</button>
<button onClick={props.handleNumber} className="keyboard__key">.</button>
<button onClick={props.handleNumber} className="keyboard__key">0</button>
<button onClick={props.handleOperation} className="keyboard__key">/</button>
<button onClick={props.handleOperation} className="keyboard__key">x</button>
<button onClick={props.handleReset} className="keyboard__key">RESET</button>
<button onClick={props.handleResult} className="keyboard__key">=</button>
</section>) }

export default KeyBoard; 