import React from 'react';
import '../../components/style/Projects.css';
import '../../components/style/Style.css';


function Projects () {
    return (
        <section id="projects">
            <h1 className="h1-class">Projects</h1>
            <p>Somethings I've built:</p>
            <br></br>
            <div className="images">
                <figure>
                    <a href="https://nakisa-alipour.github.io/Password-Generator/"><img  className="small-image" src={require("assets/projects-images/Password Generator.jpg")} alt="white back ground page with password generator"/></a>
                    <figcaption>Password Generator</figcaption>
                </figure>
                <figure>
                    <a href="https://nakisa-alipour.github.io/Timed-Coding-Quiz/"><img className="small-image" src={require("assets/projects-images/Multiple Choice Quiz.jpg")} alt="page with multiple choice quiz"/></a>
                    <figcaption>Multiple Choice Quiz</figcaption>
                </figure>
                <figure>
                    <a href="https://nakisa-alipour.github.io/Work-Day-Scheduler/"><img className="small-image" src={require("assets/projects-images/Work Day Scheduler.jpg")} alt="page with gray,red and green rows"/></a>
                    <figcaption>Work Day Scheduler</figcaption>
                </figure>
                <figure>
                    <a href="https://nakisa-alipour.github.io/5-day-weather-forecast/"><img className="small-image" src={require("assets/projects-images/Weather Dashboard.jpg")} alt="page with blue sky and clouds background"/></a>
                    <figcaption>Five Day Weather Dashboard</figcaption>
                </figure>
                <figure>
                    <a href="https://note-taker-heroku-app.herokuapp.com/"><img className="small-image" src="assets/projects-images/Note taker.jpg" alt="white page background with blue Note Taker header"/></a>
                    <figcaption>Note Taker</figcaption>
                </figure>
                <figure>
                    <a href="https://pwa-note-modifier-c775fafcd0b7.herokuapp.com/"><img className="small-image" src={require("assets/projects-images/Text Editor.jpg")} alt="black background page with Just Another Text Editor title"/></a>
                    <figcaption>Text Editor</figcaption>
                </figure>
            </div>
        </section>

    );
}

export default Projects;