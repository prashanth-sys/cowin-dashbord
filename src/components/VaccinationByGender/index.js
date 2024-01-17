// Write your code here
import './index.css'

import {BarChart, XAxis, YAxis, Legend, Bar} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="card-container">
      <p className="vaccination">Vaccination by gender</p>
      <BarChart width={400} height={300} data={vaccinationByGender}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  )
}
export default VaccinationByGender
