import React, { Component } from 'react'
import './style.css'

import { TagCloud } from 'react-tagcloud'
import { getAllByPlaceholderText } from '@testing-library/react'
import { getDefaultLocale } from 'react-datepicker'

var wordCloudData = [

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

        console.log(this.props.Data)

        wordCloudData = this.props.Data

        // if ((this.props.personData.gender) === 'male') {
        //     wordCloudData[7].count = wordCloudData[7].count + 2
        //     console.log(wordCloudData[7].count)
        //     // console.log(wordCloudData[7].value)
        // } else {
        //     // wordCloudData['female'].count = count + 1
        //     wordCloudData[8].count = wordCloudData[8].count + 2
        //     console.log(wordCloudData[8].count)
        //}

        //console.log(wordCloudData)


        return (

            <TagCloud
                minSize={15}
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
                {this.renderWordCloud()}

            </div>
        )
    }
}

export default result