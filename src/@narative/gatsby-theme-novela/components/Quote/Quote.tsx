import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const StyledQuote = styled.div`
    line-height: 1.7em;
    font-size: 18px;
    color: ${p => p.theme.colors.articleText};
    font-family: ${p => p.theme.fonts.sansSerif};
    font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "メイリオ", sans-serif;
    transition: ${p => p.theme.colorModeTransition};
    font-weight: 500;
    margin: 15px auto 15px;
    letter-spacing: 0.4px;
    width: 100%;
    max-width: 700px;

    blockquote {
        position: relative;
        padding: 10px 15px 10px 50px;
        box-sizing: border-box;
        font-style: italic;
        background: #efefef;
        color: #555;
    }

    blockquote::before {
        display: inline-block;
        position: absolute;
        top: 10px;
        left: -3px;
        content: "“";
        font-family: sans-serif;
        color: #cfcfcf;
        font-size: 90px;
        line-height: 1;
    }

    blockquote p {
        padding: 0;
        margin: 10px 0;
        line-height: 1.7;
    }

    blockquote cite {
        display: block;
        text-align: right;
        color: #888888;
        font-size: 0.9em;
    }

  b {
    font-weight: 900;
  }

  ${mediaqueries.desktop`
    max-width: 700px;
  `}

  ${mediaqueries.tablet`
    max-width: 420px;
    margin: 0 auto 25px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

const Quote = (props) => {
    return (
        <div>
            <StyledQuote>
                <blockquote>
                    <p>
                        {props.moji}
                    </p>
                    <cite>
                        {props.cite}
                    </cite>
                </blockquote>
            </StyledQuote>
        </div>
    )
}

export default Quote;
