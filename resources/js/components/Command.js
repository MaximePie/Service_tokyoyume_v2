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
        command.push(sandwich)
        this.setState({
            command
        })
    }

    get_command_details() {
        let command = [];
        this.state.command.forEach(function(article, index) {
            command.push(<div key={article.id + ""+ index} className={"command-details__article"}>{article.name}</div>)
        })

        return command;
    }
}



export default CommandPage
