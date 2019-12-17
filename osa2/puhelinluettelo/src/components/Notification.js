import React from 'react'

const Notification = ({ message, classes = "success" }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={classes}>
           <p> {message} </p>
        </div>
    )
}

export default Notification
