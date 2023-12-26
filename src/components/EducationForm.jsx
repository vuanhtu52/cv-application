import "../styles/EducationForm.css";
import SchoolIcon from "../assets/svg/school.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import SchoolForm from "./SchoolForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EducationForm = ({ schools, updateSchools }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [childrenState, setChildrenState] = useState(schools.length > 0 ? {[schools[0].id]: false} : {});    // Keep track of which children tabs are open

    const toggleForm = event => {
        event.preventDefault();
        if (isFormOpen) {
            closeChildrenForms();
        }
        setIsFormOpen(!isFormOpen);
    };

    const closeChildrenForms = () => {
        let newChildrenState = {...childrenState};
        for (let key in newChildrenState) {
            newChildrenState[key] = false;
        }
        setChildrenState(newChildrenState);
    };

    const addSchool = () => {
        let newSchool = {
            id: uuidv4(),
            name: "",
            degree: "",
            startDate: (new Date()).getTime(),
            endDate: (new Date()).getTime(),
            description: ""
        }
        let newSchools = [...schools];
        newSchools.push(newSchool);
        updateSchools(newSchools);
        let newChildrenState = {...childrenState};
        newChildrenState[newSchool.id] = true;
        setChildrenState(newChildrenState);
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
                    schools.map(school => <SchoolForm
                        key={school.id}
                        school={school}
                        schools={schools}
                        updateSchools={updateSchools}
                        childrenState={childrenState}
                        setChildrenState={setChildrenState}
                    />)
                }

                <button className="add-school" onClick={addSchool}>+ School</button>
            </section>
        </div>
    );
};

export default EducationForm;