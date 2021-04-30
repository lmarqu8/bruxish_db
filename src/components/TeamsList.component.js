import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Team = props => (
    <tr>
        <td>{props.team.username}</td>
        <td>{props.team.pokemon1}</td>
        <td>{props.team.pokemon2}</td>
        <td>{props.team.pokemon3}</td>
        <td>{props.team.pokemon4}</td>
        <td>{props.team.pokemon5}</td>
        <td>{props.team.pokemon6}</td>
        <td>
            <Link to={"/edit/"+props.team._id}>edit</Link>
            | <a href="teams" onClick={() => {
                props.deleteTeam(props.team._id) }}>delete</a>
        </td>
    </tr>
)

export default class Teams extends Component {
    constructor(props) {
        super(props);

        this.deleteTeam = this.deleteTeam.bind(this);
        this.state = {teams: []};
    }
    componentDidMount() {
        axios.get('https://bruxish-db.herokuapp.com/teams/')
            .then(response => {
                this.setState({ teams: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTeam(id) {
        axios.delete('https://bruxish-db.herokuapp.com/teams/'+id)
            .then(res => console.log(res.data));

        this.setState({
            teams: this.state.teams.filter(el => el._id !== id)
        })
    }

    teamList() {
        return this.state.teams.map(currentteam => {
            return <Team team={currentteam}
     deleteTeam={this.deleteTeam} key=
         {currentteam._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Team List</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Pokemon 1</th>
                        <th>Pokemon 2</th>
                        <th>Pokemon 3</th>
                        <th>Pokemon 4</th>
                        <th>Pokemon 5</th>
                        <th>Pokemon 6</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.teamList() }
                    </tbody>
                </table>
            </div>
        )
    }
}