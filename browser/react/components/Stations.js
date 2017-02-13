import React, {Component} from 'react'
import {Link} from 'react-router'

export default function ({stations}) {

    const genres = Object.keys(stations)

    return (
        <div>
            <h3>Stations</h3>
            <div className="list-group">
            {
                genres.map(genre => {
                return (
                    <div className="list-group-item" key={genre}>
                        <Link to={`/stations/${genre}`}>{genre}</Link>
                    </div>
                    );
                })
            }
            </div>
        </div>
    )
}
