import "../styles/DisplaySection.css";
import Page from "./Page";

const DisplaySection = ({ fullName, email, github, phoneNumber, schools, companies }) => {
    return (
        <div className="display-section">
            <Page
                fullName={fullName}
                email={email}
                github={github}
                phoneNumber={phoneNumber}
                schools={schools}
                companies={companies}
            />
        </div>
    );
};

export default DisplaySection;