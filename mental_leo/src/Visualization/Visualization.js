import React from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar } from "recharts";

//  DATA FOR GENDERWISE VISUALIZATION

const barChartData = [
    {
        Gender: "Male",
        Number: 987
    },
    {
        Gender:"Female",
        Number: 247
    },
    {
        Gender:"Transgender",
        Number: 19
    }
];

// DATA FOR COUNTRYWISE VISUALIZATION
//DATA FOR COUNTRY GRAPH1

const countryChartdata1 =[
    {
        Country: "United States",
        Yes: 409,
        No: 341
    },
    {
        Country: "UK",
        Yes:92,
        No: 92
    },
    {
        Country: "Canada",
        Yes: 37,
        No: 35
    },
    {
        Country: "Germany",
        Yes: 21,
        No: 24
    },
    {
        Country: "Ireland",
        Yes: 13,
        No: 14
    },
    {
        Country: "Netherlands",
        Yes: 9,
        No: 17
    },
    {
        Country: "Australia",
        Yes: 13,
        No: 8
    },
    {
        Country: "France",
        Yes: 2,
        No: 11
    }
];

//DATA FOR COUNTRY GRAPH2

const countryChartdata2 = [
    {
        Country: "India",
        Yes: 3,
        No: 7
    },
    {
        Country: "Poland",
        Yes: 4,
        No: 3
    },
    {
        Country: "Italy",
        Yes: 1,
        No: 6
    },
    {
        Country: "Sweden",
        Yes: 2,
        No: 5
    },
    {
        Country: "Switzerland",
        Yes: 3,
        No: 4
    },
    {
        Country: "Newzeland",
        Yes: 5,
        No: 2
    },
    {
        Country: "Belgium",
        Yes: 1,
        No: 5
    },
    {
        Country: "Brazil",
        Yes: 2,
        No: 4
    },
    {
        Country: "South Africa",
        Yes: 2,
        No: 4
    },
    {
        Country: "Israel",
        Yes: 0,
        No: 5
    },
    {
        Country: "Singapore",
        Yes: 1,
        No: 3
    },
    {
        Country: "Bulgaria",
        Yes: 2,
        No: 2
    },
    {
        Country: "Russia",
        Yes: 0,
        No: 3
    }
];

//DATA FOR COUNTRY GRAPH3

const countryChartdata3 =[
    {
        Country: "Mexico",
        Yes: 1,
        No: 2
    },
    {
        Country: "Austria",
        Yes: 0,
        No: 3
    },
    {
        Country: "Finland",
        Yes: 1,
        No: 2
    },
    {
        Country: "Greece",
        Yes: 0,
        No: 2
    },
    {
        Country: "Colombia",
        Yes: 0,
        No: 2
    },
    {
        Country: "Portugal",
        Yes: 0,
        No: 2
    },
    {
        Country: "Croatia",
        Yes: 2,
        No: 0
    },
    {
        Country: "Georgia",
        Yes: 0,
        No: 1
    },
    {
        Country: "Molodova",
        Yes: 1,
        No: 0
    },
    {
        Country: "Nigeria",
        Yes: 0,
        No: 1
    },
    {
        Country: "Denmark",
        Yes: 1,
        No: 0
    },
    {
        Country: "China",
        Yes: 0,
        No: 1
    },
    {
        Country: "Thailand",
        Yes: 0,
        No: 1
    }
];

//DATA FOR COUNTRY GRAPH4

const countryChartdata4 = [
    {
        Country: "Norway",
        Yes: 0,
        No: 1
    },
    {
        Country: "Czech Republic",
        Yes: 0,
        No: 1
    },
    {
        Country: "Latvia",
        Yes: 0,
        No: 1
    },
    {
        Country: "Japan",
        Yes: 1,
        No: 0
    },
    {
        Country: "Hungary",
        Yes: 0,
        No: 1
    },
    {
        Country: "Bosnia & Herz.",
        Yes: 0,
        No: 1
    },
    {
        Country: "Uruguay",
        Yes: 0,
        No: 1
    },
    {
        Country: "Spain",
        Yes: 0,
        No: 1
    },
    {
        Country: "Zimbabwe",
        Yes: 1,
        No: 0
    },
    {
        Country: "Romania",
        Yes: 0,
        No: 1
    },
    {
        Country: "Costa Rica",
        Yes: 0,
        No: 1
    },
    {
        Country: "Slovenia",
        Yes: 1,
        No: 0
    },
    {
        Country: "Philippines",
        Yes: 0,
        No: 1
    }
];

// CODE FOR VISUALIZAION FUNCTION

function Visualization() {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#bdbdbd' }}>
                
                <h1 style={{ color: "#26c6da", backgroundColor: "#14212e", fontFamily: 'BlinkMacSystemFont' }}>::WELCOME TO THE VISUALIZATION PAGE:: </h1>
                    
                    {/* GRAPH FOR GENDERWISE */}
                    <div >
                        <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated  By Genderwise</u></h3>
                        <ResponsiveContainer width="100%" aspect={2}>
                            <BarChart data={barChartData} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <Tooltip />
                                <Bar dataKey="Gender" fill="#00796b" />
                                <Bar dataKey="Number" fill="#D8452B" />
                                <XAxis dataKey="Gender" interval="preserveStartEnd" tickFormatter={(value) => value} />
                                <YAxis label={{ value: 'Total No. Of Counts', angle: -90, position: 'insideLeft'}} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* GRAPH FOR COUNTRYWISE */}
                    <div>
                        <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated or Not By Countrywise</u></h3>
                        <ResponsiveContainer width="100%" aspect={2}>
                            <BarChart data={countryChartdata1} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <Tooltip />
                                <Bar dataKey="Yes" fill="#046C77" />
                                <Bar dataKey="No" fill="#B53535" />
                                <XAxis dataKey="Country" interval="preserveStartEnd" tickFormatter={(value) => value} />
                                <YAxis label={{ value: 'Total No. Of Counts', angle: -90, position: 'insideLeft' }} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated or Not By Countrywise</u></h3>
                        <ResponsiveContainer width="100%" aspect={2}>
                            <BarChart data={countryChartdata2} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <Tooltip />
                                <Bar dataKey="Yes" fill="#046C77" />
                                <Bar dataKey="No" fill="#B53535" />
                                <XAxis dataKey="Country" interval="preserveStartEnd" tickFormatter={(value) => value} />
                                <YAxis label={{ value: 'Total No. Of Counts', angle: -90, position: 'insideLeft' }} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated or Not By Countrywise</u></h3>
                        <ResponsiveContainer width="100%" aspect={2}>
                            <BarChart data={countryChartdata3} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <Tooltip />
                                <Bar dataKey="Yes" fill="#046C77" />
                                <Bar dataKey="No" fill="#B53535" />
                                <XAxis dataKey="Country" interval="preserveStartEnd" tickFormatter={(value) => value} />
                                <YAxis label={{ value: 'Total No. Of Counts', angle: -90, position: 'insideLeft' }} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div>
                        <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated or Not By Countrywise</u></h3>
                        <ResponsiveContainer width="100%" aspect={2}>
                            <BarChart data={countryChartdata4} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <Tooltip />
                                <Bar dataKey="Yes" fill="#046C77" />
                                <Bar dataKey="No" fill="#B53535" />
                                <XAxis dataKey="Country" interval="preserveStartEnd" tickFormatter={(value) => value} />
                                <YAxis label={{ value: 'Total No. Of Counts', angle: -90, position: 'insideLeft' }} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
            </div>
        </React.Fragment>
    );
}
export default Visualization;