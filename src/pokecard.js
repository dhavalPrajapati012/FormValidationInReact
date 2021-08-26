import React, { Component } from 'react'
import "./App.css"

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props
        return (
            <div class="card col-lg-3">
                <p className='test'>{name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Notloaded" />
                <p>Type : {type}</p>
                <p>Exp : {exp} </p>
            </div>
        )
    }
}

export default Pokecard
