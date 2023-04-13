import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";


const defaultValues = {
    age: 0,
    gender: "",
    work_interfere: "",
    family_history: "",
    care_options: "",
    benefits:"",
    obs_consequence:"",
    anonymity:"",
    mental_health_interview:"",
    wellness_program:"",
    seek_help:"",
};
const Prediction = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <div style={{ backgroundColor: '#bdbdbd' }}>
            {/* <marquee direction="right" behavior="alternate" width="100%"><h1 style={{ color: "#26c6da", backgroundColor: "#14212e" ,fontFamily:'BlinkMacSystemFont' }}>WELCOME TO THE PREDICTION PAGE </h1></marquee> */}
            <h1 style={{ color: "#26c6da", backgroundColor: "#14212e", fontFamily: 'BlinkMacSystemFont' }}>::WELCOME TO THE PREDICTION PAGE:: </h1>
            <div><p style={{ color: "#880e4f", fontSize: "20px", position: "left" }}><u><b>Please Fill The Below Details For Predict Your Mental Health</b></u></p></div>
                <form onSubmit={handleSubmit} >
                    <Grid container alignItems="center" justifyContent="center"  direction="column" item position="left">
                    <div>
                        <p style={{ color: "#14212e", fontSize: "20px",position:"left" }}><b>Name</b></p>
                        <Box sx={{width:500,maxWidth: '100%',}}>
                            <TextField fullWidth label="Enter Your Name" />
                        </Box>
                        <p style={{ color: "#14212e", fontSize: "20px", position: "left" }}><b>Email ID</b></p>
                        <Box sx={{ width: 500, maxWidth: '100%', }}>
                            <TextField fullWidth label="Enter Your Email id" />
                        </Box>
                        <p style={{ color: "#14212e", fontSize: "20px", position: "left" }}><b>Age</b></p>
                        <Box sx={{ width: 500, maxWidth: '100%', }}>
                            <TextField fullWidth label="Enter Your Age" />
                        </Box>
                        <Grid item>
                            <FormControl>
                                <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Gender</b></FormLabel>
                                <RadioGroup
                                    name="gender"
                                    value={formValues.gender}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="Male"
                                        value="Male"
                                        control={<Radio size="small" />}
                                        label="Male"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="Female"
                                        value="Female"
                                        control={<Radio size="small" />}
                                        label="Female"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="Transgender"
                                        value="Transgender"
                                        control={<Radio size="small" />}
                                        label="Transgender"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="Prefer Not To Say"
                                        value="Prefer Not To Say"
                                        control={<Radio size="small" />}
                                        label="Prefer Not To Say"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </div>
                        {/* 1st Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Work Interfere</b></FormLabel>
                                <RadioGroup
                                    id="work_interfere"
                                    name="work_interfere"
                                    value={formValues.work_interfere}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="never"
                                        value="never"
                                        control={<Radio size="small" />}
                                        label="Never"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="often"
                                        value="often"
                                        control={<Radio size="small" />}
                                        label="Often"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="rarely"
                                        value="rarely"
                                        control={<Radio size="small" />}
                                        label="Rarely"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="sometimes"
                                        value="sometimes"
                                        control={<Radio size="small" />}
                                        label="Sometimes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 2nd Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Family History</b></FormLabel>
                                <RadioGroup
                                    id="family_history"
                                    name="family_history"
                                    value={formValues.family_history}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 3rd Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Care Options</b></FormLabel>
                                <RadioGroup
                                    id="care_options"
                                    name="care_options"
                                    value={formValues.care_options}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="not sure"
                                        value="not sure"
                                        control={<Radio size="small" />}
                                        label="Not Sure"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 4th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Benefits</b></FormLabel>
                                <RadioGroup
                                    id="benefits"
                                    name="benefits"
                                    value={formValues.benefits}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 5th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Obs_Consequence</b></FormLabel>
                                <RadioGroup
                                    id="obs_consequence"
                                    name="obs_consequence"
                                    value={formValues.obs_consequence}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 6th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Anonymity</b></FormLabel>
                                <RadioGroup
                                    id="anonymity"
                                    name="anonymity"
                                    value={formValues.anonymity}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 7th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Mental Health Interview</b></FormLabel>
                                <RadioGroup
                                    id="mental_health_interview"
                                    name="mental_health_interview"
                                    value={formValues.mental_health_interview}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 8th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Wellness Program</b></FormLabel>
                                <RadioGroup
                                    id="wellness_program"
                                    name="wellness_program"
                                    value={formValues.wellness_program}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 9th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>Seek Help</b></FormLabel>
                                <RadioGroup
                                    id="seek_help"
                                    name="seek_help"
                                    value={formValues.seek_help}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="yes"
                                        value="yes"
                                        control={<Radio size="small" />}
                                        label="Yes"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#263238", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Button variant="contained" color="primary" type="submit">
                            PREDICT
                        </Button>
                </Grid>
            </form>
        </div>
    );
};
export default Prediction;