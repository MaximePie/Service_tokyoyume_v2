import axios from "axios";
import React from 'react'

class SandwichesList extends React.Component {

    constructor() {
        super();
        this.state = {
            sandwiches: [],
        }
        this.get_sandwiches_edit = this.get_sandwiches_edit.bind(this)
        this.fetch_sandwiches = this.fetch_sandwiches.bind(this)
        this.delete_sandwich = this.delete_sandwich.bind(this)

    }

    componentWillMount() {
        this.fetch_sandwiches();
    }


    render() {
        let sandwiches_list = this.props.edit_mode ? this.get_sandwiches_edit() : this.get_sandwiches_view();
        return(
            <div className='sandwiches-list'>
                {sandwiches_list}
            </div>
        )
    }



    //Returns an array containing the sandwiches elements
    get_sandwiches_edit() {
        let sandwiches_list = [];
        let delete_sandwich = this.props.delete_sandwich;

        this.state.sandwiches.forEach(function(sandwich){
            sandwiches_list.push(
                <div className="sandwich" key={sandwich.id}>
                    <h2>
                        {sandwich.name}
                        {sandwich.price}
                    </h2>
                    <span onClick={() => delete_sandwich(sandwich.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </div>
            );
        })
        return sandwiches_list;
    }

    //Returns an array containing the sandwiches elements
    get_sandwiches_view() {
        let sandwiches_list = [];
        let add_sandwich_to_command = this.props.add_sandwich;
        let delete_sandwich_from_command = this.props.delete_sandwich;

        this.state.sandwiches.forEach(function(sandwich){
            sandwiches_list.push(
                <div className="sandwich" key={sandwich.id}>
                    <h2>{sandwich.name}</h2>
                    {sandwich.price}
                    <div className={"sandwich__actions"}>
                        <span onClick={() => add_sandwich_to_command(sandwich)}>
                            <i className="fas fa-plus-square"/>
                        </span>
                            <span onClick={() => delete_sandwich_from_command(sandwich)}>
                            <i className="fas fa-minus-square"/>
                        </span>
                    </div>
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
