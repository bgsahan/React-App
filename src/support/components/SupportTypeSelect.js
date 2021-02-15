import React from 'react';
import ReactDOM from 'react-dom';
import '../themeStyle.css';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Item00 from './Item00.js';
import Item10 from './Item10.js';
import Item20 from './Item20.js';
import Item30 from './Item30.js';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SupportTypeSelect() {

    const classes = useStyles();
    const [supportType, setSupportType] = React.useState();

    let itemOnDisplay = <Item00/>;

    const handleChange = (event) => {
        setSupportType(event.target.value);
        event.preventDefault();
    };

    if (supportType == 10) {
        itemOnDisplay = <Item10/>;
    } else if (supportType == 20) {
        itemOnDisplay = <Item20/>;
    } else if (supportType == 30) {
        itemOnDisplay = <Item30/>;
    }

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Destek Türü</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={supportType}
                    onChange={handleChange}
                    label="Destek Türü">
                    <MenuItem value={10}>Danışmanlık</MenuItem>
                    <MenuItem value={20}>Ofis ve Depo Kirası</MenuItem>
                    <MenuItem value={30}>İstihdam</MenuItem>
                </Select>
                <FormHelperText>Kontrolü yapılacak harcamanın destek türünü seçiniz</FormHelperText>
            </FormControl>

            {itemOnDisplay}

        </div>


    );

}