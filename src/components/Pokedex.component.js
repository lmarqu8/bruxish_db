import React, { Component } from 'react';
import axios from 'axios';

const Pokemon = props => (
    <tr>
        <td>{props.pokemon.name}</td>
        <td>{props.pokemon.pokedex_number}</td>
        <td>{props.pokemon.species}</td>
        <td>{props.pokemon.type_1}</td>
        <td>{props.pokemon.type_2}</td>
        <td>{props.pokemon.hp}</td>
        <td>{props.pokemon.attack}</td>
        <td>{props.pokemon.defense}</td>
        <td>{props.pokemon.sp_attack}</td>
        <td>{props.pokemon.sp_defense}</td>
        <td>{props.pokemon.speed}</td>

    </tr>
)

export default class Pokemons extends Component {
    constructor(props) {
        super(props);

        this.state = {pokemons: []};
    }
    componentDidMount() {
        axios.get('http://localhost:5000/Pokedex/')
            .then(response => {
                this.setState({ pokemons: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    pokemonList() {
        return this.state.pokemons.map(currentpokemon => {
            return <Pokemon pokemon={currentpokemon}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Pokedex</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>ID#</th>
                        <th>Species</th>
                        <th>Type 1</th>
                        <th>Type 2</th>
                        <th>HP</th>
                        <th>ATK</th>
                        <th>DEF</th>
                        <th>SPATK</th>
                        <th>SPDEF</th>
                        <th>SPD</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.pokemonList() }
                    </tbody>
                </table>
            </div>
        )
    }
}