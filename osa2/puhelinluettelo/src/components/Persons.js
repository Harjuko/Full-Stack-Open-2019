import React from 'react'

const Person = ({ name, number }) => {

    return (
        <p>{name} {number} </p>
    )
}

const Persons = ({ persons, Filtered }) => {

    const filtered = persons.filter(person => {
        return person.name.toUpperCase().includes(Filtered.toUpperCase())
    })

    return (
        <div>
          {filtered.map(person =>
            <Person key={person.name} name={person.name} number={person.number} />)}
        </div>
    )
}

export default Persons
