export type QuizProps = {
    quizId: number;
    question: string;
    options: string[];
    answerIndex: number;
}

type IsCorrect = Partial<{
    // selectedItemIndex: number;
    isCorrect: boolean;
}>

export type QuizData = QuizProps & IsCorrect;

/**
 * Context children の型
 */
export type ContextProviderProps = {
    children: React.ReactNode;
}