import React from "react";
import styled from "styled-components";

const SQuestion = styled.div`
        text-align: left;
        margin-bottom: 30px;

        .number {
            font-size: 20px;
            font-weight: 400;
            margin-left: 12px;
            margin-bottom: 10px;
        }

        .question {
            width: 330px;
            height: 160px;
            border-radius: 10px;
            padding: 24px 12px;
            background-color: #F4CBAE;
        }
    `

const Question: React.FC<{ question?: string, no: number }> = ({question, no}) => {
    // const quiz: QuizProps = {
    //     no: 1,
    //     question: '以下のサービスのうち、AWSデータベースサービスはどれでしょう？',
    //     options: ['Amazon Redshift', 'AWS Storage Gateway', 'AWS Database Migration Service', 'AWS Glue'],
    // }
    return (
        <SQuestion>
            <h1 className="number">Q{no}</h1>
            <div className="question">
                <p>{question}</p>
            </div>
        </SQuestion>
    )
}

export default Question;