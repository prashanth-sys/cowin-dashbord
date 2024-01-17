// Write your code here
import {Component} from 'react'

import {Bar} from 'recharts'

import './index.css'

class CowinDashboard extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="krishna"
            className="logo"
          />
          <h1 className="logo-name">Co-WIN</h1>
        </div>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        <div className="card-container">
          <p className="vaccination">Vaccination Coverage</p>
          <Bar />
        </div>
      </div>
    )
  }
}

export default CowinDashboard
