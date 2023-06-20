import { useState } from 'react';
import './App.css';

const App = () => {
  const [dicenumber, setdicenumber] = useState(2)
  const [dicenumber2, setdicenumber2] = useState(1)

  const refreshDice = () => {
    const randomnumber = Math.floor(Math.random() * 6) + 1;
    setdicenumber(randomnumber)
    const randomnumber2 = Math.floor(Math.random() * 6) + 1;
    setdicenumber2(randomnumber2)

  
}  
  return (
    <>
      <h1>Dice Roller Application</h1>
      <center><img width={300} height={300} src={require(`./assets/${dicenumber}.png`)} ></img>
      <img width={300} height={300} src={require(`./assets/${dicenumber2}.png`)} ></img>
      <br/>
      <button onClick={()=> refreshDice()} className='button'>Roll</button>
      </center>
      
    </>
    
    
  )
}

export default App;
