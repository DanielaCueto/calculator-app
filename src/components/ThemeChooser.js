import "../styles/ThemeChooser.scss";
import propTypes from "prop-types";

function ThemeChooser(props) {
    const handleRadioChange = (ev) =>{
        const clicked = ev.target.value;
        props.onChange(clicked)
    }
    const selectedTheme = props.themeId; 
  return (
  <section className={`themeChooser themeChooser--theme${selectedTheme}`}>

    <h4 className="themeChooser__title">THEME</h4>
    <div className="themeChooser__toggle">
      <div className="themeChooser__labels">
      <label for="theme1" className="themeChooser__label"> 1 </label>
      <label for="theme2" className="themeChooser__label"> 2 </label>
      <label for="theme3" className="themeChooser__label"> 3 </label>
      </div>
      <div className="themeChooser__inputs">
      <input type="radio" value="1" name="theme" checked={selectedTheme === "1"} onChange={handleRadioChange} className="themeChooser__input" id="theme1"/>
      <input type="radio" value="2" name="theme" checked={selectedTheme === "2"} onChange={handleRadioChange} className="themeChooser__input" id="theme2"/>
      <input type="radio" value="3" name="theme" checked={selectedTheme === "3"} onChange={handleRadioChange} className="themeChooser__input" id="theme3"/>
      </div>
    </div>
  </section>);
}
ThemeChooser.propTypes = {
    themeId: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
}
export default ThemeChooser;

