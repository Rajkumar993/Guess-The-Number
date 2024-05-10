
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const[chance,setChance]=useState(5)
 const[number,setNumber]=useState(null)
 const [result,setResult]=useState('')
 const[random,setRandom]=useState('');
 const[won,setWon]=useState(false)

const handleChange=(e)=>{
  const guessedNumber=e.target.value;

  if(guessedNumber<0 ||guessedNumber>10){
       setNumber(0)
  }else
  setNumber(guessedNumber)
 if(guessedNumber==random){
  setResult('Correct...You Won');
  setWon(true)
 }else{
  
 }
 if(guessedNumber>random){
  setResult('Large Number');

 }
 if(guessedNumber<random){
  setResult('Small Number');
 
 }

 if(guessedNumber===''){
  setResult('')
  setChance(chance-1)
 }

 
}

useEffect(()=>{
  const num=Math.floor(Math.random()*10);
  setRandom(num)
  
},[])

  return (
    <>
    {chance==0?<div className='hi' ><p className='sss'>Sorry Better Luck Next Time</p> <p className='sss' >Total Chance : {chance}</p></div>:<div className="container">
      {won==true?<p>Impressive</p>:<div className="Input-box">
      <label htmlFor="inputBox" >Guess A Number Between 1 TO 10 :</label>
    <input type="text"  id='inputBox'  onChange={handleChange}/>
    </div>}
    
    
      <div className="Result-box">
        <p>You Guessed : {result}</p>
        <p>Total Chance : {chance}</p>
      </div>
    </div>}
    </>
  )
}

export default App
