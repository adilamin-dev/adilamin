const Projects = () => {
    return (
        <div className="projects">

            <div className="projectItem">
                <div className="projectImage">
                    <a href="https://adilamin-dev.github.io/Rock-Paper-Scissors/" target="_blank">
                        <img src="/images/projectsImg/rps-resume.svg" alt="" />
                    </a>
                </div>
                <div className="projectContents">
                    <div className="PCTitle">
                        <a href="https://adilamin-dev.github.io/Rock-Paper-Scissors/" target="_blank">
                            <h2>Rock Paper Scissors</h2>
                        </a>
                        <div className="PTechnologies">
                            <img src="/images/html5.svg" alt="HTML" />
                            <img src="/images/css3-alt.svg" alt="CSS" />
                            <img src="/images/sass.svg" alt="SCSS" />
                            <img src="/images/square-js.svg" alt="JavaScript" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fugit molestias quos veritatis pariatur quia quae reiciendis temporibus, nobis labore!</p>

                </div>
            </div>


            

        </div>
    );
};

export default Projects;