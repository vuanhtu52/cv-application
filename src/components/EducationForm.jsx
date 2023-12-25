import "../styles/EducationForm.css";
import SchoolIcon from "../assets/svg/school.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import SchoolForm from "./SchoolForm";
import { useState } from "react";

const EducationForm = ({ schools, updateSchools }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = event => {
        event.preventDefault();
        setIsFormOpen(!isFormOpen);
    };

    return (
        <div className="education-form">
            <header>
                <img src={SchoolIcon} alt="school icon" />
                <h2>Education</h2>
                <button onClick={event => toggleForm(event)}>
                    <img src={isFormOpen ? ArrowDownIcon : ArrowUpIcon} alt="arrow icon" />
                </button>
            </header>

            <section className={isFormOpen ? "visible" : "hidden"}>
                {
                    schools.map(school => <SchoolForm key={school.id} school={school} />)
                }

                <button className="add-school">+ School</button>
            </section>
        </div>
    );
};

export default EducationForm;