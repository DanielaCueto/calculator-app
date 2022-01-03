import { useState } from "react";
import "../styles/App.scss";
import ThemeChooser from "./ThemeChooser";
import KeyBoard from "./KeyBoard";

function App() {
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState('0')
  const [operation, setOperation] = useState ("")
  const [firstDigit, setFirstDigit] = useState(true)
  const [chosenTheme, setChosenTheme] = useState("1")
  console.log(number, previousNumber, operation);
  
  
  const handleNumber = (ev) => {
    const newDigit = ev.target.innerHTML;
    if(firstDigit){
      setNumber(newDigit);
    }else{
      setNumber(number + newDigit);
    }
    setFirstDigit(false)
    
  };

  const handleDelete = () => {
    const newStatus = number.slice(0, number.length - 1);
    if(newStatus === ""){
      setNumber("0");
      setFirstDigit(true)
    }else{
    setNumber(newStatus);
    }
  };

  const handleReset = () => {
    setFirstDigit(true)
    setNumber("0");
    setPreviousNumber('0');
    setOperation("");
  };

  const handleOperation = (ev) => {
    
    setPreviousNumber(number); 
    setOperation(ev.target.innerHTML);
    setFirstDigit(true)
    
  }

  const handleResult = () => {
    const num1 = parseFloat(previousNumber);
    const num2 =  parseFloat(number)
    let lastResult;
    if(operation === '+'){
      lastResult = num1+num2 ;
    }else if (operation === '-'){
      lastResult = num1 - num2;
      
    } else if(operation === '/'){
      lastResult = num1 / num2;
    }
  else if(operation === 'x'){
    lastResult = num1 * num2;
  }else{
    return 
  }
    setNumber(`${lastResult}`)
    setPreviousNumber('0')
    setOperation("")
    setFirstDigit(true)
    
  }

  
 // cuando tengo que usar una expresión de js en medio de JSX --> entre {} ... si es una cadena donde meter una variable--> interpolar con las ``
  return (
    <div className={`App App--theme${chosenTheme}`}>
      <div className="App__wrapper">
      <header className="App__header">
        <h1>calc</h1>
        <ThemeChooser onChange={setChosenTheme} themeId={chosenTheme}>
        </ThemeChooser>
      </header>
      <input type="text" name="name" value={number} readOnly  className="App__display"/>
      
      <KeyBoard handleNumber={handleNumber} handleDelete={handleDelete} handleOperation={handleOperation} handleReset={handleReset} handleResult={handleResult} themeId={chosenTheme} operation={operation}></KeyBoard>
    </div>
    </div>
  );
}

export default App;
