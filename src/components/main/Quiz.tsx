import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";
import Question from "./Question";

const Main = styled.main`
    width: 330px;
    margin: 0 auto;
    padding-top: 40px;
`

const Quiz = () => {
    return (
        <Main>
            <Question />
            <Options />
            <Button />      
        </Main>
    )
}

export default Quiz;