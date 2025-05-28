import React from 'react'
import { Link, NavLink } from "react-router-dom"

function AllCountry({ countries }) {
    return (
        <div className="countries">
            {countries.map(country => (
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
    );
}

export default AllCountry