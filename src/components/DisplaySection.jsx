import "../styles/DisplaySection.css";
import Page from "./Page";

const DisplaySection = ({ fullName, email, github, phoneNumber }) => {
    return (
        <div className="display-section">
            <Page
                fullName={fullName}
                email={email}
                github={github}
                phoneNumber={phoneNumber}
            />
        </div>
    );
};

export default DisplaySection;