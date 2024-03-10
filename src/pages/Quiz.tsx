import styled from "styled-components";
import Button from "../components/main/Button";
import Options from "../components/main/Options";
import Question from '../components/main/Question';

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