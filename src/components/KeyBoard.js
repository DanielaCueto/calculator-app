import propTypes from "prop-types";
import "../styles/KeyBoard.scss"

function KeyBoard (props) {
    return (
<section className={`keyboard keyboard--theme${props.themeId}`} >
<button onClick={props.handleNumber} className="keyboard__key">7</button>
<button onClick={props.handleNumber} className="keyboard__key">8</button>
<button onClick={props.handleNumber} className="keyboard__key">9</button>
<button onClick={props.handleDelete} className="keyboard__key keyboard__key--delete">DEL</button>
<button onClick={props.handleNumber} className="keyboard__key">4</button>
<button onClick={props.handleNumber} className="keyboard__key">5</button>
<button onClick={props.handleNumber} className="keyboard__key">6</button>
<button onClick={props.handleOperation} className={'keyboard__key' + (props.operation === '+' ? ' keyboard__key--clicked' : '' )}>+</button>
<button onClick={props.handleNumber} className="keyboard__key">1</button>
<button onClick={props.handleNumber} className="keyboard__key">2</button>
<button onClick={props.handleNumber} className="keyboard__key">3</button>
<button onClick={props.handleOperation} className={'keyboard__key' + (props.operation === '-' ? ' keyboard__key--clicked' : '' )}>-</button>
<button onClick={props.handleNumber} className="keyboard__key">.</button>
<button onClick={props.handleNumber} className="keyboard__key">0</button>
<button onClick={props.handleOperation} className={'keyboard__key' + (props.operation === '/' ? ' keyboard__key--clicked' : '' )}>/</button>
<button onClick={props.handleOperation} className={'keyboard__key' + (props.operation === 'x' ? ' keyboard__key--clicked' : '' )}>x</button>
<button onClick={props.handleReset} className=" keyboard__key keyboard__key--reset">RESET</button>
<button onClick={props.handleResult} className="keyboard__key keyboard__key--equal">=</button>
</section>) }

KeyBoard.propTypes = {
    themeId: propTypes.string.isRequired,
    handleNumber: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired,
    handleOperation: propTypes.func.isRequired,
    handleReset: propTypes.func.isRequired,
    handleResult: propTypes.func.isRequired,
    operation: propTypes.string.isRequired,

}


export default KeyBoard; 