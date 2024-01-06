import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";
import Question from './Question';
import { useEffect, useState } from "react";
import axios from "axios";

export type QuizProps = {
    quizId: number;
    question: string;
    options: string[];
  }

const Main = styled.main`
    width: 330px;
    margin: 0 auto;
    padding-top: 40px;
`

const Quiz = () => {
    const [ quizzes, setQuizzes ] = useState<QuizProps[]>([]);
    const [ quizIndex, setQuizIndex ] = useState(0);
    useEffect(() => {
        axios.get('').then((res) => {
            console.log(res)
            setQuizzes(res.data as QuizProps[]);
        })
    }, [])
    // const quizzes: QuizProps[] = [
    //     {
    //         quizId: 1,
    //         question: '以下のサービスのうち、AWSデータベースサービスはどれでしょう？',
    //         options: ['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service', 'AWS Glue'],
    //     },
    //     {
    //         quizId: 2,
    //         question: 'クイズ2',
    //         options: ['option1', 'option2', 'option3', 'option4'],
    //     }
    // ];
    const quiz = quizzes[quizIndex];

    const updateQuizIndex = () => {
        setQuizIndex(quizIndex + 1)
    }

    return (
        <Main>
            <Question question={quiz?.question} no={quizIndex + 1} />
            <Options options={quiz?.options} />
            <Button updateQuizIndex={updateQuizIndex}/>      
        </Main>
    )
}

export default Quiz;