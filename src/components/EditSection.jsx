import "../styles/EditSection.css";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";

const EditSection = ({
    fullName,
    updateFullName,
    email,
    updateEmail,
    github,
    updateGithub,
    phoneNumber,
    updatePhoneNumber
}) => {
    return (
        <div className="edit-section">
            <PersonalDetailsForm
                fullName={fullName}
                updateFullName={updateFullName}
                email={email}
                updateEmail={updateEmail}
                github={github}
                updateGithub={updateGithub}
                phoneNumber={phoneNumber}
                updatePhoneNumber={updatePhoneNumber}
            />
            <EducationForm />
        </div>
    );
};

export default EditSection;