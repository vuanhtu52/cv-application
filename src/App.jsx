import './App.css'
import EditSection from './components/EditSection'
import DisplaySection from './components/DisplaySection'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [fullName, setFullName] = useState("Clark Kent");
  const [email, setEmail] = useState("clark.kent@gmail.com");
  const [github, setGithub] = useState("https://github.com/clarkkent");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [schools, setSchools] = useState([
    {
      id: uuidv4(),
      name: "Metropolis University",
      degree: "Bachelor of Journalism and Communications",
      startDate: (new Date()).getTime(),
      endDate: (new Date()).getTime(),
      description: "Graduated with Distinction, student of the year, valedictorian. Ranked higher than batman and wonder woman."
    }
  ]);
  const [companies, setCompanies] = useState([
    {
      id: uuidv4(),
      name: "Daily Planet",
      position: "Journalist",
      startDate: (new Date()).getTime(),
      endDate: (new Date()).getTime(),
      description: "Gather information from the scenes."
    }
  ]);

  return (
    <>
      <EditSection
        fullName={fullName}
        updateFullName={setFullName}
        email={email}
        updateEmail={setEmail}
        github={github}
        updateGithub={setGithub}
        phoneNumber={phoneNumber}
        updatePhoneNumber={setPhoneNumber}
        schools={schools}
        updateSchools={setSchools}
        companies={companies}
        updateCompanies={setCompanies}
      />
      <DisplaySection
        fullName={fullName}
        email={email}
        github={github}
        phoneNumber={phoneNumber}
        schools={schools}
        companies={companies}
      />
    </>
  )
}

export default App;
