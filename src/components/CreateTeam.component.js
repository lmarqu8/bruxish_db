import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTeam extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePokemon1 = this.onChangePokemon1.bind(this);
        this.onChangePokemon2 = this.onChangePokemon2.bind(this);
        this.onChangePokemon3 = this.onChangePokemon3.bind(this);
        this.onChangePokemon4 = this.onChangePokemon4.bind(this);
        this.onChangePokemon5 = this.onChangePokemon5.bind(this);
        this.onChangePokemon6 = this.onChangePokemon6.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            pokemon1: '',
            pokemon2: '',
            pokemon3: '',
            pokemon4: '',
            pokemon5: '',
            pokemon6: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://bruxish-db.herokuapp.com/users')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePokemon1(e) {
        this.setState({
            pokemon1: e.target.value
        });
    }

    onChangePokemon2(e) {
        this.setState({
            pokemon2: e.target.value
        });
    }

    onChangePokemon3(e) {
        this.setState({
            pokemon3: e.target.value
        });
    }

    onChangePokemon4(e) {
        this.setState({
            pokemon4: e.target.value
        });
    }

    onChangePokemon5(e) {
        this.setState({
            pokemon5: e.target.value
        });
    }

    onChangePokemon6(e) {
        this.setState({
            pokemon6: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const team = {
            username: this.state.username,
            pokemon1: this.state.pokemon1,
            pokemon2: this.state.pokemon2,
            pokemon3: this.state.pokemon3,
            pokemon4: this.state.pokemon4,
            pokemon5: this.state.pokemon5,
            pokemon6: this.state.pokemon6
        };

        console.log(team);

        axios.post('https://bruxish-db.herokuapp.com/teams/add', team)
            .then(res => console.log(res.data));

        window.location = '/teams';
    }

    render() {
        return (
            <div>
                <h3>Create New Team</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Pokemon 1: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pokemon1}
                               onChange={this.onChangePokemon1}
                               />
                    </div>
                    <div className="form-group">
                        <label>Pokemon 2: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pokemon2}
                               onChange={this.onChangePokemon2}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pokemon 3: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pokemon3}
                               onChange={this.onChangePokemon3}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pokemon 4: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pokemon4}
                               onChange={this.onChangePokemon4}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pokemon 5: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pokemon5}
                               onChange={this.onChangePokemon5}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pokemon 6: </label>
                        <input type="text"
                               required
                               className="form-control"
                               value={this.state.pokemon6}
                               onChange={this.onChangePokemon6}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Team" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}