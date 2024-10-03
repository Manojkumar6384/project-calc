import React, { useState } from 'react'

function Emicalculator() {
    let [loan,setloan]=useState("")
    let [intrest,setintrest]=useState("")
    let [years,setyears]=useState('')
    let [emi,setemi]=useState("")

  let Emicalculator = () =>{
    if (loan && intrest && years){
      let p= parseFloat(loan)
      let n=parseFloat(years)*12
      let r=parseFloat(intrest)/100/12
      let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setemi(emi.toFixed(2));
    }
    else{
      setemi();
    }
  }
   
  return (
    <div className='b1'>
        <h1>EMICalculator</h1>
        <p className='b4'>Enter the Amount  : <input type="text" placeholder='Loan Amount' onChange={(e) => setloan(e.target.value)}></input></p>
        <p className='b2'>Enter the Intrest : <input type="text" placeholder='Percentage Of Intrest' onChange={(e) => setintrest(e.target.value)}></input></p>
        <p className='b3'>Enter the years   : <input type="text" placeholder='Number Of Years' onChange={(e) => setyears(e.target.value)}></input></p>
        <button onClick={Emicalculator} className='b5'>Calculate EMI</button>
        <h2>EMI:{emi}</h2>
          
        

    </div>
  )
}

export default Emicalculator