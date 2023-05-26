import styled from 'styled-components';

const ScrollTopButtonStyle = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35px; /* 원하는 높이로 수정 */
  display: flex;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
  font-weight: 800;
`;

const ScrolltoTopIcon = styled.i`
  color: #6366f1;
`;

const ScrolltoTop = () => {
  const handleClickButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ScrollTopButtonStyle onClick={handleClickButton}>
      <ScrolltoTopIcon className="pi pi-angle-double-up"></ScrolltoTopIcon>
    </ScrollTopButtonStyle>
  );
};

export default ScrolltoTop;
