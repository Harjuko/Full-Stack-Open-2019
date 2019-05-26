import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({course}) => {
  const rows = () =>
    course.parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />)
  return (
    <div>
      {rows()}
    </div>
  )
}

const Total = ({course}) => {
 const exercises = course.parts.map(part => part.exercises)
 const value = (exercises.reduce((s, p) => s + p))
   return (
    <p>yhteensä {value} </p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

