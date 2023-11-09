
const AboutMe = (props) => {
    return (

            <div className="about-me">
                <h1>{props.myInfo.myName}</h1>
                <h3>Front-end Web Developer.</h3>
                <div className="my-about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur suscipit necessitatibus iusto rerum veniam vel debitis odit fugit animi.</p>
                </div>
                
                <div className="social-wraper">
                    <h2>Find me on: </h2>
                    <p><a href="https://twitter.com/adilaminDev" target="_blank"><img src="/images/x-twitter.svg" alt="X" /> <strong><u>Twitter</u></strong></a></p>
                    <p><a href="https://github.com/adilamin-dev" target="_blank"><img src="/images/github.svg" alt="" /> <strong><u>Github</u></strong></a></p>
                    <p><a href="https://linked.com/adil9" target="_blank"><img src="/images/linkedin-in.svg" alt="" /> <strong><u>Linkedin</u></strong></a></p>
                    <p><a href="https://instagram.com/adilamin_Dev" target="_blank"><img src="/images/instagram.svg" alt="" /> <strong><u>Instagram</u></strong></a></p>
                    <p><a href="https://instagram.com/adilamin_Dev" target="_blank"><img src="/images/reddit-alien.svg" alt="" /> <strong><u>Reddit</u></strong></a></p>
                    <p><a href="https://codepen.com" target="_blank"><img src="/images/codepen.svg" alt="" /> <strong><u>Codepen</u></strong></a></p>
                </div>

                


            </div>

    );
};

export default AboutMe;