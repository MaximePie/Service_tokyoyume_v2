import React from 'react'
import SandwichesList from './SandwichesList'
import axios from "axios";

class Sandwich extends React.Component {

    constructor(){
        super();

        this.SandwichesListRef = React.createRef();

        this.createSandwich = this.createSandwich.bind(this)
        this.on_change_sandwich_name = this.on_change_sandwich_name.bind(this)
        this.on_change_sandwich_price = this.on_change_sandwich_price.bind(this)
        this.delete_sandwich = this.delete_sandwich.bind(this)
    }


    render() {
        return (
            <div className='sandwiches_container'>
                <div className="command-page__add-sandwich">
                    <SandwichesList edit_mode ref={this.SandwichesListRef} delete_sandwich={this.delete_sandwich} />
                    <form onSubmit={this.createSandwich}>
                        <label>Nom de sandwich : </label>
                        <input id="sandwich_name_input" onChange={this.on_change_sandwich_name} type="text"/>
                        <input id="sandwich_price_input" onChange={this.on_change_sandwich_price}/>
                        <input type="submit" value="Ajouter un sandwich"/>
                    </form>
                </div>
            </div>
        )
    }



    createSandwich (event) {
        event.preventDefault()

        const sandwich = {
            name: this.state.sandwich_name,
            price: this.state.sandwich_price
        }
        let fetch_sandwiches_function = this.SandwichesListRef.current.fetch_sandwiches;

        axios.post('/api/sandwiches', sandwich)
            .then(response => {
                fetch_sandwiches_function()
                this.reset_text_field("sandwich_name_input");
            })
            .catch(error => {
                console.log(error)
            })

    }


    delete_sandwich(sandwich_id) {

        const sandwich = {
            id: sandwich_id
        }

        let fetch_sandwiches_function = this.SandwichesListRef.current.fetch_sandwiches;


        axios.post('/api/sandwiches/destroy', sandwich)
            .then(response => {
                fetch_sandwiches_function()
            })
            .catch(error => {
                console.log(error)
            })
    }

    on_change_sandwich_name (event) {
        let sandwich_name = event.target.value;
        this.setState({
            sandwich_name
        })
    }

    on_change_sandwich_price (event) {
        let sandwich_price = event.target.value;
        this.setState({
            sandwich_price
        })
    }


    //RELATED TO THE CLASS METHODS


    //Not related to class methods (no need to bind them)
    reset_text_field(field_id){
        var field = document.getElementById(field_id);
        field.value = "";
        console.log(field.value);
    }


}

export default Sandwich
