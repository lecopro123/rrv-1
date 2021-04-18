import React, { useState, useEffect, useRef } from 'react';
import { Route, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fade from 'react-reveal/Fade';
import Ser from './ser';

const useStyles = makeStyles({
    customTextField: {
        "& input::placeholder": {
            fontSize: "22px",
            fontStyle: "'Josefin Sans', sans-serif",
            color: 'black',
            fontWeight: "bold"
        }
    }
});


const Schools = (props) => {
    const classes = useStyles();
    console.log(props.data)
    return (
        <Fade bottom>
            <div>
                <div style={{ paddingTop: '5px' }}></div>
                <Ser />
                <div style={{ paddingTop: '10px' }}></div>
                <div className="write">Please enter the Details to view classnotes</div>
                <div style={{ paddingTop: '40px' }}></div>
                <div className="some23">
                    <Autocomplete
                        id="combo-box-demo"
                        options={props.data.coll}
                        getOptionLabel={(option) => option.institute_name}
                        style={{ width: 700 }}
                        renderInput={(params) => <TextField {...params} placeholder="Select Institution" variant="outlined" classes={{ root: classes.customTextField }} />}
                    />
                    <div className="pad10"></div>
                    <div className="pad10"></div>
                    <TextField style={{ width: 700 }} placeholder="Enter Student Unique ID" variant="outlined" classes={{ root: classes.customTextField }} />
                    <div style={{ paddingTop: '40px' }}></div>
                    <div className="btn-container1">
                        <div className="more-btn"> Submit</div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
export default Schools;