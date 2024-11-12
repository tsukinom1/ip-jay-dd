import WriteToUs from "../components/contact/WriteToUs.jsx";
import Contact from "../components/contact/Contact.jsx";
import AboutInfo from "../components/contact/AboutInfo.jsx";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <AboutInfo />
                <Contact />
                <WriteToUs/>
            </div>
        </div>
    );
};

export default About;