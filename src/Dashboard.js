import React from 'react'
import { ReactDOM } from 'react'
import Sidebar from './Sidebar'
import Stats from './Stats'
import './styles/dashboard.css'
import './styles/stats.css'

const Dashboard = () => {
  return (
    <div className='dash'>
        <Sidebar/>
        <Stats/>
        <Sidebar/>
    </div>
  )
}

export default Dashboard;
