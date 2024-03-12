import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Footer() {
  const theme = useContext(ThemeContext).theme; //using the theme context value

  return (
    <>
      <p>Thank you for visiting! {theme === 'light' ? `Enjoy the light theme!` : 'Have a great time with dark theme!'}
      </p>
    </>
  )
}