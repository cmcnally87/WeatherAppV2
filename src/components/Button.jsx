import React from 'react'

export default function Button(props) {
    return (
        <button className="btn btn-primary" name={props.city} value={props.city} onClick={props.getWeather}>
            <h2>{props.city}</h2>
        </button>
    )
}
