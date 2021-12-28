import "../styles/ThemeChooser.scss";
import propTypes from "prop-types";

function ThemeChooser(props) {
    const handleRadioChange = (ev) =>{
        const clicked = ev.target.value;
        props.onChange(clicked)
    }
    const selectedTheme = props.themeId; 
  return (
  <section className="themeChooser">
    <h4 className="themeChooser__title">THEME</h4>
    <label className="themeChooser__option"> 1 <input type="radio" value="1" name="theme" checked={selectedTheme === "1"} onChange={handleRadioChange} /></label>
    <label className="themeChooser__option"> 2 <input type="radio" value="2" name="theme" checked={selectedTheme === "2"} onChange={handleRadioChange}/></label>
    <label className="themeChooser__option"> 3 <input type="radio" value="3" name="theme" checked={selectedTheme === "3"} onChange={handleRadioChange}/></label>
  </section>);
}
ThemeChooser.propTypes = {
    themeId: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
}
export default ThemeChooser;

