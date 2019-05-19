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

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <h1>statistiikka</h1>
      <Display text='Hyvä' value={good} />
      <Display text='Neutraali' value={neutral} />
      <Display text='Huono' value={bad} />
      <p>Yhteensä {good + neutral + bad}</p>
      <p>Keskiarvo {(good - bad) / (good + neutral + bad) }</p>
      <p>Positiivisia {100 * ((good) / (good + neutral + bad)) } %</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
