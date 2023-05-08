//헤더 안에 있는 의견 보내기 컴포넌트
const HeaderFeedBackItem = () => {
  return (
    <div
      className="pi pi-comment"
      style={{
        fontSize: '1.2rem',
        color: 'slateblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe2XZYgjrij4NOELlTmKu56dN51qGBVZgHcMs_I1ByGnpZ5Ag/viewform?usp=sf_link"
        target="_blank"
        style={{
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '500',
          textDecoration: 'none',
          color: 'white',
          marginRight: '20px',
        }}
        rel="noreferrer"
      >
        의견보내기
      </a>
    </div>
  );
};

export default HeaderFeedBackItem;
