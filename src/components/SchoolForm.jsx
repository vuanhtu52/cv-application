import "../styles/SchoolForm.css";
import ArrowDownIcon from "../assets/svg/arrow-down.svg";
import ArrowUpIcon from "../assets/svg/arrow-up.svg";

const SchoolForm = ({ school, schools, updateSchools, childrenState, setChildrenState }) => {
    const toggleForm = event => {
        event.preventDefault();
        let newChildrenState = {...childrenState};
        for (let key in newChildrenState) {
            if (key === school.id) {
                newChildrenState[key] = !newChildrenState[key];
            }
        }
        setChildrenState(newChildrenState);
    };

    const updateSchool = newSchool => {
        let newSchools = []
        schools.forEach(school => {
            if (school.id === newSchool.id) {
                newSchools.push(newSchool);
            } else {
                newSchools.push(school);
            }
        });
        updateSchools(newSchools);
    };

    const deleteSchool = event => {
        event.preventDefault();
        let newSchools = [...schools];
        newSchools = newSchools.filter(newSchool => newSchool.id !== school.id);
        updateSchools(newSchools);
    };

    return (
        <div className="school-form">
            <header>
                <h3>{school.name}</h3>
                <button onClick={event => toggleForm(event)}>
                    <img src={childrenState[school.id] ? ArrowDownIcon : ArrowUpIcon} alt="arrow icon" />
                </button>
            </header>

            <form className={childrenState[school.id] ? "visible" : "hidden"}>
                <label>
                    School
                    <input
                        type="text"
                        maxLength="30"
                        value={school.name}
                        onChange={event => updateSchool({ ...school, name: event.target.value })}
                    />
                </label>

                <label>
                    Degree
                    <input
                        type="text"
                        maxLength="50"
                        value={school.degree}
                        onChange={event => updateSchool({ ...school, degree: event.target.value })}
                    />
                </label>

                <section className="dates">
                    <label>
                        Start Date
                        <input
                            type="date"
                            value={`${new Date(school.startDate).getFullYear()}-${(new Date(school.startDate).getMonth() + 1).toString().padStart(2, "0")}-${(new Date(school.startDate).getDate()).toString().padStart(2, "0")}`}
                            onChange={event => updateSchool({ ...school, startDate: (new Date(event.target.value)).getTime() })}
                        />
                    </label>
                    <label>
                        End Date
                        <input
                            type="date"
                            value={`${new Date(school.endDate).getFullYear()}-${(new Date(school.endDate).getMonth() + 1).toString().padStart(2, "0")}-${(new Date(school.endDate).getDate()).toString().padStart(2, "0")}`}
                            onChange={event => updateSchool({ ...school, endDate: (new Date(event.target.value)).getTime() })}
                        />
                    </label>
                </section>

                <label>
                    Description
                    <textarea
                        rows="10"
                        maxLength="500"
                        value={school.description}
                        onChange={event => updateSchool({...school, description: event.target.value})}
                    />
                </label>

                <button className="delete-button" onClick={event => deleteSchool(event)}>Delete</button>
            </form>
        </div>
    );
};

export default SchoolForm;