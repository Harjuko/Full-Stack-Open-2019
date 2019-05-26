import React from 'react'

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

export default Course
