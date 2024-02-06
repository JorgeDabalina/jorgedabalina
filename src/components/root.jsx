import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './pure/nav';
import NavMobile from './pure/navMobile';

const Root = ({ data }) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 576px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 576px)")
      .addEventListener('change', e => setMatches(e.matches));
    console.log('matches', matches);
  });

  return (
    <div className='container-s text-lefty px-3'
        style={{minHeight: "95vh"}}>
      { matches ? (
        <div className='row justify-content-sm-center'>
          <div className='col-sm-auto pb-4 px-4 '>
            <Nav />
          </div>
          <div className='col-sm-7 py-4 px-4'>
            <Outlet />
          </div>
        </div>
      ) : (
        <div className='row justify-content-sm-center '>
          <div className='col-sm-auto py-4 px-4 sticky-top bg-body'>
            <NavMobile />
          </div>
          <div className='col-sm-7 py-0 px-4 '>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Root;