import React from "react";
import { Container } from ".";

const About = () => {
    const [opacity, setOpacity] = React.useState(1.0);
    const contentRef = React.useRef(null);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            var st = window.scrollY - 100;
            const limit = window.innerHeight + (contentRef.current ? contentRef.current.clientHeight - 150 : 200);

            /* avoid unnecessary call to jQuery function */
            if(st > limit) setOpacity(0);
            if (st <= limit) {
               setOpacity((1 - st/limit));
            }
        });
    }, []);


    return <div className="About" style={{opacity, height: contentRef.current ? contentRef.current.clientHeight - 150 : 200}}>
        <div className="About__content" ref={contentRef}>
        <h1>About me</h1>
        <p>Nisi fugiat velit dolor incididunt amet quis laboris. Anim incididunt cillum occaecat laborum fugiat minim ea pariatur est ad ipsum nulla non. In sunt laboris voluptate enim aliquip ullamco esse fugiat proident. Officia esse cupidatat consectetur cupidatat nostrud aliquip. Enim irure commodo ea proident esse cillum anim minim ea. Do fugiat nisi aliquip laboris commodo amet tempor nostrud velit consectetur sit ut. Qui minim laborum adipisicing et voluptate incididunt adipisicing sit sunt consectetur officia in.</p>
        <p>Reprehenderit reprehenderit pariatur adipisicing laboris nisi voluptate dolor aliquip. Ut occaecat eu sint amet ex esse magna dolor adipisicing ut deserunt pariatur. Ut officia fugiat dolor duis minim exercitation mollit ex Lorem quis officia. Velit adipisicing eiusmod do id anim est culpa commodo occaecat ea dolore id tempor proident.</p>
        </div>
    </div>
}

export default About;