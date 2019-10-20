import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const contentRef = React.useRef(null);


    return <div className="About">
        <div className="About__content" ref={contentRef}>
        <h1>About me</h1>

        <p>I am a young woman from Poland, Poznań, with soul and creativity of a child, known as Karutek.</p>
        <p>I’m passionate in almost any kind of art. I love digital drawing, as much as hand drawing, I love music, graphic design, illustration, interior design, and world created by books. I adore movies and theater. I’ve been passionate about Visual merchandising for two years, because of my current workplace. I love taking pictures and I can tell I am a really good photographer.</p>
        <p>My life revolves around art.</p>
        <p>I am a beginner of Adobe Photoshop and Illustrator. I can edit a simple video in Adobe Premiere and create simple 3D scenes in Cinema 4D. For editing my photos I use Adobe Lightroom, and i really love working in this program.</p>
        <p>In my near future I would like to become a junior graphic designer, to stop wasting my time for casual job, and start creating art for full time.</p>
        </div>
        <div className="About__contact">
            <div className="About__contact--content">
                <h1>Contact</h1>
                <a href="tel:+48739902153"><FontAwesomeIcon icon={faEnvelope} style={{marginRight: "5px"}} /> +48 739 902 153</a>
                <a href="mailto:karuutek@gmail.com"><FontAwesomeIcon icon={faPhone} style={{marginRight: "5px"}} /> karuutek@gmail.com</a>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.721668996726!2d16.936704893343656!3d52.41172042740974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b4123b34733%3A0x35d063bb858dd1dc!2sMa%C5%82e%20Garbary!5e0!3m2!1sen!2spl!4v1571577734607!5m2!1sen!2spl" frameborder="0" allowfullscreen=""></iframe>
        </div>
    </div>
}

export default About;