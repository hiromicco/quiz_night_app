import styled from "styled-components";

const Button = () => {
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
    return <SButton>次の問題へ</SButton>
};

export default Button;