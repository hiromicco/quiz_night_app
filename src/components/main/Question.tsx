import styled from "styled-components";

const Question = () => {
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
    return (
        <SQuestion>
            <h1 className="number">Q1</h1>
            <div className="question">
                <p>以下のサービスのうち、AWSデータベースサービスはどれでしょう？</p>
            </div>
        </SQuestion>
    )
}

export default Question;