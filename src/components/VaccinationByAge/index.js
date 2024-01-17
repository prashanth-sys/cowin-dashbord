// Write your code here
import './index.css'

import {BarChart, XAxis, YAxis, Legend, Bar} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="card-container">
      <h1 className="vaccination">Vaccination bg age</h1>
      <BarChart width={400} height={300} data={vaccinationByAge}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  )
}
export default VaccinationByAge
