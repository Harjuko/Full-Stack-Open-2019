import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <p> {props.text} {props.value} </p>
)

const Statistic = (props) => {
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props.choice
  if (good + neutral + bad != 0) {

  return (
    <div>
      <Statistic text='Hyvä' value={good} />
      <Statistic text='Neutraali' value={neutral} />
      <Statistic text='Huono' value={bad} />
      <Statistic text='yhteensä' value={good + neutral + bad} />
      <Statistic text='Keskiarvo' value={(good - bad) / (good + neutral + bad)} />
      <Statistic text='Positiivisia' value={`${100 * (good / (good + neutral + bad))} %`} />
    </div>
    )
} else {
    return (
      <p>Ei yhtään palautetta annetu</p>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedbacks = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  const goodReview = () => {
    setGood(good + 1)
  }

  const neutralReview = () => {
    setNeutral(neutral + 1)
  }

  const badReview = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={goodReview} text='Hyvä'  />
      <Button handleClick={neutralReview} text='Neutraali'  />
      <Button handleClick={badReview} text='Huono'  />
      <Statistics choice={feedbacks} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
