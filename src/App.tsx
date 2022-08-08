import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import './App.scss';
import { Instructions } from './components/Instructions/Instructions';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowHelp = useCallback(() => {
    setIsVisible(true)
  }, [])

  const handleHideHelp = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <div className="App">
      <div
        className={classNames(
          "App__overlay",
          {"App__overlay--visible": isVisible}
        )}
        onClick={() => handleHideHelp()}
      ></div>
      <header className="App__header">
        <Navbar
          onShowHelpHandler={handleShowHelp}
        />
      </header>

      <main className="App__main">
        <Instructions
          isVisible={isVisible}
          onHideHelp={handleHideHelp}
        />

      </main>
    </div>
  );
}

export default App;
