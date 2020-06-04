import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import './styles.css'

import "react-datepicker/dist/react-datepicker.css";
import { render } from '@testing-library/react'


import Result from './../result/result'



class Main extends Component {
    //     const[startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    //useEffect(() => console.log(startDate), [startDate])
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            showResult: false
        };

        this.onButtonClick = this.onButtonClick.bind(this)

    }



    setStartDate = date => {
        this.setState({
            startDate: date
        });
        //console.log(date)
    };

    setEndDate = date => {
        this.setState({
            endDate: date
        });
        // console.log(date)

    };

    onButtonClick() {
        this.setState({
            showResult: true,
        });

    }




    render() {

        const { startDate, endDate } = this.state


        return (

            <div className="wrapper">


                <div className="container">


                    <h3 id="title">Please select a range</h3>


                    <div className="datePickers">

                        <p id="from">From </p>
                        <DatePicker
                            selected={startDate}
                            onChange={this.setStartDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}

                        />
                        <p id="to"> To </p>
                        <DatePicker
                            selected={endDate}
                            onChange={this.setEndDate}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />

                    </div>

                    {/* <p>Start: {startDate.toDateString()}</p>
                <p>End: {endDate.toDateString()}</p> */}

                    <Button onClick={this.onButtonClick} id="contButton">Generate</Button>

                    <div className="resultWrapper">
                        {this.state.showResult ? <Result startDate={startDate} endDate={endDate} /> : null}

                    </div>


                </div>
            </div>
        )
    }

}

export default Main
