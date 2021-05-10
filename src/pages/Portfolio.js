function Portfolio() {
    return (
        <div className="container my-2" id="portfolio">
        <div className="card cardStyle">
            <div className="card-header">
                <h2>Portfolio</h2>
            </div>
            <div className="row portfolioCard">
                <div className="card projectCard">
                    <div className="card-body">
                        <h5 className="card-title portfolioText">The Relocator</h5>
                        <img src="./Images/TheRelocator.JPG" className="card-img-top mb-2 portImg" alt="The Relocator"></img>
                        <h6 className="card-subtitle mb-2 portfolioText">Find your forever home!</h6>
                        <p className="card-text portfolioText">The Relocator is an app for users that want to compare two
                            cities. The app compares the location, cost of living, and weather data of two cities. The
                            Relocator also stores previous user searches for later use.</p>
                        <a href="https://mikecoletta.github.io/Group-Project-One/" className="card-link" target="_blank"><i
                                className="fa fa-link fa-2x" aria-hidden="true"></i></a>
                        <a href="https://github.com/MikeColetta/Group-Project-One" className="card-link" target="_blank"><i
                                className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card projectCard">
                    <div className="card-body">
                        <h5 className="card-title portfolioText">Dank Reviews</h5>
                        <img src="./Images/DankReviews.JPG" className="card-img-top mb-2 portImg" alt="The Relocator"></img>
                        <h6 className="card-subtitle mb-2 portfolioText">Review Memes from Reddit!</h6>
                        <p className="card-text portfolioText">Dank Reviews lets users create an account and review silly
                            memes from Reddit.
                            It uses the reddit.images NPM package to pull a random meme. Users can see other users
                            reviews and all of the reviews
                            are stored in a MySQL database.</p>
                        <a href="https://bootcamp-project2-uw.herokuapp.com/" className="card-link" target="_blank"><i
                                className="fa fa-link fa-2x" aria-hidden="true"></i></a>
                        <a href="https://github.com/kharam/Dank-Reviews" className="card-link" target="_blank"><i
                                className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card projectCard">
                    <div className="card-body">
                        <h5 className="card-title portfolioText">Weather Dashboard</h5>
                        <img src="./Images/WeatherDashboard.JPG" className="card-img-top mb-2 portImg" alt="The Relocator"></img>
                        <h6 className="card-subtitle mb-2 portfolioText">Check the weather!</h6>
                        <p className="card-text portfolioText">A weather dashboard app that displays both the current
                            weather and the five day forecast for a searched city. The The UV index is
                            color coded based on the severity level. The user's search history is
                            saved in local storage.</p>
                        <a href="https://mikecoletta.github.io/Weather-Dashboard/" className="card-link" target="_blank"><i
                                className="fa fa-link fa-2x" aria-hidden="true"></i></a>
                        <a href="https://github.com/MikeColetta/Weather-Dashboard" className="card-link" target="_blank"><i
                                className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card projectCard">
                    <div className="card-body">
                        <h5 className="card-title portfolioText">Coding Quiz</h5>
                        <img src="./Images/CodingQuiz.JPG" className="card-img-top mb-2 portImg" alt="The Relocator"></img>
                        <h6 className="card-subtitle mb-2 portfolioText">Test your knowledge!</h6>
                        <p className="card-text portfolioText">When the player starts the game they have 75 seconds to
                            complete the quiz. Every wrong answer takes time off the clock. The final score is the time
                            left on the clock. High scores are saved to local storage.</p>
                        <a href="https://mikecoletta.github.io/Code-Quiz/" className="card-link" target="_blank"><i
                                className="fa fa-link fa-2x" aria-hidden="true"></i></a>
                        <a href="https://github.com/MikeColetta/Code-Quiz" className="card-link" target="_blank"><i
                                className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
        )
}

export default Portfolio;