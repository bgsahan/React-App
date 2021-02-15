import React from 'react';
import '../themeStyle.css';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
        padding: '0px 0px 0px 0px',
        margin: '0px 5px 0px 0px', 

    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CustomFormControlLabel = withStyles({
    label: {
        fontWeight: "bold",
    }
})((props) => <FormControlLabel fontWeight="default" {...props} />);

export default function SupportCheckBox(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <CustomFormControlLabel
            control={<GreenCheckbox onChange={handleChange} name="checkedG" />}
            label={props.customLabel}
        />

    );

}