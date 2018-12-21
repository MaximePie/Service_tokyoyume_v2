import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SandwichesList from "./Sandwiches/SandwichesList";


class CommandPage extends React.Component {

    constructor(){
        super();
        this.state = {
            command: []
        }


        this.add_sandwich_to_command = this.add_sandwich_to_command.bind(this);
        this.delete_sandwich_from_command = this.delete_sandwich_from_command.bind(this);
        this.validate_command = this.validate_command.bind(this);
    }

    render() {

        let command_details = this.get_command_details();

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
                    <button onClick={this.validate_command} className="command-details__validate">Commander</button>
                </div>
            </div>
        )
    }

    validate_command() {
        alert("Work in progress on this feature");
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
            if(article.object.id === sandwich.id )
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
            command.splice(is_removed_from_cart)
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
}



export default CommandPage
