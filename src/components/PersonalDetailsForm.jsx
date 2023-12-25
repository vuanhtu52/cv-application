import "../styles/PersonalDetailsForm.css";
import PersonIcon from "../assets/svg/person.svg";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";
import { useState } from "react";

const PersonalDetailsForm = ({ fullName, updateFullName, email, updateEmail, github, updateGithub, phoneNumber, updatePhoneNumber }) => {
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
                    <img src={isFormOpen ? ArrowDownIcon : ArrowUpIcon} alt="arrow icon" />
                </button>
            </header>

            <section className={isFormOpen ? "visible" : "hidden"}>
                <label>
                    Full Name
                    <input type="text" maxLength="30" value={fullName} onChange={event => updateFullName(event.target.value)} />
                </label>

                <label>
                    Email
                    <input type="email" maxLength="30" value={email} onChange={event => updateEmail(event.target.value)} />
                </label>

                <label>
                    Github Link
                    <input type="text" value={github} onChange={event => updateGithub(event.target.value)} />
                </label>

                <label>
                    Phone Number
                    <input type="number" value={phoneNumber} onInput={event => event.target.value = event.target.value.slice(0, 20)} onChange={event => updatePhoneNumber(event.target.value)} />
                </label>
            </section>
        </form>
    );
};

export default PersonalDetailsForm;