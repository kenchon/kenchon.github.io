import styled from "@emotion/styled";
import { css } from "@emotion/core";

import mediaqueries from "@styles/media";

/**
 * Example:
 * <Heading.h1>Lorem Ipsum</Heading.h1>
 */

const commonStyles = p => css`
  font-weight: bold;
  color: ${p.theme.colors.primary};
  font-family: ${p.theme.fonts.sansSerif};
`;

const h1 = styled.h1`
  word-break: break-word;
  font-size: 52px;
  line-height: 2;
  
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;

const h2 = styled.h2`
  // word-break: keep-all;
  word-break: break-word;
  font-size: 32px;
  line-height: 2;

  background-color: ${p => p.theme.colors.h2Background};
  box-shadow: 0px 0px 0px 5px ${p => p.theme.colors.h2Background};
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 24px;
  `};

  ${mediaqueries.tablet`
    font-size: 24px;
    line-height: 1.45;
  `};

  ${mediaqueries.phablet`
    font-size: 22px;
  `};
`;

const h3 = styled.h3`
  // word-break: keep-all;
  word-break: break-word;
  font-size: 21px;
  line-height: 2.5;

  padding: 0.1em;/*文字周りの余白*/
  padding-left: 0.5em;
  color: #494949;/*文字色*/
  background-color: ${p => p.theme.colors.h3Background};
  border-left: solid 5px #ffaf58;/*左線（実線 太さ 色）*/

  ${commonStyles};

  ${mediaqueries.tablet`
    font-size: 22px;
  `};

  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;

const h4 = styled.h4`
  word-break: keep-all;
  font-size: 19px;
  line-height: 3;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 19px;
  `};
`;

const h5 = styled.h5`
  word-break: keep-all;  
  font-size: 18px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

const h6 = styled.h6`
  word-break: keep-all;
  font-size: 16px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 14px;
  `};
`;

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};
