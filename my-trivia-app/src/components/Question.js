import React from 'react'

function Question(props) {
    
    //const [isClicked, setIsClicked] = React.useState(false)
    const [isCorrect, setIsCorrect] = React.useState(false)


    function handleInput(e) {
        if(e.target.className === "answer-button correct-answer"){
            setIsCorrect(true);
        } else {
            e.target.classList.add("red-button")
            console.log("incorrect")
            setIsCorrect(true);
        }
    }
    
    // when click on correct answer turn it green
    //when click on incorrect answer turn it red and correct one green
    return ( 
        
        <div className="question-container">
             
             <h2 className="question">{props.question}</h2>
                <div className="answers-container" onClick={e => handleInput(e, "value")}>
                     <button  className = {isCorrect ? "answer-button correct-answer green-button" : "answer-button correct-answer"}>{props.correctAnswer}</button>
                     <button  className = "answer-button">{props.answer2}</button>
                     <button  className = "answer-button">{props.answer3}</button>
                     <button  className = "answer-button">{props.answer4}</button>
                </div>    
        </div>
       
    )
}

export default Question;