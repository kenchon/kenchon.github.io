import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Paragraph = styled.p`
  line-height: 1.7em;
  font-size: 18px;
  color: ${p => p.theme.colors.articleText};
  /* font-family: ${p => p.theme.fonts.sansSerif}; */
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "メイリオ", sans-serif;
  transition: ${p => p.theme.colorModeTransition};
  font-weight: 500;
  margin: 15px auto 15px;
  letter-spacing: 0.4px;
  width: 100%;
  max-width: 780px;

  b {
    font-weight: 900;
  }

  ${mediaqueries.desktop`
    max-width: 780px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

export default Paragraph;
