import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import MainImage from '../../assets/MainImage.svg';
import theme from '../style/Theme';

const SlideIn = keyframes`
0%{
  transform: translateX(100%);
}
100%{
  transform: translateX(0);
}
`;

const SlideLeft = keyframes`
0%{
  transform: translateX(-50px);
}
100%{
  transform: translateX(0);
}
`;

const StyledIntroContainer = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 50px;
  background-color: #add8e6;
  justify-content: space-between;
  align-items: center;
  background-color: #070101;
  animation: ${SlideIn} 2s ease;
`;

export const StyledIntroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 700;
  margin-left: 15px;
  max-width: 80%;
  color: white;
  margin: 0 auto;
  flex-direction: column;
`;

export const StyledMainTItle = styled.h1`
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;
const StyledMainImage = styled.img`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${(props) => props.theme.desktop} {
    width: 700px;
    height: 500px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 600px;
    height: 450px;
  }

  @media ${(props) => props.theme.tablet} {
    width: 550px;
    height: 400px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 300px;
    height: 300px;
  }
  object-fit: contain;
`;

function Intro() {
  return (
    <ThemeProvider theme={theme}>
      <StyledIntroContainer>
        <StyledIntroTextContainer>
          <StyledMainTItle>
            당신근처의 모든 것들이 궁금하신가요?
          </StyledMainTItle>
          <StyledMainTItle>NaerBy가 알려드립니다</StyledMainTItle>
        </StyledIntroTextContainer>
        <StyledMainImage src={MainImage} alt="메인 이미지" />
      </StyledIntroContainer>
    </ThemeProvider>
  );
}

export default Intro;
