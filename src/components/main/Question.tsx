import styled from "styled-components";
import { useQuizContext } from "../../services/useQuizContext";

const SQuestion = styled.div`
        width: 330px;
        height: 160px;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 30px;
        background-color: #F4CBAE;
        text-align: left;

        .number {
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 16px;
        }

        .result {
            text-align: center;

            & .title {
                text-align: left;
                font-weight: 400;
                margin: 10px 0 20px 10px;
            }

            & .answers {
                margin-bottom: 20px;

                & .correct {
                    font-size: 20px;
                    margin: 0 10px 0 20px;
                }
            }
        }
    `

const Question = () => {
    // const quiz: QuizProps = {
    //     no: 1,
    //     question: '以下のサービスのうち、AWSデータベースサービスはどれでしょう？',
    //     options: ['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service', 'AWS Glue'],
    // }
    const { quizzes, currentQuizIndex } = useQuizContext();

    const quiz = quizzes[currentQuizIndex];

    const quizMode = currentQuizIndex + 1 <= quizzes.length;

    const correctAnswers = quizzes.filter(q => q.isCorrect).length

    return (
        <SQuestion>
            {
                quizMode ? (
                    <>
                        <h1 className="number">Q{currentQuizIndex + 1}</h1>
                        <p>{quiz?.question}</p>
                    </>
                ) : (
                    <div className="result">
                        <h3 className="title">結果</h3>
                        <p className="answers"><span className="correct">{correctAnswers}問</span>/ {quizzes.length}問中（{(correctAnswers / quizzes.length) * 100}%）</p>
                        <p>正解しました！</p>
                    </div>
                )
            }
        </SQuestion>
    )
}

export default Question;