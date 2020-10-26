import { React, useRef } from 'react'
import styled from '@emotion/styled'
import searchIcon from './search-icon.png'

const scrollToSearch = () => {
    const searchContainer = document.getElementById('search-block')
    searchContainer.scrollIntoView({behavior: "smooth", block: 'center'})
}

const Search: React.FC = (props) => {
    return (
        <div>
            <StyledSearch>
                <a id="fab">
                    <input onClick={scrollToSearch} type="image" src={searchIcon}></input>
                </a>
            </StyledSearch>
        </div>
    )
}

const StyledSearch = styled.div`
    #fab {/*円の部分*/
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 70px;/*幅*/
        height: 70px;/*高さ*/
        background: #ffffff;/*背景色*/
        border-color: #000000;
        text-align: center;/*中央寄せ*/
        border-radius: 50%;/*角丸く*/
        transition: .3s;/*滑らかな動きに*/
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.12), 0 2px 2px 0 rgba(0,0,0,.24);/*影*/
        z-index: 1000;
    }

    #fab:hover {/*ホバー時*/
          box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
    }

    #fab input {/*中央のアイコン*/
        margin: 11px;
        border-color: #000000;
        width: 45px;
        height: 45px;
        color: white;
    }
`

export default Search
