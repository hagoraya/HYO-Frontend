import React, { Component } from 'react'
import './style.css'

import { TagCloud } from 'react-tagcloud'
import { getAllByPlaceholderText } from '@testing-library/react'
import { getDefaultLocale } from 'react-datepicker'

const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 22 },
]

const colorOption = {
    luminosity: 'bright',
    hue: 'rgb',
    alpha: 6
}


class result extends Component {



    async getdata() {
        console.log("From" + this.props.startDate + " to " + this.props.endDate) //remove later
        const url = "https://api.randomuser.me/"
        const response = await fetch(url)
        const data = await response.json();
        console.log(data)


    }

    renderWordCloud() {
        return (

            <TagCloud
                minSize={30}
                maxSize={70}
                tags={data}
                colorOptions={colorOption}
                shuffle={true}
            />
        )

    }




    render() {

        { this.getdata() }

        return (
            <div className="resultWrapper">

                <p>from {this.props.startDate} to {this.props.endDate}</p>

                {this.renderWordCloud()}

            </div>
        )
    }
}

export default result
