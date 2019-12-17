import React from 'react'
import personService from '../services/Persons'

const Person = ({ name, number, setPersons, setMessage, id }) => {
    const removePerson = (id, name) => {

        if (window.confirm(`Haluatko varmasti poistaa kohteen ${name}`)) {
            personService.remove(id).then(() => {

                setMessage(
                    { message: `${name} poistettu.`, style: "success" }
                )
                setTimeout(() => {
                    setMessage({ message: null })
                }, 3000)

                personService.getAll()
                    .then(data => {
                        setPersons(data)
                    })
            })
        }
    }

    return (
        <p>{name} {number} <button onClick={() => { removePerson(id, name) }}>poista</button></p>
    )
}

const Persons = ({ persons, Filtered, setPersons, setMessage }) => {

    const filtered = persons.filter(person => {
        return person.name.toUpperCase().includes(Filtered.toUpperCase())
    })

    return (
        <div>
          {filtered.map(person =>
            <Person key={person.name} name={person.name} number={person.number} setPersons={setPersons} id={person.id} setMessage={setMessage}/>)}
        </div>
    )
}

export default Persons
