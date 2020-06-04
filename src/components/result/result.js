import React from 'react'
import './style.css'

import { TagCloud } from 'react-tagcloud'

const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
]

const colorOption = {
    luminosity: 'bright',
    hue: 'rgb',
    alpha: 6
}


const result = ({ startDate, endDate }) => {
    console.log(startDate);
    console.log(endDate);

    return (
        <div className="resultWrapper">


            <TagCloud
                minSize={30}
                maxSize={70}
                tags={data}
                colorOptions={colorOption}

            />
        </div>
    )
}

export default result
