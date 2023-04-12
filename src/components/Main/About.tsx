// |This code is a React component that displays an image and some text in a styled container. The good parts of this code include the use of styled-components to create reusable and maintainable styles, the use of useRef and useEffect hooks to implement intersection observer functionality, and the use of state to trigger animations.

//The bad part of this code is that it could benefit from more comments and documentation to make it easier for other developers to understand and modify.
// |
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from '../../assets/SearchImage.svg';
import { StyledIntroTextContainer, StyledMainTItle } from './Intro';

const StyledAboutContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  background-color: #000;
  &.animation {
    animation-name: opacity;
    animation-duration: 2500ms;
    animation-fill-mode: forwards;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;

const AboutTitle = styled.h2`
  font-size: 1.5rem;
  margin-right: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
  display: flex;
  flex-wrap: wrap;
`;

const StyledAboutImage = styled.img`
  display: flex;
  flex-wrap: wrap;

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

  justify-content: center;
  object-fit: contain;
`;

function About() {
  const element = useRef<HTMLDivElement | null>(null);
  const [InviewPort, setInviewPort] = useState<boolean>(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInviewPort(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    if (element.current) {
      observer.observe(element.current);
    }
  }, []);

  return (
    <div>
      <StyledAboutContainer
        ref={element}
        className={InviewPort ? 'animation' : ''}
      >
        <StyledAboutImage src={Search} alt="메인 이미지" />
        <StyledIntroTextContainer>
          <AboutTitle>
            가까운 위치의 카페, 은행, 편의점 등을 알 수 있어요
          </AboutTitle>
          <AboutTitle>NaerBy가 알려드립니다</AboutTitle>
        </StyledIntroTextContainer>
      </StyledAboutContainer>
    </div>
  );
}

export default About;
