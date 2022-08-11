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
  console.log(nextButtonClicked)
  React.useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then((res) => {
      const response = res.data;
      setQuestions(response.results);
      
    })
    
  },[])
  
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
    console.log(element)
    let answers = [
                   [element.correct_answer, true], 
                   [element.incorrect_answers[0], false],
                   [element.incorrect_answers[1], false],
                   [element.incorrect_answers[2], false]
                  ]

    let shuffledAnswers = shuffle(answers);
    console.log(shuffledAnswers);

    return <Question 
              key={nanoid()}
              question={JSON.stringify(element.question)} 
              //correctAnswer={JSON.stringify(element.correct_answer)}
              //answer2={JSON.stringify(element.incorrect_answers[1])}
              //answer3={JSON.stringify(element.incorrect_answers[2])}
              //answer4={JSON.stringify(element.incorrect_answers[0])}
              answers={shuffledAnswers}
              
      />
  })
  
  
  
  function nextQuestion() {
      setNextButtonClicked(prevState => ({
      isClicked: true,
      value: prevState.value + 1
    })
      )
    //console.log(nextButtonClicked)
    //console.log(`button clicked ${nextButtonClicked.value} times`)
    
    
  }
  
  
  
  
  return (
    <div>
      <Header />
      {
        nextButtonClicked.isClicked ? questionElements[nextButtonClicked.value] : questionElements[0]
      }
      <button onClick={nextQuestion} className='next-question-button'>Next Question</button>
    </div>
  );
}

export default App;
