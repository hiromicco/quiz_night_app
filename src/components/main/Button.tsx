import styled from "styled-components";
import { useQuizContext } from "../../services/useQuizContext";

const SButton = styled.button`
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 10px;
        background-color: #E7896F;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    `

const Button = () => {

    const { quizzes, currentQuizIndex, setCurrentQuizIndex, setSelectedOption } = useQuizContext();

    const text = currentQuizIndex < quizzes.length - 1 ? '次の問題へ' 
                    : currentQuizIndex === quizzes.length - 1 ? '結果を見る'  // 最後の問題
                    : 'クイズを始める';  // 結果表示ページ

    const toNext = () => {
        setCurrentQuizIndex(prev => ++prev);
        setSelectedOption(null);
    }

    return <SButton onClick={toNext}>{text}</SButton>
};

export default Button;