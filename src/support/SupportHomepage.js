import React from 'react';
import ReactDOM from 'react-dom';
import './themeStyle.css';
import SupportTypeSelect from './components/SupportTypeSelect.js';
import Item from './components/Item.js';


class SupportHomepage extends React.Component {

    render() {
        return (
            <div>
                <SupportTypeSelect/>
                
            </div>
        );
    }

}

export default SupportHomepage;