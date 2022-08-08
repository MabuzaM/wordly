import React, { FC } from 'react';
import '../Navbar/Navbar.scss';
import {
  helpIcon,
  menuIcon,
  settingsIcon,
  statsIcon,
} from '../../icons';

interface NavbarProps {
  onShowHelpHandler: () => void;
}

export const Navbar: FC<NavbarProps> = React.memo(({
  onShowHelpHandler,
}) => {
  return (
    <nav className="Navbar">
      <article className="Navbar__menu">
        <img
          src={menuIcon}
          alt="menu"
          className="Navbar__icon"
        />
      </article>

      <div className="Navbar__title">
        Wordle
      </div>

      <article className="Navbar__icons-right">
        <img
          src={helpIcon}
          alt="help"
          className="Navbar__icon"
          onClick={() => onShowHelpHandler()}
        />

        <img
          src={statsIcon}
          alt="statistics"
          className="Navbar__icon"
        />

        <img
          src={settingsIcon}
          alt="settings"
          className="Navbar__icon"
        />
      </article>
    </nav>
  )
});
