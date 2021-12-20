import "../styles/App.scss";

function App() {
  return (
    <>
      <header className="header">
        <h1>Calc</h1>
        <h2>THEME</h2>                 
        <span>1</span>
        <span>2</span>
        <span>3</span>
          <input type="checkbox" checked/>
        
      </header>
      <section>
        <input type="text" />
      </section>
      <section>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>DEL</button>
      </section>
      <section>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </section>
      <section>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <label class="switch">
          
        </label>
      </section>
      <section>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
      </section>
      <section>
        <button>RESET</button>
        <button>=</button>
      </section>
    </>
  );
}

export default App;
