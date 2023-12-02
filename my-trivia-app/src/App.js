import React from 'react';
import './style.css';
import Header from './components/Header'
import Question from './components/Question'
import axios from 'axios';
import { nanoid } from 'nanoid';

function App() {

  const [questions, setQuestions] = React.useState([])
  const [nextButtonClicked, setNextButtonClicked] = React.useState({
    isClicked: false,
    value: 0,
  })
  const [counter, setCounter] = React.useState(30)
  const [score, setScore] = React.useState(0)
  //
  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false)
  
  // useEffect to get new set of 10 questions
  React.useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then((res) => {
      const response = res.data;
      setQuestions(response.results);
      console.log(response.results)
    })},[])

  //useEffect to count down 30s time
  /*
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  */
  
  // helper function for randomly show answers
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
 
 
  const questionElements = questions.map(element => {
    
    let answers = [
                   [element.correct_answer, true], 
                   [element.incorrect_answers[0], false],
                   [element.incorrect_answers[1], false],
                   [element.incorrect_answers[2], false]
                  ]

    let shuffledAnswers = shuffle(answers);
    //console.log(shuffledAnswers);
    //console.log("answer")

    
  

    return (
              
              <Question 
                  key={nanoid()}
                  question={JSON.stringify(element.question)} 
                  answers={shuffledAnswers}
                  setScore={setScore}
                  //showCorrectAnswer={showCorrectAnswer}
                  //setShowCorrectAnswer={setShowCorrectAnswer}
              />
             
      )
    })
  
  
  
  function nextQuestion() {
      
      setNextButtonClicked(prevState => ({
      isClicked: true,
      value: prevState.value + 1
    })
   )
  }
  
  
  
  return (
    <div>
      <Header counter={counter} score={score} nextButtonClicked={nextButtonClicked}/>
      
      {
        nextButtonClicked.isClicked ? questionElements[nextButtonClicked.value] : questionElements[0]
      }
      <button onClick={nextQuestion} className='next-question-button'>Next Question</button>
    </div>
  )
}

export default App



