import React from 'react'
import john from './images/people/john.jpg'
import link from './images/link.svg'
import "./styles/graph.css"

function Graph() {
  return (
    <div className='graph-cont'>
        <h2 className='name'>Demographics Overview</h2>
        <div className="sep"></div>
        <div className="graph-box">
        <div class="circle">
            <div class="inner-circle">
                <div class="innermost-circle"></div>
            </div>
        </div>
        </div>
        <div className="sep"></div>
        <div className="followers-cont">
            <h2>Recent Followers</h2>
            <div className="followers">
                <img src={john} alt="" className='profile'/>
                <h3>John</h3>
                <img src={link} alt="" className='link'/>
                <h5>@johndesigns</h5>
            </div>
            <div className="followers">
                <img src={john} alt="" className='profile'/>
                <h3>John</h3>
                <img src={link} alt="" className='link'/>
                <h5>@johndesigns</h5>
            </div>
            <div className="followers">
                <img src={john} alt="" className='profile'/>
                <h3>John</h3>
                <img src={link} alt="" className='link'/>
                <h5>@johndesigns</h5>
            </div>
        </div>
    </div>
  )
}

export default Graph;