import React from 'react';
import '../aboutUs.css'
import meeting from '../images/meeting.png'
import writing from '../images/writing.png'

function AboutUs(){
return(
<React.Fragment>
    <h1 className='aboutUs'>About Us</h1>
        <div className="who-are-we">
            <div><img src={meeting} className="meeting"/></div>
            <div className="text">
                <h2 className='title'>Who Are We?</h2>
                <p className='paragraph'>
                    We are a dedicated team of IT and multimedia professionals based in Nepal delivering web-related
                    services and
                    customized media. Our company delivers custom fit products with ease of use and maximum return of
                    value
                    for both
                    consumers and businesses in mind. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
                <p className='paragraph'>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>

        <div className="aim">
            <div className="text">
                <h2 className='title'>What we aim for?</h2>
                <p className='paragraph'>
                    lets ask what we should write in this section because its their business.
                    lLorem Ipsum is simply dummy text of the printing and typesetting industry.
                    when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting.
                </p>
                <p className='paragraph'>
                    remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='writing'>
                <img src={writing} className='writing'/>
            </div>
            
        </div>

</React.Fragment>
)
}

export default AboutUs;