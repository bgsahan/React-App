import React from 'react';
import ReactDOM from 'react-dom';
import '../themeStyle.css';
import { SUPPORTDATA } from '../SupportData.js';
import SupportItem from '../SupportItem';

function Item() {

    var supportItemsList;
    supportItemsList = JSON.stringify(SUPPORTDATA);
    supportItemsList = JSON.parse(supportItemsList);
    //console.log(supportItemsList);

    {/* iterate through all Support items in JSON file */ }

    let showResult = () => {
        return (
            <ul>
                {
                    supportItemsList.map((supportItem, index) => {
                        return (
                            <div>
                                <h2>{supportItem.type}</h2>

                                <div>
                                    {
                                        supportItem.sections.map((section, index) => {
                                            return (
                                                <div>
                                                    <p>{section.header}</p>

                                                    <div>
                                                        {
                                                            section.instructions.map((instruction, index) => {
                                                                return (
                                                                    <div>
                                                                        <p>{instruction.title}</p>

                                                                        <div>
                                                                        {
                                                                            instruction.descriptions.map((description, index) => {
                                                                                return (
                                                                                    <div>
                                                                                    <p>{description}</p>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </ul>
        );
    }

    supportItemsList.forEach((element => {
        //console.log(element.type);

        element.sections.forEach((section => {
            //console.log(section.header);

            section.instructions.forEach((instruction => {
                //console.log(instruction.title);

                instruction.descriptions.forEach((description => {
                    //console.log(element);

                }));
            }));
        }));
    }));


    return (
        <div>
            {showResult()}
        </div>

    );


    /* 
        filteredList.forEach((support => {
                <div>
                    <h1>hello</h1>
                </div>
        }));
        
     */
    /*
    
    
            SUPPORTDATA.forEach((item) => {
                item.forEach((sectionHeader) => {
                    item.sections.forEach((section) => {
    
                    });
                });
            });
    
    
            SUPPORTDATA.map((data, index) => {
    
    
    
                SupportItem.type = data.type;
                SupportItem.sectionHeader = data.sections[index].header;
                SupportItem.instructionsTitle = data.sections[index].instructions[index].title;
                SupportItem.instructionsDescription = data.sections[index].instructions[index].descriptions[index];
            });
    */



    /*
        return (
            <div className="item_div">
                {SUPPORTDATA.map((data, index) => {
                    return (
                        <div key={index}>
    
                        {data.type + " - " 
                        + data.sections[index].header + " - " 
                        + data.sections[index].instructions[0].title + " - " 
                        + data.sections[index].instructions[0].descriptions[0]}
                        </div>
                    );
                })}
            </div>
        );
    
    */

}

export default Item;


