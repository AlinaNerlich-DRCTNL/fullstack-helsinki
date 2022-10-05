import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const countGood = () => setGood(good + 1)
  const countNeutral = () => setNeutral(neutral + 1)
  const countBad = () => setBad(bad + 1)
  let sum = (good + neutral + bad)

  const calculateAverage = () => {
    return ((good + neutral + bad)/3)
    }

  const calculatePositive = () => {
    return (good/sum *100)
  }
  

  return (
    <div>
      <h1>give Feedback here</h1>
      <div>
        <Button onClick={countGood} title={'Good'}/>
        <Button onClick={countNeutral} title={'Neutral'}/>
        <Button onClick={countBad} title={'Bad'}/>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} sum={sum} calculateAverage={calculateAverage()} calculatePositive={calculatePositive()}/>
    </div>
  )
}

export default App