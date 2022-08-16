import React, { FC } from 'react';
import './Keyboard.scss';
import { ROW1_DATA, ROW2_DATA, ROW3_DATA } from '../../data/keyBoardData';


interface KeyboardProps {
  onKeyPress: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Keyboard: FC<KeyboardProps> = React.memo(({ onKeyPress }) => {
  return (
    <article className="Keyboard">
      <div className="Keyboard__row Keyboard__row--1">
        {
          ROW1_DATA.map((data: string) => (
            <button
              className="Keyboard__key"
              data-key={data}
              key={data}
              value={data}
              onClick={(event) => {onKeyPress(event)}}
            >
              {data}
            </button>
          ))
        }
      </div>

      <div className="Keyboard__row Keyboard__row--2">
        {
          ROW2_DATA.map((data: string) => (
            <button
              className="Keyboard__key"
              data-key={data}
              key={data}
              value={data}
              onClick={(event) => {onKeyPress(event)}}
            >
              {data}
            </button>
          ))
        }
      </div>

      <div className="Keyboard__row Keyboard__row--3">
        {
          ROW3_DATA.map((data: string) => (
            <button
              className="Keyboard__key"
              data-key={data}
              key={data}
              value={data}
              onClick={(event) => {onKeyPress(event)}}
            >
              {data}
            </button>
          ))
        }
      </div>
    </article>
  );
});
