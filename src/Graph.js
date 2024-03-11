import React, { useState, useEffect } from 'react';
import john from './images/people/john.jpg';
import nora from './images/people/nora.jpg';
import link from './images/link.svg';
import "./styles/graph.css";
import progress from './something_copy';
import "./styles/something.css"

function Graph() {
    useEffect(() => {
        const masterProgress = document.getElementById('masterProgress');  
        // progress(75, masterProgress, "Male", "#FBEEAA");
        // progress(66, masterProgress, "Female", "#D5D3F9");
        // progress(52, masterProgress, "Other", "#A091EC");


        progress(75, masterProgress, "Male", "#D5D3F9", true, 1,"black");
        progress(66, masterProgress, "Female", "#FBEEAA", true, 1,"black");
        progress(52, masterProgress, "Others", "#A091EC", true, 1,"black");
      }, []);
  return (
    <div className='graph-cont'>
      <h2 className='name'>Demographics Overview</h2>
      <div className="sep"></div>
      <div className="graph-box">
        <div className="master" id="masterProgress" style={{ height: '220px' }}></div>
      </div>
      <div className="sep"></div>
      <div className="followers-cont">
        <h2>Recent Followers</h2>
        <div className="followers">
          <img src={nora} alt="" className='profile' />
          <h3>Nelly</h3>
          <img src={link} alt="" className='link' />
          <h5>@nellynate</h5>
        </div>
        <div className="followers">
          <img src={nora} alt="" className='profile' />
          <h3>Nelly</h3>
          <img src={link} alt="" className='link' />
          <h5>@nellynate</h5>
        </div>
        <div className="followers">
          <img src={nora} alt="" className='profile' />
          <h3>Nelly</h3>
          <img src={link} alt="" className='link' />
          <h5>@nellynate</h5>
        </div>
      </div>
    </div>
  );
}

export default Graph;
