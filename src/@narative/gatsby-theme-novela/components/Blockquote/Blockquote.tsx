import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 20px;
  color: ${p => p.theme.colors.articleText};
  // font-size: ${p => p.theme.fonts.size};
  font-weight: normal;
  max-width: 780px;
  position: relative;
	width: 90%;
	border-right: 2px solid ${p => p.theme.colors.quoteBorder};
	border-left: 6px solid ${p => p.theme.colors.quoteBorder};
	background: #ffffff;
	box-shadow: 0 1px 2px rgba(0,0,0,0.3);

  padding: 30px 30px 30px 30px;
  // font-style: italic;
  // 背景色が dark/light で切り替わるように設定
  background-color: ${p => p.theme.colors.quoteBackground};

  /* border: solid;
  padding-top: 1em;
  padding-bottom: 1em; */
  /* border-color: ${p => p.theme.colors.quoteBorder}; */
  /* color: black; */

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
  `};
  & > h4 {
    font-weight: 600;
    text-align: left;
    padding: 0;
    // color: black;
  }

  & > ol {
    padding-left: 20px;
    // color: black;
  }

  & > li {
    // color: #000000;
  }

  & > p {
    font-family: ${p => p.theme.fonts.YuGothic};
    // max-width: 880px !important;
    // padding-right: 100px;
    padding-bottom: 0;
    width: 100%;
    margin: 0 auto;
    // font-size: 36px;
    // line-height: 1.75; // 行間の幅
    font-weight: normal;
    // color: black;

    ${mediaqueries.tablet`
    `};

    ${mediaqueries.phablet`
      padding: 10px 0 0 0;
    `};
  }
`;

export default Blockquote;
