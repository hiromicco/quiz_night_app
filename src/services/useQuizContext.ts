import { useContext } from "react";
import { QuizContext } from "./QuizContext";

// quizContextを取得するカスタムフック
export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuizContext must be used within a QuizContextProvider');
    }
    return context;
}