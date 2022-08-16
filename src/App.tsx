import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Board } from './components/Board/Board';
import { Instructions } from './components/Instructions/Instructions';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [word1, setWord1] = useState(['', '', '', '', '']);
  const [word2, setWord2] = useState(['', '', '', '', '']);
  const [word3, setWord3] = useState(['', '', '', '', '']);
  const [word4, setWord4] = useState(['', '', '', '', '']);
  const [word5, setWord5] = useState(['', '', '', '', '']);
  const [word6, setWord6] = useState(['', '', '', '', '']);
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleShowHelp = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleHideHelp = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleKeyPress = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const word: string[] = word1;

      word1[word.indexOf('')] = event.currentTarget.value;
      setWord1([...word]); 
  }

  useEffect(() => {
    setGuesses([word1.join('')]);
    console.log('updated');
  }, [word1]);

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

        <Board
          word1={word1}
          word2={word2}
          word3={word3}
          word4={word4}
          word5={word5}
          word6={word6}
        />
        <Keyboard onKeyPress={handleKeyPress}/>
      </main>
    </div>
  );
}

export default App;
