import React, { useState } from "react";
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
                <form onSubmit={handleSubmit} >
                    <Grid container alignItems="center" justifyContent="center"  direction="column" item position="left">
                        {/* 1st Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>1.Work Interfere</b></FormLabel>
                                <RadioGroup
                                    id="work_interfere"
                                    name="work_interfere"
                                    value={formValues.work_interfer}
                                    onChange={handleInputChange}
                                    row
                                >
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="never"
                                        value="never"
                                        control={<Radio size="small" />}
                                        label="Never"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="often"
                                        value="often"
                                        control={<Radio size="small" />}
                                        label="Often"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="rarely"
                                        value="rarely"
                                        control={<Radio size="small" />}
                                        label="Rarely"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="rsometimes"
                                        value="sometimes"
                                        control={<Radio size="small" />}
                                        label="Sometimes"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 2nd Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>2.Family History</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 3rd Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>3.Care Options</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="not sure"
                                        value="not sure"
                                        control={<Radio size="small" />}
                                        label="Not Sure"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 4th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>4.Benefits</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 5th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>5.Obs_Consequence</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 6th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>6.Anonymity</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 7th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>7.Mental Health Interview</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 8th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>8.Wellness Program</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {/* 9th Feature */}
                        <Grid item>
                            <FormControl>
                            <FormLabel style={{ color: "#14212e", fontSize: "20px" }}><b>9.Seek Help</b></FormLabel>
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
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="no"
                                        value="no"
                                        control={<Radio size="small" />}
                                        label="No"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
                                    />
                                    <FormControlLabel
                                        key="don't know"
                                        value="don't know"
                                        control={<Radio size="small" />}
                                        label="Don't Know"
                                        style={{ color: "#e91e63", fontSize: "10px" }}
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