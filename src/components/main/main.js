import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import './styles.css'

import "react-datepicker/dist/react-datepicker.css";

import Result from './../result/result'


var firstLoad = true;

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            showResult: false,
            endDateString: '',
            startDateString: '',
            personData: null
        };

        this.onButtonClick = this.onButtonClick.bind(this)
        this.gettingData = this.gettingData.bind(this)

    }


    formatDate(date) {
        return date.toISOString().split('T')[0];
    }



    setStartDate = date => {

        const formatedStartDate = this.formatDate(date)
        this.setState({
            startDate: date,
            startDateString: formatedStartDate
        }, () => {
            //console.log("Start String: " + this.state.startDateString)

        });


    };

    setEndDate = date => {
        const formatedEndDate = this.formatDate(date)

        this.setState({
            endDate: date,
            endDateString: formatedEndDate
        }, () => {
            // console.log("end String: " + this.state.endDateString)
        });



    };

    async onButtonClick() {

        this.setState({
            showResult: false
        })

        const url = "https://api.randomuser.me/"
        const response = await fetch(url)
        const data = await response.json();
        //console.log(data)

        this.setState({
            showResult: true,
            personData: data.results[0]
        });
    }



    gettingData() {
        if (firstLoad) {
            firstLoad = false
            return (
                null
            )
        } else {
            return (
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            )
        }

    }


    render() {

        const { startDate, endDate, startDateString, endDateString, personData } = this.state


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
                        {this.state.showResult ? <Result startDate={startDateString} endDate={endDateString} personData={personData} /> : this.gettingData()}

                    </div>


                </div>
            </div>
        )
    }

}

export default Main
