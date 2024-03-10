import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ContextProviderProps, QuizData } from "../utils/types";

/**
 * 共有するState
 */
type QuizContext = {
    quizzes: QuizData[];
    currentQuizIndex: number;
    selectedOption: string | null;
    setQuizzes: React.Dispatch<React.SetStateAction<QuizData[]>>;
    setCurrentQuizIndex: React.Dispatch<React.SetStateAction<number>>;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

export const QuizContext = createContext<QuizContext | null>(null);

export const QuizContextProvider = ({ children }: ContextProviderProps) => {
    const [ quizzes, setQuizzes ] = useState<QuizData[]>([]);     // クイズデータ(10問分)
    const [ currentQuizIndex, setCurrentQuizIndex ] = useState(0);
    const [ selectedOption, setSelectedOption ] = useState<string | null>(null);

    useEffect(() => {
        axios.get('').then((res) => {
            console.log(res)
            // setQuizzes(res.data as QuizProps[]);
            setQuizzes([
                {
                    quizId: 1,
                    question: '以下のサービスのうち、AWSデータベースサービスはどれでしょう？',
                    options: ['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service', 'AWS Glue'],
                    answerIndex: 0
                },
                {
                    quizId: 2,
                    question: 'クイズ2',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 2
                },
                {
                    quizId: 3,
                    question: 'クイズ3',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 0
                },
                {
                    quizId: 4,
                    question: 'クイズ4',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 3
                },
                {
                    quizId: 5,
                    question: 'クイズ5',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 3
                },
                {
                    quizId: 6,
                    question: 'クイズ6',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 2
                },
                {
                    quizId: 7,
                    question: 'クイズ7',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 1
                },
                {
                    quizId: 8,
                    question: 'クイズ8',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 3
                },
                {
                    quizId: 9,
                    question: 'クイズ9',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 2
                },
                {
                    quizId: 10,
                    question: 'クイズ10',
                    options: ['option1', 'option2', 'option3', 'option4'],
                    answerIndex: 1
                }
            ]);
        })
    }, [])

    const value: QuizContext = {
        quizzes,
        currentQuizIndex,
        selectedOption,
        setQuizzes,
        setCurrentQuizIndex,
        setSelectedOption,
    }

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}
