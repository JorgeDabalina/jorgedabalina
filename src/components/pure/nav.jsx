import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { pagesData as list } from '../../data.js';
import { SECTION } from '../../models/project.enum';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}

function Nav() {

  return (

    <nav className='nav flex-sm-column float-start pt-4 '>
      <h1 className='nav-title pb-4'>
        <NavLink to='/'>Jorge Dabaliña</NavLink>
      </h1>
      <ul>
        {list.filter(({ category }) => category === SECTION.PROYECTOS)
          .sort((a, b) => b.id - a.id)
          .map(({ navTitle, pathNav }, index) => (
            <li className='nav-item align-top'
              key={index}>
              <NavLink to={pathNav}
                className={({ isActive }) => linkStyle(isActive).toString()}>
                {navTitle}
              </NavLink>
            </li>
          ))}
        <li className='nav-separator mt-2'>
          <>—</>
        </li>
        <li className='nav-item'>
          <NavLink to='/bio'
            className={({ isActive }) => linkStyle(isActive).toString()}>
            Bio & CV
          </NavLink>


        </li>
        <li className='nav-item'>
          <a target="_blank" href="https://www.instagram.com/jorge.rido/" rel="noopener noreferrer">
            Instagram
          </a>


        </li>
        <li className='nav-item'>
          <a target="_blank" href="mailto:jorgedabalina@gmail.com?Subject=Hola!" rel="noopener noreferrer">
            E-mail
          </a>


        </li>

      </ul>
    </nav>
  )
}

export default Nav
