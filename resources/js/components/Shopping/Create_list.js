import React, { useState, useEffect } from 'react';
import axios from "axios";
import XLSX from 'xlsx';
import CSVReader from "react-csv-reader"


import Dropzone from "react-dropzone";

export default function Create_list(){

    const [data_list, set_data_list] = useState([]);
    const [list, set_list] = useState([]);
    const [base_recipes_elements, set_base_recipes_elements] = useState([]);
    const [query, set_query] = useState("");

    //base_recipes_elements_in_base()

    function import_list(list) {

        let raw_data = [];

        let imported_list = list.map(function(command_line, index) {

            let className = command_line === list[0] ? "command-header" : ""

            let command = [];
            let raw_data_line = [];

            raw_data_line.push([command_line[0], command_line[1], command_line[2], command_line[3], command_line[4]])

            command.push(
                <div className={"command-line " + className}>
                    <span>{command_line[0]}</span>
                    <span>{command_line[1]}</span>
                    <span>{command_line[2]}</span>
                    <span>{command_line[3]}</span>
                    <span>{command_line[4]}</span>
                </div>
            )

            if(index !== 0) {
                raw_data.push(raw_data_line[0])
            }

            return command;
        })

        set_list(imported_list)
        set_data_list(raw_data)
        set_query("api/commandes")
    }

    async function post_commands() {

        let commands_data_list = []

        data_list.forEach(command => {
            console.log(command);
            commands_data_list.push({
                    nom_client: command[1],
                    sandwich_id: command[2].split(' - ')[0],
                    boisson_id: command[3].split(' - ')[0],
                    dessert_id:  command[4].split(' - ')[0],
            })
        })

        if(data_list.length > 0) {
            const commands_list = await axios.post(
                '/api/commands_from_form',
                {data: commands_data_list}
            );
            fetch_base_ingredients()
        }

    }

    useEffect(() => {
        fetch_base_ingredients();
    }, []);

    useEffect(() => {
        post_commands();
    }, [query]);


    async function fetch_base_ingredients() {
        let required_ingredients_list = [];
        const sandwich_ingredients_list = await axios(
            '/api/sandwiches_ingredients'
        );

        await Object.values(sandwich_ingredients_list.data).forEach(sandwich_ingredients => {
            sandwich_ingredients.ingredients.forEach(ingredient => {
                required_ingredients_list.push(
                    <div className="ingredient" key={ingredient.name}>
                        <span className="ingredient-count">
                            {sandwich_ingredients.count * ingredient.quantity_per_sandwich}
                        </span>
                        {ingredient.name}
                    </div>
                )
            })
        })

        set_base_recipes_elements(required_ingredients_list);
    }

    return (
        <div className="create-list">
            <div className="dropzone">
                Viva le zouzou
                <Dropzone onDrop={import_list}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()} className="create-list__drop-zone">
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <CSVReader
                    cssClass="csv-reader-input"
                    label="Select CSV with secret Death Star statistics"
                    onFileLoaded={import_list}
                    onError={import_list}
                    inputId="ObiWan"
                    inputStyle={{color: 'red'}}
                />
            </div>
            <div className="shopping-list">
                {list}
                <div className="recipe-elements">
                    {base_recipes_elements}
                </div>
            </div>
        </div>
    )
}