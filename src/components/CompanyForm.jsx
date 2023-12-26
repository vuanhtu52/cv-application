import "../styles/CompanyForm.css";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";

const CompanyForm = ({company, companies, updateCompanies, childrenState, setChildrenState}) => {
    const toggleForm = event => {
        console.log("toggle");
        event.preventDefault();
        let newChildrenState = {...childrenState};
        for (let key in newChildrenState) {
            if (key === company.id) {
                newChildrenState[key] = !newChildrenState[key];
            }
        }
        setChildrenState(newChildrenState);
    }

    return (
        <div className="company-form">
            <header>
                <h3>{company.name}</h3>
                <button onClick={event => toggleForm(event)}>
                    <img src={childrenState[company.id] ? ArrowDownIcon : ArrowUpIcon} alt="arrow icon" />
                </button>
            </header>

            <form className={childrenState[company.id] ? "visible" : "hidden"}>
                <label>
                    Company Name 
                    <input 
                        type="text"
                        maxLength="30"
                        value={company.name}
                    />
                </label>

                <label>
                    Position 
                    <input 
                        type="text"
                        maxLength="30"
                        value={company.position}
                    />
                </label>

                <section className="dates">
                    <label>
                        Start Date
                        <input 
                            type="date"
                            value={`${new Date(company.startDate).getFullYear()}-${(new Date(company.startDate).getMonth() + 1).toString().padStart(2, "0")}-${(new Date(company.startDate).getDate()).toString().padStart(2, "0")}`}
                        />
                    </label>
                    <label>
                        End Date 
                        <input 
                            type="date"
                            value={`${new Date(company.endDate).getFullYear()}-${(new Date(company.endDate).getMonth() + 1).toString().padStart(2, "0")}-${(new Date(company.endDate).getDate()).toString().padStart(2, "0")}`}
                        />
                    </label>
                </section>

                <label>
                    Description 
                    <textarea 
                        rows="10"
                        maxLength="500"
                        value={company.description}
                    />
                </label>

                <button className="delete-button">Delete</button>
            </form>
        </div>
    );
};

export default CompanyForm;