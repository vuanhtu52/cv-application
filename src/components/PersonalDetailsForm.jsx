import "../styles/PersonalDetailsForm.css";
import PersonIcon from "../assets/svg/person.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import { useState } from "react";

const PersonalDetailsForm = () => {
    const [isFormOpen, setIsFormOpen] = useState(true);

    const toggleForm = event => {
        event.preventDefault();
        setIsFormOpen(!isFormOpen);
    }

    return (
        <form className="personal-details-form">
            <header>
                <img src={PersonIcon} alt="person icon" />
                <h2>Personal Details</h2>
                <button onClick={event => toggleForm(event)}>
                    <img src={isFormOpen ? ArrowDownIcon : ArrowUpIcon} alt="arrow down icons" />
                </button>
            </header>

            <section className={isFormOpen ? "visible" : "hidden"}>
                <label>
                    Full Name
                    <input type="text" maxLength="30" />
                </label>

                <label>
                    Email
                    <input type="email" maxLength="30" />
                </label>

                <label>
                    Github Link
                    <input type="text" />
                </label>

                <label>
                    Phone Number
                    <input type="number" onInput={e => e.target.value = e.target.value.slice(0, 20)} />
                </label>
            </section>
        </form>
    );
};

export default PersonalDetailsForm;