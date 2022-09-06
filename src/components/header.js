import React from "react"
import linkedin from "../socialMediaIcons/linkedin.png"
import github from "../socialMediaIcons/github.png"


const header = () => {
    return(
        <div className="header">
            <div className="leftContainer">
                <span className="myName">Aditya Yadav</span>
                <button className="resumeButton">Download Resume</button> 
            </div>
            <div className="rightContainer">
                <img className="linkDin" src={linkedin} alt="linkdin" />
                <img className="gitHub" src={github} alt="github" />
            </div>
        </div>
    )
}

export default header