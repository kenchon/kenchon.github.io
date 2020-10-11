import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import useScript from './Article.useScript'

const Search: React.FC = (props) => {
    useScript('https://cse.google.com/cse.js?cx=210b2fa21846e482e')

    return (
        <div>
            <StyledSearch>
                <script type="module" src="https://cse.google.com/cse.js?cx=210b2fa21846e482e"></script>
                <div className="gcse-search"></div>
            </StyledSearch>
        </div>
    )
}

const StyledSearch = styled.div`
    z-index: 1000;
    position: absolute;
    margin-bottom: 30px;
`

export default Search
