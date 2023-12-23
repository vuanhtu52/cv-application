import "../styles/Page.css";
import EmailIcon from "../assets/svg/email.svg";
import GithubIcon from "../assets/svg/github.svg";
import PhoneIcon from "../assets/svg/phone.svg";

const Page = ({ fullName, email, github, phoneNumber }) => {
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
        </div>
    );
};

export default Page;