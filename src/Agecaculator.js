import React, { useState } from 'react'

const Agecalulator=()=>{
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthday = new Date(dob);
    const today = new Date();

    if (isNaN(birthday.getTime())) {
      alert('Please enter a valid date of birth');
      return;
    }

    const diff = today - birthday;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const ageString = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    setAge(ageString);
  };

  return (
    <div className='a8'>
      <h1>Age Calculator</h1>
      <label className='a5'> Date of Birth : </label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className='a3' /><br/><br/>
      <button onClick={calculateAge} className='a2'>Calculate Age</button>
          <h3 className='a7'>Your Age:</h3>
          <p className="a4">{age}</p>
        
      
    </div>
  );
};
export default Agecalulator