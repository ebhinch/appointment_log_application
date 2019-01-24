import React, { Component } from 'react';

class AppointmentLog extends Component {

    appointmentLog = [
        {
            time: "9 to 10 a.m.",
            name: "",
            number: ""
        },
        {
            time: "10 to 11 a.m.",
            name: "",
            number: ""
        },
        {
            time: "11 a.m. to 12 p.m.",
            name: "",
            number: ""
        },
        {
            time: "12 to 1 p.m.",
            name: "",
            number: ""
        },
        {
            time: "1 to 2 p.m.",
            name: "",
            number: ""
        },
        {
            time: "2 to 3 p.m.",
            name: "",
            number: ""
        },
        {
            time: "3 to 4 p.m.",
            name: "",
            number: ""
        },
        {
            time: "4 to 5 p.m.",
            name: "",
            number: ""
        }
    ]

    appointmentClicked = (event) => {
        console.log("clicked")
    }

    render() {
        return(
            <div>
                {this.appointmentLog.map(individualAppointmentSlot => {
                    return (
                        <ul>
                            <li onClick={this.appointmentClicked}>{individualAppointmentSlot.time}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}


export default AppointmentLog;
