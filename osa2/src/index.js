import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => {
  return (
    <h2>{course.name}</h2>
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
    <p>yhteensä {value} tehtävää </p>
  )
}

const Course = ({course}) => {
  return (
    course.map(part => {
      return(
          <div key={part.id}>
            <Header course={part} />
            <Content course={part} />
            <Total course={part} />
          </div>
      )
    })
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Opetusohjelma</h1>
      <Course course={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

