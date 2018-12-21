import axios from "axios";
import React from 'react'

class SandwichesList extends React.Component {

    constructor() {
        super();
        this.state = {
            sandwiches: [],
        }
        this.get_sandwiches = this.get_sandwiches.bind(this)
        this.fetch_sandwiches = this.fetch_sandwiches.bind(this)
        this.delete_sandwich = this.delete_sandwich.bind(this)

    }

    componentWillMount() {
        this.fetch_sandwiches();
    }


    render() {
        let sandwiches_list = this.get_sandwiches();
        return(
            <div className='sandwiches-list'>
                {sandwiches_list}
            </div>
        )
    }



    get_sandwiches() {
        let sandwiches_list = [];
        let delete_sandwich = this.props.delete_sandwich;

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


    fetch_sandwiches() {
        axios.get('/api/sandwiches').then(response => {
            this.setState({
                sandwiches: response.data
            })
        })
    }

    delete_sandwich(id) {

        let fetch_sandwiches = this.fetch_sandwiches;


        this.props.delete_sandwich(id).then( function () {
            fetch_sandwiches()
        })
    }
}


export default SandwichesList
