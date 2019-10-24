import React from 'react'

const Filter = (props) => {
  return(
    <form onSubmit={props.handleFilterChange}>
      <div>
        Filter: <input
        value={props.Filtered}
        onChange={props.handleFilterChange} />
      </div>
    </form>
  )
}

export default Filter
