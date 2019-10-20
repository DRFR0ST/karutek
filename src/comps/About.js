import React from "react";

const About = () => {
    const contentRef = React.useRef(null);


    return <div className="About">
        <div className="About__content" ref={contentRef}>
        <h1>About me</h1>

        <p>I am a young woman from Poland, Poznań, with soul and creativity of a child, known as <mark>Karutek</mark>.</p>
        <p>I’m passionate in almost any kind of art. I love digital drawing, as much as hand drawing, I love music, graphic design, illustration, interior design, and world created by books. I adore movies and theater. I’ve been passionate about Visual merchandising for two years, because of my current workplace. I love taking pictures and I can tell I am a really good photographer.</p>
        <p>My life revolves around art.</p>
        <p>I am a beginner of Adobe Photoshop and Illustrator. I can edit a simple video in Adobe Premiere and create simple 3D scenes in Cinema 4D. For editing my photos I use Adobe Lightroom, and i really love working in this program.</p>
        <p>In my near future I would like to become a junior graphic designer, to stop wasting my time for casual job, and start creating art for full time.</p>
        </div>
        <div className="About__contact">
            <h2>Contact</h2>
            <a href="tel:+48739902153">+48 739 902 153</a>
            <br/>
            <a href="mailto:karuutek@gmail.com">karuutek@gmail.com</a>
        </div>
    </div>
}

export default About;