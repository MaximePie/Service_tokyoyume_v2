import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class CommandPage extends React.Component {

    constructor(){
        super();
        this.state = {
            sandwiches: [],
            sandwich_name: ""
        }

        this.on_change_sandwich_name = this.on_change_sandwich_name.bind(this)
        this.createSandwich = this.createSandwich.bind(this)
        this.get_sandwiches = this.get_sandwiches.bind(this)
        this.delete_sandwich = this.delete_sandwich.bind(this)

    }

    componentWillMount() {
        axios.get('/api/sandwiches').then(response => {
            this.setState({
                sandwiches: response.data
            })
        })
    }


    render() {

        let sandwiches_list = this.get_sandwiches();

        return(
            <div>
                <div className='container'>
                    <div className="commands-page__sandwiches-list">
                        <Link className='navbar-brand' to='/'>Je me mangerais bien un sushi ou un truc du genre... C'est l'heure du service ! </Link>
                        {sandwiches_list}
                    </div>
                    <div className="command-page__add-sandwich">
                        <form onSubmit={this.createSandwich} >
                            <label>Nom de sandwich : </label><input onChange={this.on_change_sandwich_name} type="text"></input>
                            <input type = "submit" value = "Ajouter un sandwich de l'ambiance"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }



    on_change_sandwich_name (event) {
        let sandwich_name = event.target.value;
        this.setState({
            sandwich_name
        })
    }

    fetch_sandwiches() {
        axios.get('/api/sandwiches').then(response => {
            this.setState({
                sandwiches: response.data
            })
        })
    }

    createSandwich (event) {
        event.preventDefault()

        const sandwich = {
            name: this.state.sandwich_name,
        }

        axios.post('/api/sandwiches', sandwich)
            .then(response => {
                // redirect to the homepage
                this.fetch_sandwiches();
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }


    get_sandwiches() {

        let sandwiches_list = [];
        let delete_sandwich = this.delete_sandwich;

        this.state.sandwiches.forEach(function(sandwich){
            sandwiches_list.push(
                <div className="sandwich" key={sandwich.id}>
                    <h2>{sandwich.name}</h2>
                    <span onClick={() => delete_sandwich(sandwich.id)}>Delete</span>
                </div>
            );
        })
        return sandwiches_list;
    }

    delete_sandwich(sandwich_id) {

        const sandwich = {
            id: sandwich_id
        }
        axios.post('/api/sandwiches/destroy', sandwich)
            .then(response => {
                // redirect to the homepage
                this.fetch_sandwiches();
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }
}

export default CommandPage
