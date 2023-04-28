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
import "./Prediction.css"


const defaultValues = {
    name: "",
    email: "",
    age: 0,
    country: "",
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
        const formValuesToSend = {
            "name": formValues.name,
            "age": formValues.age,
            "email": formValues.email,
            "gender": formValues.gender,
            "country": formValues.country,
            "work_interfere": formValues.work_interfere,
            "family_history": formValues.family_history,
            "care_options": formValues.care_options,
            "benefits": formValues.benefits,
            "obs_consequence": formValues.obs_consequence,
            "anonymity": formValues.anonymity,
            "mental_health_interview": formValues.mental_health_interview,
            "wellness_program": formValues.wellness_program,
            "seek_help": formValues.seek_help
        };
        console.log(JSON.stringify(formValuesToSend))
        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'same-origin',
            body: JSON.stringify(formValuesToSend)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
    };

    return (
        
        <div style={{ backgroundColor: '#bdbdbd', paddingTop: "10vh" }} id="prediction">

            <h1 style={{ color: "#D8D184", backgroundColor: "#14212e", fontFamily: 'BlinkMacSystemFont' }}>::WELCOME TO THE PREDICTION PAGE:: </h1>

            <div>
                <p style={{ fontSize: "15px", textAlign: "left" }}><b>
                    As technology continues to advance, we believe that there will be more opportunities
                    to use data and predictive analytics. This will enable us to identify individuals who are at risk of developing mental
                    health problems. We have analysed various features, such as family history, work interference, seek help, etc, details
                    of which are listed below as well. We have made a model using these features which will help us to fulfill our goal.<br></br>

                    Our team believes that the future of mental health is bright, with advancements in technology, education, 
                    and holistic care providing new opportunities for better predicting, preventing, and managing mental illness.
                </b></p>
                <div>
                        <p style={{ fontSize: "20px", whiteSpace: "pre-wrap" }}><b>
                            On behalf of this, we can make a prediction of whether a person needs mental treatment or not where depending on 9 special features. The list of features is following:-<br></br>
                        </b></p>
                    
                    <div className="container">

                        <div className="feature">
                            <p style={{ textAlign: "left" }}>
                                <b> 1. Work_interfere:</b> If you have any mental health condition , do you feel this mental health condition interfered with your ability to work?<br></br>
                                <b> 2. Family_history:</b> Do you have any family members (such as parents or siblings) who have been diagnosed with a mental health condition?<br></br>
                                <b> 3. Care_options:</b> Does your employer or organization offer any mental health care option for employees?<br></br>
                                <b> 4. Benefits:</b> Does your employer or organization offer any mental health benefits to you, such as counselling or therapy services?<br></br>
                                <b> 5. Obs_consequence:</b> Have you ever observed negative consequences in the workplace for someone else who disclosed their mental health condition, such as being treated unfairly or overlooked for opportunities?<br></br>
                            </p>
                        </div>

                        <div className="feature">
                            <p style={{ textAlign: "left" }}>
                                <b> 6. Anonymity:</b> Is your privacy and confidentiality maintained if you choose to take advantage of mental health or substance abuse treatment resources?<br></br>
                                <b> 7. Mental_health_interview:</b> Would you like to bring up any mental health issues with a potential employer in an interview?<br></br>
                                <b> 8. Wellness_program:</b> Does your employer or organization offer a wellness program or any health-related initiatives to you?<br></br>
                                <b> 9. Seek_help:</b> Does your employer or organization provide any resources to learn more about mental_health issues and have you ever sought help or support for a mental health concern?<br></br>
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <div><p style={{ color: "#880e4f", fontSize: "20px", position: "left" }}><u><b>Please Fill The Below Details For Predict Your Mental Health</b></u></p></div>
                
                <form onSubmit={handleSubmit} >

                    <Grid container alignItems="center" justifyContent="center"  direction="column" item position="left">
                        
                        {/* PERSONAL DETAILS */}
                        <div>
                            <p style={{ color: "#14212e", fontSize: "20px",position:"left" }}><b>Name</b></p>
                            <Box sx={{width:500,maxWidth: '100%',}}>
                                <TextField id="name" name="name" value={formValues.name} onChange={handleInputChange} fullWidth label="Enter Your Name" />
                            </Box>
                            <p style={{ color: "#14212e", fontSize: "20px", position: "left" }}><b>Email ID</b></p>
                            <Box sx={{ width: 500, maxWidth: '100%', }}>
                                <TextField id="email" name="email" value={formValues.email} onChange={handleInputChange} fullWidth label="Enter Your Email id" />
                            </Box>
                            <p style={{ color: "#14212e", fontSize: "20px", position: "left" }}><b>Age</b></p>
                            <Box sx={{ width: 500, maxWidth: '100%' }}>
                                <TextField id="age" name="age" value={formValues.age} onChange={handleInputChange} fullWidth label="Enter Your Age" />
                            </Box>
                            <p style={{ color: "#14212e", fontSize: "20px", position: "left" }}><b>Country</b></p>
                            <Box sx={{ width: 500, maxWidth: '100%' }}>
                                <TextField id="country" name="country" value={formValues.country} onChange={handleInputChange}  fullWidth label="Enter Your Country" />
                            </Box>
                            <Grid item>
                                <FormControl>
                                    <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Gender</b></FormLabel>
                                    <RadioGroup
                                        id="gender"
                                        name="gender"
                                        value={formValues.gender}
                                        onChange={handleInputChange}
                                        lineHeight= '2.0'
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
                        
                        {/* FOR PREDICTION DETAILS:-1st Feature */}
                        <Grid item>
                            <FormControl>
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Work Interfere</b></FormLabel>
                                    <RadioGroup
                                        id="work_interfere"
                                        name="work_interfere"
                                        value={formValues.work_interfere}
                                        onChange={handleInputChange}
                                        lineHeight='4.5'
                                        row
                                    >
                                        <FormControlLabel
                                            key="don't know"
                                            value="don't Know"
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Family History</b></FormLabel>
                                    <RadioGroup
                                        id="family_history"
                                        name="family_history"
                                        value={formValues.family_history}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Care Options</b></FormLabel>
                                    <RadioGroup
                                        id="care_options"
                                        name="care_options"
                                        value={formValues.care_options}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                            key="don't Know"
                                            value="don't Know"
                                            control={<Radio size="small" />}
                                            label="Don't Know"
                                            style={{ color: "#263238", fontSize: "10px" }}
                                        />
                                    </RadioGroup>
                            </FormControl>
                        </Grid>

                        {/* 4th Feature */}
                        <Grid item>
                            <FormControl>
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Benefits</b></FormLabel>
                                    <RadioGroup
                                        id="benefits"
                                        name="benefits"
                                        value={formValues.benefits}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                            key="don't Know"
                                            value="don't Know"
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Obs_Consequence</b></FormLabel>
                                    <RadioGroup
                                        id="obs_consequence"
                                        name="obs_consequence"
                                        value={formValues.obs_consequence}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Anonymity</b></FormLabel>
                                    <RadioGroup
                                        id="anonymity"
                                        name="anonymity"
                                        value={formValues.anonymity}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                            value="don't Know"
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Mental Health Interview</b></FormLabel>
                                    <RadioGroup
                                        id="mental_health_interview"
                                        name="mental_health_interview"
                                        value={formValues.mental_health_interview}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                            value="don't Know"
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Wellness Program</b></FormLabel>
                                    <RadioGroup
                                        id="wellness_program"
                                        name="wellness_program"
                                        value={formValues.wellness_program}
                                        onChange={handleInputChange}
                                        lineHeight='1.5'
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
                                            value="don't Know"
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
                                <FormLabel style={{ color: "#14212e", fontSize: "20px", lineHeight: '2.0' }}><b>Seek Help</b></FormLabel>
                                    <RadioGroup
                                        id="seek_help"
                                        name="seek_help"
                                        value={formValues.seek_help}
                                        onChange={handleInputChange}
                                        lineHeight= '1.5'
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
                                            value="don't Know"
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