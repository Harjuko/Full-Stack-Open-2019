import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/Persons'
import Notification from './components/Notification'
import axios from 'axios'
import './index.css'



const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [Filtered, setFiltered] = useState('')
  const [Message, setMessage] = useState({ message: null})

  useEffect(() => {
    personService.getAll()
    .then(data => {
      setPersons(data)
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

    {
      personService.create(personObject)
      .then(data => setPersons(persons.concat(personObject)))
      .then(() => {

              setMessage(
                { message: `${newName} lisätty.`, style: "success" }
                )
              setTimeout(() => {
                setMessage({message: null})
              }, 3000)
            })

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
    <div className='Wrapper'>
      <Notification message={Message.message} classes={Message.style} />
      <h2>Puhelinluettelo</h2>
      <Filter handleFilterChange={handleFilterChange} Filtered={Filtered} handleFilterChange={handleFilterChange} />
      <Form addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} setMessage={setMessage} />
      <h2>Numerot</h2>
      <Persons persons={persons} setPersons={setPersons} Filtered={Filtered} setMessage={setMessage} />
    </div>
  )

}

export default App
