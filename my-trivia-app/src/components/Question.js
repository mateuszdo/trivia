import React from 'react'

function Question(props) {
    
    //const [isClicked, setIsClicked] = React.useState(false)
    const [correctAnswer, setCorrectAnswer] = React.useState(false)

    // helper function delegated to distinct answers
    // when click on correct answer turn it green
    // when click on incorrect answer turn it red and correct one green
    function handleAnswer(e) {
        if (e.target.children[1] === "true") {
            //setCorrectAnswer(true);
            console.log(e.target)
        } else {
            e.target.classList.add("red-button")
            console.log(e.target)
            //setIsCorrect(true);
        }
    }
    // how about in App.js we randomly shuffle answers and create new shuffled array
    // what if we have only two answers ???
    // We than passing argument to Question component with a new shuffled array with 4 answers
    // then in Question.js we render 4 buttons with answer at each index of shuffled array.
    // each button will have a click event with handleAnswer function that if(props.correctAnswer)
    // it will addClassess 
    
    
    function handleAnswer(e) {
        if(e.target.ariaLabel === "true") {
            //setCorrectAnswer(true)
            e.target.classList.add("green-button")
        } else {
            e.target.classList.add("red-button")
            setCorrectAnswer(true)
        }
      
    }
    function decode(uri) {
        
        let encoded = encodeURI(uri)
        let decoded = decodeURI(encoded)
        return decoded.replaceAll("^\"|\"$", "")
    }
    
    return ( 
        
        <div className="question-container">
             
             <h2 className="question">{decode(props.question)}</h2>
                <div className="answers-container">
                    {props.answers[0][0] !== undefined && <button  
                                                              onClick={e => handleAnswer(e, "value")} 
                                                              className={props.answers[0][1] === true && correctAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[0][1]}>{props.answers[0]}
                                                          </button>}
                    {props.answers[1][0] !== undefined && <button  
                                                              onClick={e => handleAnswer(e, "value")} 
                                                              className={props.answers[1][1] === true && correctAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[1][1]}>{props.answers[1]}
                                                          </button>}
                    {props.answers[2][0] !== undefined && <button  
                                                              onClick={e => handleAnswer(e, "value")} 
                                                              className={props.answers[2][1] === true && correctAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[2][1]}>{props.answers[2]}
                                                          </button>}
                    {props.answers[3][0] !== undefined && <button  
                                                              onClick={e => handleAnswer(e, "value")} 
                                                              className={props.answers[3][1] === true && correctAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[3][1]}>{props.answers[3]}
                                                          </button>}
                </div>  
   
        </div>
       
    )
}

export default Question;