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



class result extends Component {
    constructor(props) {
        super(props)

        this.renderWordCloud = this.renderWordCloud.bind(this)
    }


    renderWordCloud() {

        wordCloudData = this.props.Data




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


        return (
            <div className="resultWrapper">
                {this.renderWordCloud()}

            </div>
        )
    }
}

export default result