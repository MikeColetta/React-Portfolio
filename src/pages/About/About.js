import mikeImage from "../../assets/images/Mike.jpg";
import "./style.css";

function About() {
    return (
        <div className="container my-2" id="about-me">
            <div className="card cardStyle">
                <div className="card-header">
                    <h2>About</h2>
                </div>
                <div className="card-body">
                    <img src={mikeImage} className="card-img-top about-me-img" alt="Mike in San Diego."></img>
                    <p className="card-text about-me-text">I’m a Seattle based comedian, podcaster, and coding student
                    originally from Alaska. I started comedy performing improv in the wheat-infested, cultural boomtown
                    of Pullman, Washington. There I joined the Nuthouse Improv Comedy Troupe, where I performed and
                    directed. I’m fortunate that comedy has taken me across the country. I’ve performed at The
                    Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, Bumbershoot, and comedy clubs all
                    over the country and in Canada.</p>
                    <p className="card-text about-me-text">I’ve always wanted to learn to code and this experience has truly
                    opened my eyes to the possibilities. When not working on code or touring, I enjoy fishing, camping,
                    hiking, video games, and Dungeons & Dragons. Video games are what got me into the idea of learning
                    to code. I’ve always been fascinated by world building in games and the idea of creating a digital
                    world really appeals to me. I also host a video game history podcast titled Codex: History of Video
                    Games. We have a significant audience that further motivates me to learn more about the medium I
                    enjoy.</p>
                    <p>Technologies I've used recently include:</p>
                    <ul className="techList">
                        <li className="techListItem">HTML5</li>
                        <li className="techListItem">CSS3</li>
                        <li className="techListItem">Bootstrap</li>
                        <li className="techListItem">Javascript ES6+</li>
                        <li className="techListItem">JQuery</li>
                        <li className="techListItem">Node.js</li>
                        <li className="techListItem">Express</li>
                        <li className="techListItem">MySQL</li>
                        <li className="techListItem">Sequelize</li>
                        <li className="techListItem">Handlebars</li>
                        <li className="techListItem">MongoDB</li>

                    </ul>
                    <p className="card-text about-me-text">My goal for the coding boot camp are to learn as much as possible. So
                    far my enthusiasm for the subject has made that not difficult at all. I look forward to my future
                    opportunities in the boot camp and beyond!</p>
                </div>
            </div>
        </div>
    )
}

export default About;