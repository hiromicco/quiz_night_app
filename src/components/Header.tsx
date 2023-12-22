import styled from 'styled-components';
import titleLogo from './../assets/title.svg';

const HeaderTitle = styled.header`
    height: 40px;
    display: flex;
    padding-left: 20px;
    background-color: #4B7F9B;
    text-align: left;

    .logo {
        width: 120px;
    }
`

const Header = () => {
    return (
        <HeaderTitle>
            <img src={titleLogo} className='logo' alt="" />
        </HeaderTitle>
    )};

export default Header;