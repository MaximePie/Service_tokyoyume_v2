

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import CommandPage from './components/Command'
import Sandwiches from './components/Sandwiches/Sandwich'


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');



// resources/assets/js/components/App.js

class App extends Component {

    constructor(){
        super();
        this.switch_menu_item = this.switch_menu_item.bind(this)
        this.state = {
            next_component: <CommandPage/>
        }
    }

    switch_menu_item(next_menu) {

        let next_component = undefined;

        if(next_menu == "commandes") {
            next_component = <CommandPage/>
        }
        else if (next_menu == "sandwiches") {
            next_component = <Sandwiches/>
        }

        this.setState({
            next_component
        })
    }

    render () {

        return (
            <BrowserRouter>
                <div>
                    <Header switch_menu_item = {this.switch_menu_item} />
                    <div className = "main-container">
                        {this.state.next_component}
                    </div>
                </div>
            </BrowserRouter>
        )

/*
        return (
            <div>
                HAHA HA HA HA
            </div>
        )
*/
    }
}

ReactDOM.render(<App />, document.getElementById('app'))