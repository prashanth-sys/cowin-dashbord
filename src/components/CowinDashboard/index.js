// Write your code here
import {Component} from 'react'

import {Bar} from 'recharts'

import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    vaccination: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    console.log(response)
    if (response.ok === true) {
      const fetchData = await response.json()
      console.log(fetchData)
      const data = fetchData.last_7_days_vaccination.map(details => ({
        vaccineDate: details.vaccine_date,
        doseOne: details.dose_1,
        doseTwo: details.dose_2,
      }))
      const dataFromAge = fetchData.vaccination_by_age.map(age => ({
        ages: age.age,
        counts: age.count,
      }))
      const dataFromGender = fetchData.vaccination_by_gender.map(gender => ({
        count: gender.count,
        genders: gender.gender,
      }))
      this.setState({
        vaccination: data,
        vaccinationByAge: dataFromAge,
        vaccinationByGender: dataFromGender,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderDetailsOfCowin = () => {
    const {vaccination, vaccinationByAge, vaccinationByGender} = this.state
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

  renderFailureViwe = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="krishna"
    />
  )

  renderInProgressView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderDetailsOfCowin()
      case apiStatusConstants.inProgress:
        return this.renderInProgressView()
      case apiStatusConstants.failure:
        return this.renderFailureViwe()
      default:
        return null
    }
  }
}

export default CowinDashboard
