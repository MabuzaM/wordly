import React, { FC } from 'react';
import './Board.scss';

interface BoardProps {
  word1: string[];
  word2: string[];
  word3: string[];
  word4: string[];
  word5: string[];
  word6: string[];
}

export const Board: FC<BoardProps> = React.memo((
  {
    word1,
    word2,
    word3,
    word4,
    word5,
    word6
  }
) => {
  return (
    <article className="Board">
      <div className="Board__row">
        {word1.map((letter: string) => (
          <div className="Board__cell">{letter}</div>
        ))}
      </div>

      <div className="Board__row">
        {word2.map((letter: string) => (
          <div className="Board__cell">{letter}</div>
        ))}
      </div>

      <div className="Board__row">
        {word3.map((letter: string) => (
          <div className="Board__cell">{letter}</div>
        ))}
      </div>

      <div className="Board__row">
        {word4.map((letter: string) => (
          <div className="Board__cell">{letter}</div>
        ))}
      </div>

      <div className="Board__row">
        {word5.map((letter: string) => (
          <div className="Board__cell">{letter}</div>
        ))}
      </div>

      <div className="Board__row">
        {word6.map((letter: string) => (
          <div className="Board__cell">{letter}</div>
        ))}
      </div>
    </article>
  )
});
