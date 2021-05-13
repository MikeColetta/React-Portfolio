import "./style.css";

function Contact() {
    return (
        <div className="container my-2" id="contact">
        <div className="card contactCard">
            <div className="card-header">
                <h2>Contact</h2>
            </div>
            <div className="row iconRow">
                <div className="card col-6 iconCard">
                    <a href="https://www.linkedin.com/in/mike-coletta/" target="_blank"><span
                            className="fa fa-linkedin fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="https://github.com/MikeColetta" target="_blank"><span
                            className="fa fa-github githubContactLink fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="mailto:coletta.mike@gmail.com" target="_blank"><span
                            className="fa fa-envelope-o fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="tel:+1-253-315-0112" target="_blank"><span className="fa fa-phone fa-5x"></span></a>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Contact;