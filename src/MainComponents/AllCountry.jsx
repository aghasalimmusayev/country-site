import { NavLink } from "react-router-dom"
import "../CSS/allCountry.css"
import { useState } from "react";

function AllCountry({ countries }) {

    const [count, setCount] = useState(6)
    function showMore() {
        setCount(count + 6)
    }

    return (
        <>
            <div className="countries">
                {countries
                    .slice(0, count)
                    .map(country => (
                        <NavLink key={country.numericCode} to={`/details/${country.alpha3Code}`}>
                            <div className="country-card" >
                                <div>
                                    <img src={country.flags?.png} alt="flag" />
                                </div>
                                <h3>{country.name} - {country.alpha3Code}</h3>
                                <p className="region">Region: {country.region}</p>
                                <p className="capital">Capital: {country.capital}</p>
                                <div className="pop-area">
                                    <p className="area">Area: {country.area}</p>
                                    <p className="population">Population: {country.population}</p>
                                </div>
                                <p className="currency">Currency: {country.currencies?.[0]?.code || "N/A"}</p>
                            </div>
                        </NavLink >
                    ))}
            </div>
            {count < countries.length &&
                <div className="more_btn_box">
                    <button className="more_btn" onClick={showMore}>Load More</button>
                </div>}
        </>
    );
}

export default AllCountry