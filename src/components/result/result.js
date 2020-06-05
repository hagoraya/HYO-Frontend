import React, { Component } from 'react'
import './style.css'

import { TagCloud } from 'react-tagcloud'
import { getAllByPlaceholderText } from '@testing-library/react'
import { getDefaultLocale } from 'react-datepicker'

var wordCloudData = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 22 },
    { value: 'male', count: 1 },
    { value: 'female', count: 1 }
]

const colorOption = {
    luminosity: 'bright',
    hue: 'rgb',
    alpha: 6
}

var mcount = 0
var fcount = 0

class result extends Component {
    constructor(props) {
        super(props)

        this.renderWordCloud = this.renderWordCloud.bind(this)
    }


    renderWordCloud() {

        if ((this.props.personData.gender) === 'male') {
            wordCloudData[7].count = wordCloudData[7].count * 2
            // console.log(wordCloudData[7].value)
        } else {
            // wordCloudData['female'].count = count + 1
            wordCloudData[8].count = wordCloudData[8].count * 2



        }

        //console.log(wordCloudData)


        return (

            <TagCloud
                minSize={30}
                maxSize={70}
                tags={wordCloudData}
                colorOptions={colorOption}
                shuffle={true}
            />
        )

    }




    render() {

        // { this.getdata() }

        return (
            <div className="resultWrapper">
                <p>{this.props.personData.email}</p>
                {this.renderWordCloud()}

            </div>
        )
    }
}

export default result