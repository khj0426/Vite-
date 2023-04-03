import styled from 'styled-components'
import Theme from './Theme/Common'

const Header = () => {
    return (
        <Theme>
            <Container>
                <h2>ShareTube</h2>
            </Container>
        </Theme>
    )
}

const Container = styled.header`
    width: 100%;
    border: ${(props) => `1px solid ${props.theme.colors.White}`};
    background-color: ${(props) => `${props.theme.colors.LightGray}`};
    font-family: ${(props) => `${props.theme.fonts[0]}`};
`
export default Header
