import React, { useState, useEffect } from 'react';
import './Globals.css'
import Header from './components/Header/Header';
import Switch from './components/Switch/Switch';
import TopCardList from './components/TopCardList/TopCardList';
import Overview from './components/Overview/Overview';

function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)

  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList/>
      <Overview/>
    </main>
  );
}

export default App;
