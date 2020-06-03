import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import './styles.css'

import "react-datepicker/dist/react-datepicker.css";



const Main = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    //useEffect(() => console.log(startDate), [startDate])


    return (

        <div className="wrapper">


            <div className="container">


                <h3 id="title">Please select range</h3>


                <div className="datePickers">

                    <p id="from">From </p>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <p id="to"> To </p>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />

                </div>



                <div className="belowRangePicker">
                    {/* <p>Start: {startDate.toDateString()}</p>
                <p>End: {endDate.toDateString()}</p> */}

                    <Button id="contButton">Continue</Button>

                </div>

            </div>
        </div>
    )
}



export default Main
