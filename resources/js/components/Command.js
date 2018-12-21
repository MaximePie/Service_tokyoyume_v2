import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SandwichesList from "./Sandwiches/SandwichesList";


class CommandPage extends React.Component {

    constructor(){
        super();
        this.state = {
        }

        this.add_sandwich_to_command = this.add_sandwich_to_command.bind(this);
    }

    render() {
        return(
            <div className='commands-container'>
                <div className="articles-container">
                    <div className="commands-page__sandwiches-list">
                        <SandwichesList edit_mode={false} add_sandwich={this.add_sandwich_to_command}/>
                    </div>
                </div>
                <div className="command-details-container">
                        Salut, salut, c'est la commande !
                </div>
            </div>
        )
    }

    add_sandwich_to_command () {
        alert("Sandwich added");
    }

}



export default CommandPage
