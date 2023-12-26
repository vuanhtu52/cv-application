import "../styles/ExperienceForm.css";
import WorkIcon from "../assets/svg/work.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import CompanyForm from "./CompanyForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

    const addCompany = () => {
        let newCompany = {
            id: uuidv4(),
            name: "",
            position: "",
            startDate: (new Date()).getTime(),
            endDate: (new Date()).getTime(),
            description: ""
        }
        let newCompanies = [...companies];
        newCompanies.push(newCompany);
        updateCompanies(newCompanies);
        let newChildrenState = {...childrenState};
        newChildrenState[newCompany.id] = true;
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

                <button className="add-company" onClick={addCompany}>+ Company</button>
            </section>
        </div>
    );
};

export default ExperienceForm;