import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'


//Css for date range picker

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './styles.css'
import { formatDistance, subDays } from 'date-fns'


import { DateRangePicker, DateRange } from 'react-date-range';

let initialValue = {
    title: 'Select a range',
    startDate: '',
    endDate: '',
}

class main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null
        }

        this.handleSelect = this.handleSelect.bind(this)

    }




    handleSelect(ranges) {
        //console.log(ranges.selection);
        const { startDate, endDate } = ranges.selection
        this.setState({
            startDate: startDate,
            endDate: endDate
        })

        console.log(this.state.startDate)
        console.log(this.state.endDate)

    }



    render() {


        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }




        return (
            <div className="container">
                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={this.handleSelect}
                    months={2}
                    direction="horizontal"
                />
                <div className="belowRangePicker">
                    <h3>Please select range</h3>
                    <p></p>
                    <Button>Continue</Button>

                </div>

            </div>
        )
    }

}

export default main
