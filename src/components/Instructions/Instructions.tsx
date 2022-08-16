import React, { FC } from 'react';
import './Instructions.scss'
import { sanitize } from 'dompurify';
import classNames from 'classnames';
import closeX from '../../icons/close-X.svg';

interface InstructionsProps {
  isVisible: boolean;
  onHideHelp: () => void;
}

export const Instructions: FC<InstructionsProps> = React.memo(({
  isVisible,
  onHideHelp,
}) => {
  const exampleData = [
    {
      "words": ['Weary', 'Pills', 'Vague'],
      "info": [
        'The letter <strong>W</strong> is in the word and in the correct spot.',
        'The letter <strong>I</strong> is in the word but in the wrong spot.',
        'The letter <strong>U</strong> is not in the word in any spot.',
      ]
    }
  ]

  const sanitizer = sanitize;

  return (
    <article className={classNames("Instructions", {"Instructions--visible": isVisible})}>
      <div className="Instructions__top-content">
        <h2 className="Instructions__title">
          How to play

        </h2>
        <div
            className="Instructions__close-X"
          >
            <img
              src={closeX}
              alt="close button"
              className="Instructions__close-icon"
              onClick={() => onHideHelp()}
            />
          </div>
      </div>

      <p className="Instructions__text">
        Guess the <strong>WORDLE</strong> in 6 tries.
      </p>

      <p className="Instructions__text">
        Each guess must be a valid 5-letter word. Hit the enter button to submit.
      </p>

      <p className="Instructions__text">
        After each guess, the color of the tiles will change to show how close your guess was to the word.
      </p>

      <hr />

      <p className="Instructions__title-small">
        <strong>
          Examples
        </strong>
      </p>

      <div className="Instructions__example">
      {
        exampleData.map((data) => {
          const { words, info} = data;
          return words.map((word, i) => (
            <>
              <div className="Instructions__letter-wraper" key={i}>
                {
                  word.split('').map((char, index) => (
                    <div className="Instructions__letter" key={index}>
                      {char} 
                    </div>
                  ))
                }
              </div>

              <p
                className="Instructions__description"
                dangerouslySetInnerHTML={{__html: sanitizer(info[i])}}
                key={info[i]}
              />
            </>
          ))          
        })
      }
      </div>

      <hr />

      <p className="Instructions__text">
        <strong>A new WORDLE will be available each day!</strong>
      </p>

      <p className="Instructions__text">
        Never miss a Wordle.
        <strong>Sign up</strong>
        for our daily reminder email.
      </p>

      <hr />


    </article>
  );
});
