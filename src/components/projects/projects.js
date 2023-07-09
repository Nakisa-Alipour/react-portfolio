import React from 'react';
import './projects.css';
import '../style.css';


function Projects () {
    return (
        <section id="projects" class="projects-section">
            <h1 class="h1-class">Projects</h1>
            <p>Somethings I've built:</p>
            <br></br>
            <div class="images">
                <figure>
                    <a href="https://www.google.com" target="_blank"><img  class="small-image" src="./Assets/Plexels-1.jpg" alt="city and river"/></a>
                    <figcaption>First application</figcaption>
                </figure>
                <figure>
                    <a href="https://www.google.com" target="_blank"><img class="small-image" src="./Assets/pexels-nicolas-poupart-2360569.jpg" alt="city and sea"/></a>
                    <figcaption>Second application</figcaption>
                </figure>
                <figure>
                    <a href="https://www.google.com" target="_blank"><img class="small-image" src="./Assets/pexels-stephan-müller-1473215.jpg" alt="happy face"/></a>
                    <figcaption>Third application</figcaption>
                </figure>
                <figure>
                    <a href="https://www.google.com" target="_blank"><img class="small-image" src="./Assets/pexels-pixabay-220067.jpg" alt="dark background with small light spots"/></a>
                    <figcaption>Forth application</figcaption>
                </figure>
                <figure>
                    <a href="https://www.google.com" target="_blank"><img class="small-image" src="./Assets/pexels-pixabay-259915.jpg" alt="brick wall"/></a>
                    <figcaption>Fifth application</figcaption>
                </figure>
                <figure>
                    <a href="https://www.google.com" target="_blank"><img class="small-image" src="./Assets/pexels-toni-cuenca-585752.jpg" alt="coffee and a keybord"/></a>
                    <figcaption>Sixth application</figcaption>
                </figure>
                <figure>
                    <a href="https://www.google.com" target="_blank"><img class="small-image" src="./Assets/pexels-maria-tyutina-954599.jpg" alt="hello"/></a>
                    <figcaption>Seventh application</figcaption>
                </figure>
            </div>
        </section>

    );
}

export default Projects;