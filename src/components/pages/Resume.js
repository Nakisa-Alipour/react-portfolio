import React from 'react';


const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h1 className="h1-class">Resume</h1>

            <br></br>

            <h2 className="h2-class2">Education: </h2>
                <ul>
                    <li>Master of Business Administration</li>
                    <li>Master of international Finance</li>
                    <li>Bachelor of Software Engineering</li>
                    <li>Monash Bootcamp Full-stack Web Development</li>
                </ul>

            <br></br>

            <h2 className="h2-class2">Skills: </h2>
            <br></br>
            <h2 class="h2-class">Front-End Proficiencies</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>version control/Git</li> 
                    <li>responsive design</li>
                </ul>
            <br></br>
            <h2 className="h2-class">Back-End Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>Model View Controller</li>
                    <li>REST</li>
                    <li>Progressive Web Applications</li>
                </ul>
            <br></br>
            <h2 className="h2-class">Dev Tool Proficiencies</h2>
                <ul>
                    <li>Git</li>
                    <li>npm</li>
                    <li>Jest</li>
                    <li>Webpack</li>
                </ul>
            <br></br>
            <h2 className="h2-class">Database Proficiencies</h2>
                <ul>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL</li>
                    <li>SQLite</li>
                    <li>GraphQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
        </section>

    );
}

export default Resume;