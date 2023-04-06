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
        <div><h1>WELCOME TO THE PREDICTION PAGE</h1>
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="age-input"
                        name="age"
                        label="Age"
                        type="number"
                        value={formValues.age}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formValues.gender}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                key="male"
                                value="male"
                                control={<Radio size="small" />}
                                label="Male"
                            />
                            <FormControlLabel
                                key="female"
                                value="female"
                                control={<Radio size="small" />}
                                label="Female"
                            />
                            <FormControlLabel
                                key="transgender"
                                value="transgender"
                                control={<Radio size="small" />}
                                label="Transgender"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 1st Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Work Interfere</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="never"
                                value="never"
                                control={<Radio size="small" />}
                                label="Never"
                            />
                            <FormControlLabel
                                key="often"
                                value="often"
                                control={<Radio size="small" />}
                                label="Often"
                            />
                            <FormControlLabel
                                key="rarely"
                                value="rarely"
                                control={<Radio size="small" />}
                                label="Rarely"
                            />
                            <FormControlLabel
                                key="rsometimes"
                                value="sometimes"
                                control={<Radio size="small" />}
                                label="Sometimes"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 2nd Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Family History</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 3rd Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Care Options</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="not sure"
                                value="not sure"
                                control={<Radio size="small" />}
                                label="Not Sure"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 4th Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Benefits</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="don't know"
                                value="don't know"
                                control={<Radio size="small" />}
                                label="Don't Know"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 5th Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Obs_Consequence</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 6th Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Anonymity</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="don't know"
                                value="don't know"
                                control={<Radio size="small" />}
                                label="Don't Know"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 7th Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Mental Health Interview</FormLabel>
                        <RadioGroup
                            name="mental_health_interview"
                            value={formValues.benefits}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                key="yes"
                                value="yes"
                                control={<Radio size="small" />}
                                label="Yes"
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="don't know"
                                value="don't know"
                                control={<Radio size="small" />}
                                label="Don't Know"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 8th Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Wellness Program</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="don't know"
                                value="don't know"
                                control={<Radio size="small" />}
                                label="Don't Know"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* 9th Feature */}
                <Grid item>
                    <FormControl>
                        <FormLabel>Seek Help</FormLabel>
                        <RadioGroup
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
                            />
                            <FormControlLabel
                                key="no"
                                value="no"
                                control={<Radio size="small" />}
                                label="No"
                            />
                            <FormControlLabel
                                key="don't know"
                                value="don't know"
                                control={<Radio size="small" />}
                                label="Don't Know"
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