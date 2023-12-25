import "../styles/SchoolForm.css";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import { useState } from "react";

const SchoolForm = ({school}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = event => {
        event.preventDefault();
        setIsFormOpen(!isFormOpen);
    };

    return (
        <div className="school-form">
            <header>
                <h3>{school.name}</h3>
                <button onClick={event => toggleForm(event)}>
                    <img src={isFormOpen ? ArrowDownIcon : ArrowUpIcon} alt="arrow icon" />
                </button>
            </header>

            <form className={isFormOpen ? "visible" : "hidden"}>
                <label>
                    School 
                    <input type="text" maxLength="30" value={school.name} />
                </label>

                <label>
                    Degree 
                    <input type="text" maxLength="30" value={school.degree} />
                </label>

                <section className="dates">
                    <label>
                        Start Date 
                        <input type="date" value={`${new Date(school.startDate).getFullYear()}-${new Date(school.startDate).getMonth() + 1}-${new Date(school.startDate).getDate()}`} />
                    </label>
                    <label>
                        End Date 
                        <input type="date" value={`${new Date(school.endDate).getFullYear()}-${new Date(school.endDate).getMonth() + 1}-${new Date(school.endDate).getDate()}`} />
                    </label>
                </section>

                <label>
                    Description 
                    <textarea rows="10" maxLength="500" />
                </label>
            </form>
        </div>
    );
};

export default SchoolForm;