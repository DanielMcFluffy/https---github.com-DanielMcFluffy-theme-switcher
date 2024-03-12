import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import sun from './assets/sun.webp';
import moon from './assets/moon.jpg';


export default function Form() {
  const currentTheme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  const updatedTheme = currentTheme === 'light' ? 'dark' : 'light'
  const [title, setTitle] = useState('Welcome')

  const handleSignUp = () => {
    setTitle('Sign Up');
  }

  const handleLogIn = () => {
    setTitle('Log In');
  }


  return (
    <Panel title={title} >
      <Button
        onClick={handleSignUp}
      >Sign up</Button>

      <Button
        onClick={handleLogIn}
      >Log in</Button>
      <button onClick={() => setTheme(updatedTheme)} >
        Toggle Theme
      </button>
    </Panel>
  )
}


function Panel({ title, children }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'panel-' + theme;
  return (
    <>
      <section className={className} style={{ width: '40%' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }} >
          <div style={{ display: 'inline-block' }} >
            <h1>{title}</h1>
            {children}
          </div>
          <div
            style={{ marginLeft: '40%' }}
          >
            <img
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
              src={theme === 'light' ? sun : moon}
              alt="sun image" />
          </div>
        </div>

      </section>
    </>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'button-' + theme;
  return (
    <button style={{ cursor: 'pointer' }}
      onClick={onClick}
      className={className} >
      {children}
    </button>
  )
}