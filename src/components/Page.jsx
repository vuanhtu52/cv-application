import "../styles/Page.css";
import EmailIcon from "../assets/svg/email.svg";
import GithubIcon from "../assets/svg/github.svg";
import PhoneIcon from "../assets/svg/phone.svg";

const Page = ({ fullName, email, github, phoneNumber, schools }) => {
    return (
        <div className="page">
            <header>
                <h2 className="full-name">{fullName}</h2>
                <div className="contact-info">
                    {
                        email !== "" &&
                        <div className="email">
                            <img src={EmailIcon} alt="email icon" />
                            <div>{email}</div>
                        </div>
                    }

                    {
                        github !== "" &&
                        <div className="github">
                            <img src={GithubIcon} alt="github icon" />
                            <a href={github}>{github.length <= 30 ? github : `${github.slice(0, 20)}...`}</a>
                        </div>
                    }

                    {
                        phoneNumber !== "" &&
                        <div className="phone-number">
                            <img src={PhoneIcon} alt="phone icon" />
                            <div>{phoneNumber}</div>
                        </div>
                    }
                </div>
            </header>

            <section className="education">
                <h3>Education</h3>
                {
                    schools.map(school =>
                        <section key={school.id}>
                            <header>
                                <div>{school.name}</div>
                                <div>
                                    {
                                        `${new Date(school.startDate).toLocaleString("default", { month: "long" })} ${new Date(school.startDate).getFullYear()} - ${new Date(school.endDate).toLocaleString("default", { month: "long" })} ${new Date(school.endDate).getFullYear()}`
                                    }
                                </div>
                            </header>
                            <div>{school.degree}</div>
                            <div className="description">{school.description}</div>
                        </section>
                    )
                }
            </section>
        </div>
    );
};

export default Page;