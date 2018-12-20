import React from 'react'
import SandwichesList from './SandwichesList'
import axios from "axios";

class Sandwich extends React.Component {

    constructor(){
        super();
        this.createSandwich = this.createSandwich.bind(this)
    }


    render() {
        return (
            <div className='sandwiches_container'>
                <div className="command-page__add-sandwich">
                    <SandwichesList/>
                    <form onSubmit={this.createSandwich}>
                        <label>Nom de sandwich : </label>
                        <input id="sandwich_name_input" onChange={this.on_change_sandwich_name} type="text"></input>
                        <input type="submit" value="Ajouter un sandwich de l'ambiance"/>
                    </form>
                </div>
            </div>
        )
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
                this.reset_text_field("sandwich_name_input");
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

}

export default Sandwich
