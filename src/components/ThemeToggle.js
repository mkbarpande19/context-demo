import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/* Class Component Pattern */
// export default class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toggle Theme</button>;
//   }
// }

/* Functional Component Pattern */
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
