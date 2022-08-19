import React from 'react'
import { Route } from 'react-router-dom'
import {useQuiz, createQuestion} from '../../hooks/useQuiz'
import { useAddQuiz } from '../../hooks/useAddQuiz'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectStorage, projectFirestore } from '../../firebase/config'

export default function AddQuestion({navigation, route}) {

  const [currentQuizId, setCurrentQuizId] = useState('');
  const [currentQuizTitle, setCurrentQuizTitle] = useState('');
  const [currentQuestionId, setCurrentQuestionId] = useState('');

  const [question, setQuestion] = useState('');
  const [imageUri, setImageUri] = useState('');

  const [correctAnswer, setCorrectAnswer] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [optionThree, setOptionThree] = useState('');
  const [optionFour, setOptionFour] = useState('');

  //const {useQuiz} = createQuestion()

  const {addQuiz, isPending, error } = useAddQuiz()

  const handleQuestionSave = async () => {
    if (
      question === '' ||
      correctAnswer === '' ||
      optionTwo === '' ||
      optionThree === '' ||
      optionFour === ''
    ) {
      return;
    }

    let currentQuestionId = Math.floor(
      100000 + Math.random() * 9000,
    ).toString();

    let imageUrl = '';

    if (imageUri !== '') {
      const reference = projectStorage().ref(
        `/images/questions/${currentQuizId}_${currentQuestionId}`,
      );
      await reference.putFile(imageUri).then(() => {
        console.log('Image Uploaded');
      });
      imageUrl = await reference.getDownloadURL();
    }

    await addQuiz(currentQuizId, currentQuestionId, {
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: [optionTwo, optionThree, optionFour],
      imageUrl: imageUrl,
    });

    setQuestion('');
    setCorrectAnswer('');
    setOptionTwo('');
    setOptionThree('');
    setOptionFour('');
    setImageUri('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuiz(currentQuizId, currentQuestionId, question, correctAnswer, optionTwo, optionThree, optionFour)
    console.log(addQuiz)
  }
   return (
    <div>
      <form className='auth-form' onSubmit={handleSubmit}>
        <label>
          <span>Question: </span>
          <input
            required
            type="text"
            onChange={(e) => setQuestion(e.target.value)}/>
        </label>
        <label>
          <span>Correct Answer: </span>
          <input
            required
            type="text"
            onChange={(e) => setCorrectAnswer(e.target.value)}/>
        </label>
        <label>
          <span>Option 2:</span>
          <input
            required
            type="text"
            onChange={(e) => setOptionTwo(e.target.value)}/>
        </label>
        <label>
          <span>Option 3:</span>
          <input
            required
            type="text"
            onChange={(e) => setOptionThree(e.target.value)}/>
        </label>
        <label>
          <span>Option 3:</span>
          <input
            required
            type="text"
            onChange={(e) => setOptionFour(e.target.value)}/>
        </label>
        {!isPending && <button className="btn">Save Quiz</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
        {console.log()}
      </form>
    </div>
  )
}
