import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IAuthor } from '@types';

const Bio: React.FC<IAuthor> = ({ author }) => {
  return (
    <BioContainer>
      <BioAvatar
        as={author.authorsPage ? Link : 'div'}
        to={author.slug}
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <RoundedImage src={author.avatar.medium} />
        </BioAvatarInner>
      </BioAvatar>
      <BioTextContainer>    
        <BioName dangerouslySetInnerHTML={{ __html: author.name }} />
        <BioText dangerouslySetInnerHTML={{ __html: author.bio }} />
      </BioTextContainer>
    </BioContainer>
  );
};

export default Bio;

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
`;

const BioTextContainer = styled.div`
  flex-direction: column;
  align-items: center;
  position: relative;
`

const BioAvatar = styled.div`
  display: block;
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 100%;
`;

const BioAvatarInner = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioName = styled.p`
  max-width: 600px;
  font-size: 25px;
  line-height: 1.45;
  font-weight: 800;
  padding-bottom: 0.5em;
  color: ${p => p.theme.colors.articleText};
`;

const BioText = styled.p`
  max-width: 600px;
  font-size: 18px;
  line-height: 1.45;
  color: ${p => p.theme.colors.grey};
  font-weight: 600;

  a {
    color: ${p => p.theme.colors.grey};
    text-decoration: underline;
  }
`;
