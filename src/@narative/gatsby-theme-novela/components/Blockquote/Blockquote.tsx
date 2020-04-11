import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 50px;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.serif};

  padding: 30px 30px 30px 30px;
  // font-style: italic;
  background-color: ${p => p.theme.colors.quoteBackground};
  foreground-color: #3d3d3d;
  border-radius: 10px;

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
  `};

  & > p {
    font-family: ${p => p.theme.fonts.serif};
    // max-width: 880px !important;
    // padding-right: 100px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    // font-size: 36px;
    line-height: 1.75;
    // font-weight: normal;

    ${mediaqueries.tablet`
      font-size: 26px;
      padding: 0 180px;
    `};

    ${mediaqueries.phablet`
      font-size: 36px;
      padding: 0 20px 0 40px;
    `};
  }
`;

export default Blockquote;
