import './App.css'
import EditSection from './components/EditSection'
import DisplaySection from './components/DisplaySection'
import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState("Clark Kent");
  const [email, setEmail] = useState("clark.kent@gmail.com");
  const [github, setGithub] = useState("https://github.com/clarkkent");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [schools, setSchools] = useState([
    {
      id: "1",
      name: "Metropolis University",
      degree: "Bachelor of Journalism and Communications",
      startDate: (new Date()).getTime(),
      endDate: (new Date()).getTime(),
      description: "Graduated with Distinction, student of the year, valedictorian. Ranked higher than batman and wonder woman."
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
      />
      <DisplaySection
        fullName={fullName}
        email={email}
        github={github}
        phoneNumber={phoneNumber}
        schools={schools}
      />
    </>
  )
}

export default App
