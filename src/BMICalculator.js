import React, { useState } from 'react'

function BMICalculator() {
    let [weight,setweight]=useState("")
    let [height,setheight]=useState("")
    let [bmi,setbmi]=useState("")

    let handlebmicalculator= () =>{
        console.log('working');
        if (height && weight ){
        let heightincm = height/100
        let bmi = (weight)/(heightincm*heightincm).toFixed(2)
        setbmi(bmi.toFixed(2))
        }

    }
  return (
    <div className='c1'>
        <h1>BMICalculator</h1>
        <p className='c2'>Enter the weight in (kg) <input type="text" placeholder='Weight'onChange={(e)=>setweight(e.target.value)}></input></p>
        <p className='c2'>Enter the height in (cm) <input type="text" placeholder='Height'onChange={(e)=>setheight(e.target.value)}></input></p>
        {/* <input type="text" placeholder='bmi'onChange={(e)=>setbmi (e.target.value)}></input> */}
        <button onClick={handlebmicalculator} className='c3'>Calculate BMI</button>
        <h2>BMI={bmi}</h2>
    </div>

  )
}

export default BMICalculator