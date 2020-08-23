import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const UnorderedList = styled.ul`
  list-style: none;
  line-height: 1.8;
  counter-reset: list;
  color: ${p => p.theme.colors.articleText};
  position: relative;
  padding: 6px 0px 10px 35px;
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto;
  font-size: 18px;
  width: 100%;
  max-width: 780px;

  ${mediaqueries.desktop`
    max-width: 507px;
  `};

  ${mediaqueries.tablet`
    max-width: 486px;
    padding-left: 0px;
  `};

  ${mediaqueries.phablet`
    padding-left: 0px;
  `};

  li {
    position: relative;
    padding-bottom: 10px;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 30px;
    `};

    p {
      ${mediaqueries.tablet`
        padding: 0;
      `};

      ${mediaqueries.phablet`
        padding: 0;
      `};
    };
  };

  // Removing this make it possible to make newline b/w <p> tags.
  // li > :not(ol, ul) {
  //   display: inline;
  // };


  li::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 8px;
    height: 8px;
    width: 8px;
    background: ${p => p.theme.colors.articleText};
    border-radius: 50%;
    background-color: ${p => p.theme.colors.list};

    ${mediaqueries.tablet`
      left: 0;
    `};

    ${mediaqueries.phablet`
      left: 0;
    `};
  };
`;

export default UnorderedList;
