import styled from 'styled-components'
import Theme from '../Theme/Common'
import 'primeicons/primeicons.css'

const Header = () => {
    return (
        <Theme>
            <Container>
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <i
                        className="pi pi-desktop"
                        style={{
                            fontSize: '2.1rem',
                            color: 'slateblue',
                            display: 'inline',
                            marginLeft: '5px',
                        }}
                    />
                    <h2 style={{ display: 'inline' }}>NCafe</h2>
                </div>

                <SideHeader>모각코하기 좋은 카페를 찾아보세요!</SideHeader>
            </Container>
        </Theme>
    )
}

const Container = styled.header`
    width: 100%;
    border: ${(props) => `1px solid ${props.theme.colors.White}`};
    background-color: ${(props) => `${props.theme.colors.White}`};
    font-family: ${(props) => `${props.theme.fonts[0]}`};
`

const SideHeader = styled.div`
    display: flex;
    height: 75px;
    font-size: 1.3rem;
    font-weight: 700;
    margin-left: 5px;
    align-items: center;
`
export default Header
