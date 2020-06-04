import React from 'react'
import Container from 'react-bootstrap/Container'
import './styles.css'

const about = () => {
    return (
        <div className="wrapper">
            <Container className="cont">
                <h3>About this project</h3>
                <p>This project allows to see what words dominate the title if the articles within a specific time frame in the politics section of major news outlets.</p>
                <p>The data from news outlets is scraped using Python which collects the titles and publish dates of the articles posted by news outlets. The data then is saved into a
                 database where it can be accessed using an API to present on the frontend</p>

                <h2>Authors</h2>
                <p>API: Saccha</p>
                <p>Backend: llya</p>
                <p>Frontend: Harpreet</p>
                <p>Web Scraper: Alex</p>

                <h2>Sources</h2>


            </Container>
        </div>
    )
}

export default about
