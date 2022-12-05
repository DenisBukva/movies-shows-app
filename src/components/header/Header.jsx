/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Navlist = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'Tv Shows',
    path: '/tv',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const active = Navlist.findIndex((el) => el.path === pathname);

  return (
    <div ref={headerRef} className="header">
      <div className="header__Wrap Conteiner">
        <div className="header__Logo">
          <Link to="/">Movie App </Link>
        </div>
        <div className="header__Nav">
          <ul>
            {Navlist.map((el, i) => {
              return (
                <li key={i} className={`${i === active ? 'active' : ''}`}>
                  <Link to={`${el.path}`}>{el.display}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
