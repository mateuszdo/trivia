import React from 'react'

function Question(props) {
    return ( 
      <div className="question-container">
             
             <h2 className="question">{props.question}</h2>
                <div className="answers-container">
                     <button className = "answer-button">{props.answer1}</button>
                     <button className = "answer-button">{props.answer2}</button>
                     <button className = "answer-button">{props.answer3}</button>
                     <button className = "answer-button">{props.answer4}</button>
                </div>    
            </div>
        
    )
}

export default Question;