import { useState } from "react";
import { useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    //fetch and grab a random solution
    fetch('http://localhost:8000/solutions')
    .then(res => res.json())
    .then(json => {
      //random int between 0 and 14
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  }, [setSolution])
  


  return (
    <div className="App">
      <h1>Wordle</h1>
      <h3>Cause what you got to do with your time anyway?</h3>
      {solution && <Wordle solution={solution}/>}

    </div>
  );
}

export default App
