import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [Filtered, setFiltered] = useState('')

  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])

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

  const handleFilterChange = (event) => {
    setFiltered(event.target.value)
  }


  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter handleFilterChange={handleFilterChange} Filtered={Filtered} handleFilterChange={handleFilterChange} />
      <Form addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numerot</h2>
      <Persons persons={persons} setPersons={setPersons} Filtered={Filtered} />
    </div>
  )

}

export default App
