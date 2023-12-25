import "../styles/DisplaySection.css";
import Page from "./Page";

const DisplaySection = ({ fullName, email, github, phoneNumber, schools }) => {
    return (
        <div className="display-section">
            <Page
                fullName={fullName}
                email={email}
                github={github}
                phoneNumber={phoneNumber}
                schools={schools}
            />
        </div>
    );
};

export default DisplaySection;