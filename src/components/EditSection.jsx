import "../styles/EditSection.css";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const EditSection = ({
    fullName,
    updateFullName,
    email,
    updateEmail,
    github,
    updateGithub,
    phoneNumber,
    updatePhoneNumber,
    schools, 
    updateSchools,
    companies,
    updateCompanies
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
            <EducationForm 
                schools={schools}
                updateSchools={updateSchools}
            />
            <ExperienceForm
                companies={companies}
                updateCompanies={updateCompanies}
            />
        </div>
    );
};

export default EditSection;