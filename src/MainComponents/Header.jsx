import RandomCountry from './ChildComponent/RandomCountry'
import { useState } from 'react'
import "../CSS/header.css"

function Header({ countries, text, searchCountry, scrollToAllCountry }) {

    const [input, setInput] = useState(false)

    let handleSearch = () => {
        setInput(!input)
    }

    const lookCountry = ()=>{
        scrollToAllCountry()
    }

    return (
        <header>
            <div className="container">
                <div className="header_content">
                    <h1 className="heading">Welcome to CountryApp Website</h1>
                    <p className="heading_text">You can find data of any country in this website.</p>
                    <div className="search_btns">
                        <button className='look' onClick={lookCountry}>have a look</button>
                        <button className='search' onClick={handleSearch}>search</button>
                    </div>
                    {input && <input type="text" value={text} onChange={searchCountry} />}
                    {!input && <RandomCountry countries={countries} />}
                </div>
            </div>
        </header>
    )
}

export default Header