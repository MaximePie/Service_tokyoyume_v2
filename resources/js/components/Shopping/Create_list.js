import React, { useState, useEffect } from 'react';
import axios from "axios";
import XLSX from 'xlsx';
import CSVReader from "react-csv-reader"


import Dropzone from "react-dropzone";

export default function Create_list(){

    const [list, set_list] = useState([]);
    const [base_recipes_elements, set_base_recipes_elements] = useState([]);

    //base_recipes_elements_in_base()

    function import_list(list) {

        let imported_list = list.map(function(command_line) {

            let className = command_line === list[0] ? "command-header" : ""

            let command = [];

            command.push(
                <div className={"command-line " + className}>
                    <span>{command_line[0]}</span>
                    <span>{command_line[1]}</span>
                    <span>{command_line[2]}</span>
                    <span>{command_line[3]}</span>
                    <span>{command_line[4]}</span>
                </div>
            )

            return command;
        })

        set_list(imported_list)
    }

    useEffect(() => {
        fetch_base_ingredients();
    }, []);

    async function fetch_base_ingredients() {
        const result = await axios(
            '/api/sandwiches',
        );
        const ingredients_list  = Object.values(result.data).map(function(ingredient) {
            return ingredient.name
        })
        set_base_recipes_elements(ingredients_list);

        return result;
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