import React, { useState } from 'react';
import { quizz } from '@/components/data';
import BaseLayout from '@/components/BaseLayout';

const SecondPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quizz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const [incorrectlyAnswered, setIncorrectlyAnswered] = useState([]);

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    const isCorrect = answer === correctAnswer;

    if (!isCorrect) {
      setIncorrectlyAnswered((prev) => [
        ...prev,
        {
          question: questions[activeQuestion].question,
          yourAnswer: answer,
          correctAnswer: correctAnswer,
        },
      ]);
    }

    setSelectedAnswer(isCorrect);
  };;
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
   <>
      <style>
        {`
         .containerTwo {
          position: relative;
          left: 890px;
          bottom: 365px;
          max-width: 600px;
          width: 600px;
          padding: 1rem;
          box-sizing: border-box;
          font-family: 'Comic Sans MS', cursive; 
        }
          .quiz-containerTwo {
            background-color: #58E6D9;
            padding: 1rem;
            margin-top: 1.5rem;
            border-radius: 15px;
          }

          .quiz-containerTwo h3 {
            padding-bottom: 1rem;
            color: black;
            font-size: 1.5rem;
          }

          .quiz-containerTwo li {
            list-style-type: none;
            cursor: pointer;
            margin: 9px 0;
            padding: 10px 8px;
            height: 50px;
            color: #000105;
            border: 1px solid lightgray;
            border: 1px solid black; 
            border-radius: 8px; 
          }

          .li-hoverTwo:hover {
            background-color: #d8d8d8;
            columns: #fff;
          }

          .li-selectedTwo {
            color: #fff;
            background-color: lightgray;
          }

          .quiz-containerTwo button {
            padding: 12px 8px;
            width: 100%;
            margin-top: 12px;
            font-size: 1rem;
            border-radius: 10px;
            cursor: pointer;
            background-color: blue;
            color: #f8f8f8;
          }

          .btn-disabledTwo {
            background-color: lightgray;
          }

          .incorrect-answerTwo {
            background-color: #EF9A9A; 
            border: 1px solid #F44336; 
            padding: 10px;
            margin-top: 10px;
            border-radius: 8px;
          }
      
          .titleTwo {
            position: relative;
            top: 10px;
            color: #F44336; 
            font-size: 1.3rem;
          }
        `}
      </style>
      <div className='containerTwo'>
        

        <div>
          {!showResult ? (
            <div className='quiz-containerTwo'>
              <h2>
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
              <h3>{questions[activeQuestion].question}</h3>
              {answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={
                    selectedAnswerIndex === idx ? 'li-selectedTwo' : 'li-hoverTwo'
                  }
                >
                  <span>{answer}</span>
                </li>
              ))}
              <div className="">
                {checked ? (
                  <button onClick={nextQuestion} className='buttonTwo'>
                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                ) : (
                  <button onClick={nextQuestion} disabled className='btn-disabledTwo'>
                    {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className='quiz-containerTwo'>
              <h3>Results</h3>
              <h3>Overall {(result.score / 25) * 100}%</h3>
              <p>
                Total Questions: <span>{questions.length}</span>
              </p>
              <p>
                Total Score: <span>{result.score}</span>
              </p>
              <p>
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
              <h3 className='titleTwp'>Incorrectly Answered Questions</h3>
              {incorrectlyAnswered.map((item, index) => (
                <div key={index} className='incorrect-answerTwo'>
                  <p>Question: {item.question}</p>
                  <p>Your Answer: {item.yourAnswer}</p>
                  <p>Correct Answer: {item.correctAnswer}</p>
                </div>
              ))}
              <button onClick={() => window.location.reload()}>Restart</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SecondPage;
