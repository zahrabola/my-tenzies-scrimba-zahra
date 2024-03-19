///import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"
//
///algorithm projects

function App() {
  const [isDice, setIsDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false)



  useEffect(() => {
    const allHelidDice = isDice.every(die => die.isHeld)
    const firstValue = isDice[0].value
    const allSameValue = isDice.every(die => die.value === firstValue)
    if(allHelidDice && allSameValue){
      setTenzies(true)
      console.log("you've won")
    }
  }, [isDice])


  function generateNewDie () {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  
  function allNewDice() {

    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    ///console.log(newDice)
    return newDice;
  }
  //console.log(allNewDice)

  function holdDice(id) {
    //console.log(id);
    setIsDice(oldDice => oldDice.map( die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }






  function rollDice() {
    setIsDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
}

  const diceElement = isDice.map((die) => (
  <Dice key={die.id}
   value={die.value}
    isHeld={die.isHeld} 
    holdDice={() => holdDice(die.id)} />
  ));

  return (
    <div className="App">
      <main>
        {tenzies  && <Confetti  />}
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
             Click each die to freeze it at its current value between rolls.</p>
        <div className="Dicecontainer">{diceElement}</div>
        <div className="dicebtnwrapper">
          <button className="dicebtn" onClick={rollDice}>
            {" "}
           {tenzies ? "New Game" : "Roll Dice" }
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
    // new array to hold my numbers
    // loop 10 times
    // push a random number from 1-6 to my array
    // return array