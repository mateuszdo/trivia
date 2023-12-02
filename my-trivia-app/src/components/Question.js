import React from 'react'

function Question(props) {
    
    const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false)

    function handleAnswer(e) {
        if (e.target.ariaLabel === "true") {
            setShowCorrectAnswer(false)
            e.target.classList.add("green-button")
            
            props.setScore(prevState => prevState + 1)
        } else {
            e.target.classList.add("red-button")
            setShowCorrectAnswer(true)
        }
    }
    
    
    function decode(uri) {
        
        //let encoded = encodeURI(uri)
        let decoded = decodeURI(uri)
        return decoded.replaceAll("^\"|\"$", "")
    }
    
    return ( 
        
        <div className="question-container">
             
             <h2 className="question">{decode(props.question)}</h2>
                <div className="answers-container">
                    {props.answers[0][0] !== undefined && <button  
                                                              onClick={e=>handleAnswer(e)} 
                                                              className={props.answers[0][1] === true && showCorrectAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[0][1]}>{props.answers[0]}
                                                          </button>}
                    {props.answers[1][0] !== undefined && <button  
                                                              onClick={e=>handleAnswer(e)} 
                                                              className={props.answers[1][1] === true && showCorrectAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[1][1]}>{props.answers[1]}
                                                          </button>}
                    {props.answers[2][0] !== undefined && <button  
                                                              onClick={e=>handleAnswer(e)} 
                                                              className={props.answers[2][1] === true && showCorrectAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[2][1]}>{props.answers[2]}
                                                          </button>}
                    {props.answers[3][0] !== undefined && <button  
                                                              onClick={e=>handleAnswer(e)} 
                                                              className={props.answers[3][1] === true & showCorrectAnswer === true ? "answer-button green-button" : "answer-button"} 
                                                              aria-label={props.answers[3][1]}>{props.answers[3]}
                                                          </button>}
                </div>  
   
        </div>
       
    )
}

export default Question;
