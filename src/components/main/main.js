import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import './styles.css'

import "react-datepicker/dist/react-datepicker.css";

import Result from './../result/result'




class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            showResult: false,
            endDateString: '',
            startDateString: ''
        };

        this.onButtonClick = this.onButtonClick.bind(this)

    }


    formatDate(date) {
        return date.toISOString().split('T')[0];
    }



    setStartDate = date => {

        const formatedStartDate = this.formatDate(date)
        this.setState({
            startDate: date,
            startDateString: formatedStartDate
        });
    };

    setEndDate = date => {
        const formatedEndDate = this.formatDate(date)

        this.setState({
            endDate: date,
            endDateString: formatedEndDate
        });

    };

    onButtonClick() {
        this.setState({
            showResult: true,
        });

    }




    render() {

        const { startDate, endDate, startDateString, endDateString } = this.state


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
                        {this.state.showResult ? <Result startDate={startDateString} endDate={endDateString} /> : null}

                    </div>


                </div>
            </div>
        )
    }

}

export default Main
