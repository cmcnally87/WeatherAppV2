import React from 'react'

export default function WeatherTable(props) {
    return (
        <div className='row' style={{ visibility: props.weather.city !== undefined? 'visible': 'hidden'}} >
            
            <div className='col'>
            <ul className='list-group'>
                <li className='list-group-item'><h2 className="badge badge-primary">City:</h2> <h2>{props.weather.city}</h2></li>
                <li className='list-group-item'><h2 className="badge badge-primary">Temp:</h2> <h2> {props.weather.temperature} C</h2></li>
                <li className='list-group-item'><h2 className="badge badge-primary">Humidity:</h2> <h2> {props.weather.humidity}</h2></li>
                <li className='list-group-item'><h2 className="badge badge-primary">Description:</h2> <h2> {props.weather.description}</h2></li>
            </ul>
            </div>
        </div>
    )
}
