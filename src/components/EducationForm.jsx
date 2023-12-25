import "../styles/EducationForm.css";
import SchoolIcon from "../assets/svg/school.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";

const EducationForm = () => {
    return (
        <div className="education-form">
            <header>
                <img src={SchoolIcon} alt="school icon" />
                <h2>Education</h2>
                <button>
                    <img src={ArrowDownIcon} alt="arrow icon" />
                </button>
            </header>
        </div>
    );
};

export default EducationForm;