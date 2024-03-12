import { useState } from 'react'
import './App.css'
import Form from './Form'
import ThemeContext from './ThemeContext';
import Footer from './Footer';


export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }} >
        <Form />
        <label>
          <input
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          Use dark mode
        </label>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}