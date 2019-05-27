import React, { useState } from 'react'

const Persons = ({persons}) => {
  return (
    persons.map(part => {
      return(
          <div key={part.name}>
            <p>{part.name} {part.number}</p>
          </div>
      )
    })
  )
}


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName, number: newNumber
  }

  const nameExists = persons.some(p => p.name === newName)

  if (nameExists === true)

    { window.alert(`${newName} on jo luettelossa`)
     setNewName('')
    setNewNumber('')}

    else

    {setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }


  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          numero: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <Persons persons={persons}/>
    </div>
  )

}

export default App
