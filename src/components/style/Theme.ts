const size = {
  mobile: '770px',
  tabllet: '1023px',
  laptop: '1460px',
  desktop: '1700px',
};

const theme = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(max-width:${size.tabllet})`,
  laptop: `(max-width:${size.laptop})`,
  desktop: `(max-width:${size.desktop})`,
};

export default theme;
