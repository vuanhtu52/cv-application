import "../styles/CompanyForm.css";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";

const CompanyForm = ({company, companies, updateCompanies, childrenState, setChildrenState}) => {
    const toggleForm = event => {
        event.preventDefault();
        let newChildrenState = {...childrenState};
        for (let key in newChildrenState) {
            if (key === company.id) {
                newChildrenState[key] = !newChildrenState[key];
            }
        }
        setChildrenState(newChildrenState);
    };

    const updateCompany = newCompany => {
        let newCompanies = [];
        companies.forEach(company => {
            if (company.id === newCompany.id) {
                newCompanies.push(newCompany);
            } else {
                newCompanies.push(company);
            }
        });
        updateCompanies(newCompanies);
    };

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
                        onChange={event => updateCompany({...company, name: event.target.value})}
                    />
                </label>

                <label>
                    Position 
                    <input 
                        type="text"
                        maxLength="30"
                        value={company.position}
                        onChange={event => updateCompany({...company, position: event.target.value})}
                    />
                </label>

                <section className="dates">
                    <label>
                        Start Date
                        <input 
                            type="date"
                            value={`${new Date(company.startDate).getFullYear()}-${(new Date(company.startDate).getMonth() + 1).toString().padStart(2, "0")}-${(new Date(company.startDate).getDate()).toString().padStart(2, "0")}`}
                            onChange={event => updateCompany({ ...company, startDate: (new Date(event.target.value)).getTime() })}
                        />
                    </label>
                    <label>
                        End Date 
                        <input 
                            type="date"
                            value={`${new Date(company.endDate).getFullYear()}-${(new Date(company.endDate).getMonth() + 1).toString().padStart(2, "0")}-${(new Date(company.endDate).getDate()).toString().padStart(2, "0")}`}
                            onChange={event => updateCompany({ ...company, endDate: (new Date(event.target.value)).getTime() })}
                        />
                    </label>
                </section>

                <label>
                    Description 
                    <textarea 
                        rows="10"
                        maxLength="500"
                        value={company.description}
                        onChange={event => updateCompany({...company, description: event.target.value})}
                    />
                </label>

                <button className="delete-button">Delete</button>
            </form>
        </div>
    );
};

export default CompanyForm;