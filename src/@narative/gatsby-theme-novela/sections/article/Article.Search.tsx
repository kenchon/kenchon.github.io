import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import useScript from './Article.useScript'

const Search: React.FC = (props) => {
    useScript('https://cse.google.com/cse.js?cx=210b2fa21846e482e')

    return (
        <div>
            <StyledSearch>
                <h1 id="search-block">サイト内検索</h1>
                <script type="module" src="https://cse.google.com/cse.js?cx=210b2fa21846e482e"></script>
                <div id="search-container" className="gcse-search"></div>
            </StyledSearch>
        </div>
    )
}

const StyledSearch = styled.div`
    h1 {
        padding: 10px 10px 10px 10px;
    }
    div {
        border-radius: 8px;
        border-color: gray;
        border-width: 2px;
    }
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
    /* display: table; */
    width: 80%;
    z-index: 999;
    /* position: absolute; */
`

export default Search
