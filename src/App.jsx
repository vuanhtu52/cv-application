import './App.css'
import EditSection from './components/EditSection'
import DisplaySection from './components/DisplaySection'
import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState("Clark Kent");
  const [email, setEmail] = useState("clark.kent@gmail.com");
  const [github, setGithub] = useState("https://github.com/clarkkent");
  const [phoneNumber, setPhoneNumber] = useState("0123456789");

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
      />
      <DisplaySection
        fullName={fullName}
        email={email}
        github={github}
        phoneNumber={phoneNumber}
      />
    </>
  )
}

export default App
