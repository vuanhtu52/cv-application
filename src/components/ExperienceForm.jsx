import "../styles/ExperienceForm.css";
import WorkIcon from "../assets/svg/work.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import CompanyForm from "./CompanyForm";
import { useState } from "react";

const ExperienceForm = ({ companies, updateCompanies }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [childrenState, setChildrenState] = useState(companies.length > 0 ? {[companies[0].id]: false} : {});

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

    return (
        <div className="experience-form">
            <header>
                <img src={WorkIcon} alt="work icon" />
                <h2>Experience</h2>
                <button onClick={event => toggleForm(event)}>
                    <img src={isFormOpen ? ArrowDownIcon : ArrowUpIcon} alt="arrow icon" />
                </button>
            </header>

            <section className={isFormOpen ? "visible" : "hidden"}>
                {
                    companies.map(company => <CompanyForm
                        key={company.id}
                        company={company}
                        companies={companies}
                        updateCompanies={updateCompanies}
                        childrenState={childrenState}
                        setChildrenState={setChildrenState}
                    />)
                }

                <button className="add-company">+ Company</button>
            </section>
        </div>
    );
};

export default ExperienceForm;