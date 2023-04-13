import React from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar } from "recharts";

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
function CourseBarChart() {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#bdbdbd' }}>
                <h1 style={{ color: "#26c6da", backgroundColor: "#14212e", fontFamily: 'BlinkMacSystemFont' }}>::WELCOME TO THE VISUALIZATION PAGE:: </h1>
                {/* <marquee direction="right" behavior="alternate"><h1 style={{ color: "#14212e" }}>WELCOME TO THE VISUALIZATION PAGE </h1></marquee> */}
                <div >
                    <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated or Not By Genderwise</u></h3>
                    <ResponsiveContainer width="100%" aspect={2}>
                        <BarChart data={barChartData} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                            <CartesianGrid strokeDasharray="2 2" />
                            <Tooltip />
                            <Bar dataKey="Gender" fill="#00796b" />
                            <Bar dataKey="Number" fill="#e91e63" />
                            <XAxis dataKey="Gender" interval="preserveStartEnd" tickFormatter={(value) => value} />
                            <YAxis />
                            <Legend />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <h3 style={{ color: "#880e4f", fontSize: "20px" }}><u>Visualize The Data Whether How Many Number Of People Treated or Not By Countrywise</u></h3>
                    <ResponsiveContainer width="100%" aspect={2}>
                        <BarChart data={barChartData} margin={{ left: 50, right: 50, top: 100, bottom: 100 }}>
                            <CartesianGrid strokeDasharray="2 2" />
                            <Tooltip />
                            <Bar dataKey="gender" fill="#00796b" />
                            <Bar dataKey="num" fill="#e91e63" />
                            <XAxis dataKey="gender" interval="preserveStartEnd" tickFormatter={(value) => value} />
                            <YAxis />
                            <Legend />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </React.Fragment>
        

    );
}

export default CourseBarChart;