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
    }

    render() {

        let command_details = this.get_command_details();

        return(
            <div className='commands-container'>
                <div className="articles-container">
                    <div className="commands-page__sandwiches-list">
                        <SandwichesList edit_mode={false} add_sandwich={this.add_sandwich_to_command}/>
                    </div>
                </div>
                <div className="command-details-container">
                    {command_details}
                </div>
            </div>
        )
    }

    add_sandwich_to_command (sandwich) {
        let command = this.state.command;

        let article = {};

        let is_already_in_cart = false;

        command.forEach(function(article, index){
            if(article.object.id === sandwich.id )
            {
                is_already_in_cart = true;
                command[index].amount ++;
                command[index].jsx_element = <div key={sandwich.id} className={"command-details__article"}>{command[index].amount}{sandwich.name}</div>

            }
        })

        if(!is_already_in_cart) {
            //New line
            article.object = sandwich;
            article.jsx_element = <div key={sandwich.id} className={"command-details__article"}>{sandwich.name}</div>
            article.amount = 1;
            command.push(article)
        }


        this.setState({
            command
        })
    }

    get_command_details() {
        let command = [];
        let current_command = this.state.command;
        let article = {}
        current_command.forEach(function(article, index) {
            command.push(article.jsx_element)
        })

        return command;
    }
}



export default CommandPage
