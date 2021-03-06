import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SandwichesList from "./Sandwiches/SandwichesList";


class CommandPage extends React.Component {

    constructor(){
        super();
        this.state = {
            command: [],
            total_price: 0
        }


        this.add_sandwich_to_command = this.add_sandwich_to_command.bind(this);
        this.delete_sandwich_from_command = this.delete_sandwich_from_command.bind(this);
        this.validate_command = this.validate_command.bind(this);
        this.get_total_price = this.get_total_price.bind(this);
        this.is_command_empty = this.is_command_empty.bind(this);
    }

    render() {

        let command_details = this.get_command_details();
        let total_price = this.get_total_price();

        let is_validate_button_disabled = this.is_command_empty();

        return(
            <div className='commands-container'>
                <div className="articles-container">
                    <div className="commands-page__sandwiches-list">
                        <SandwichesList
                            edit_mode={false}
                            add_sandwich={this.add_sandwich_to_command}
                            delete_sandwich={this.delete_sandwich_from_command}
                        />
                    </div>
                </div>
                <div className="command-details-container">
                    {command_details}
                    <button disabled={is_validate_button_disabled} onClick={this.validate_command} className="command-details__validate">Commander ({total_price})</button>
                </div>
            </div>
        )
    }

    validate_command() {
        //alert("Work in progress on this feature");

        const command = {
            sandwich_id: this.state.command[0].object.id,
            sandwich_price: this.state.total_price,
        }

        //let fetch_sandwiches_function = this.SandwichesListRef.current.fetch_sandwiches;


        axios.post('/api/commands/new', command)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    add_sandwich_to_command (sandwich) {
        let command = this.state.command;
        let article = {};

        let is_already_in_cart = false;

        //Check if the sandwich is already in the list
        command.forEach(function(article, index){
            if(article.object.id === sandwich.id )
            {
                is_already_in_cart = true;
                command[index].amount ++;
                command[index].jsx_element =
                    <div key={sandwich.id} className={"command-details__article"}>
                        <strong>{command[index].amount}</strong>
                        {sandwich.name}
                    </div>

            }
        })


        if(!is_already_in_cart) {
            //New line
            article.object = sandwich;
            article.amount = 1;
            article.jsx_element =
                <div key={sandwich.id} className={"command-details__article"}>
                    <strong>{article.amount}</strong>
                    {sandwich.name}
                </div>
            command.push(article)
        }


        this.setState({
            command
        })
    }

    delete_sandwich_from_command(sandwich) {
        let command = this.state.command;
        let article = {};

        let is_removed_from_cart = -1;

        //Check if the sandwich is already in the list
        command.forEach(function(article, index){
            if(article.object.id === sandwich.id)
            {
                command[index].amount --;
                article.jsx_element =
                    <div key={sandwich.id} className={"command-details__article"}>
                        <strong>{article.amount}</strong>
                        {sandwich.name}
                    </div>
                if(command[index].amount === 0) {
                    is_removed_from_cart = index;
                }

            }
        })


        if(is_removed_from_cart > -1) {
            command.splice(is_removed_from_cart,1)
        }


        this.setState({
            command
        })
    }


    get_command_details() {
        let command = [];
        let current_command = this.state.command;
        current_command.forEach(function(article) {
            command.push(article.jsx_element)
        })

        return command;
    }

    get_total_price() {
        let command = this.state.command;
        let price = 0;
        command.forEach(function(article) {
            price += article.object.price * article.amount;
        });

        return price + "€";
    }

    is_command_empty() {
        return this.state.command.length <= 0;
    }
}



export default CommandPage
