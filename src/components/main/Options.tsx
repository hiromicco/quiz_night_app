import styled from "styled-components";
import { useQuizContext } from "../../services/useQuizContext";

const SOptions = styled.div`
        margin-bottom: 60px;
        .option {
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 10px;
            background-color: #D3E1E9;
            padding: 12px;
            margin-bottom: 15px;
            text-align: center;

            &:not(.disabled) {
                cursor: pointer; 
            }

            &:hover:not(.disabled) {
                opacity: .8;
            }  

            &.isCorrect {
                background-color: #4B7F9B;
            }

            &.isWrong {
                background-color: #E7896F;
            } 

        }  
    `

const Options = () => {
    const { quizzes, setQuizzes, currentQuizIndex, selectedOption, setSelectedOption } = useQuizContext();

    const quiz = quizzes[currentQuizIndex];
    const answer = quiz?.options[quiz.answerIndex];
    
    const selectHandler = (option: string) => {
        // 一度選択後は選択できない
        if (!selectedOption) {
            setSelectedOption(option);

            const updatedQuizzes = [ ...quizzes ];
            updatedQuizzes[currentQuizIndex].isCorrect = option === answer;
            setQuizzes(updatedQuizzes);
        }
    }

    return (
        <SOptions>
            {quiz?.options.map((option) => (
                <button
                className={
                    `option 
                    ${selectedOption === option ? (selectedOption === answer ? 'isCorrect' : 'isWrong') : ''} 
                    ${selectedOption ? 'disabled' : ''}`
                }
                key={option} 
                onClick={() => selectHandler(option)}
                >
                    {option}
                </button>
            ))}
        </SOptions>
    )
}

export default Options;