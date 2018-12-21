import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class CommandPage extends React.Component {

    constructor(){
        super();
        this.state = {
            sandwich_name: ""
        }
    }

    render() {
        return(
            <div>
                <div className='container'>
                    <div className="commands-page__sandwiches-list">
                        <Link className='navbar-brand' to='/'>Je me mangerais bien un sushi ou un truc du genre... C'est l'heure du service ! </Link>
                    </div>
                </div>
            </div>
        )
    }

}



export default CommandPage
