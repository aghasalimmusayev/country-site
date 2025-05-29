import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../../CSS/details.css"

function Details({ countries }) {

    const { alphaCode } = useParams()
    const [countryDetail, setCountryDetail] = useState(null);

    useEffect(() => {
        if (countries.length > 0) {
            const olke = countries.find(olke => olke.alpha3Code === alphaCode)
            setCountryDetail(olke)
        }
    }, [countries, alphaCode])

    if (countryDetail) {
        return (
            <div className="country_detail">
                <div className='country_detail_img'>
                    {countryDetail.flags
                        && countryDetail.flags.png
                        && <img src={countryDetail.flags.png} alt={`${countryDetail.name} flag`} />}
                </div>
                <div className="country_detail_info">
                    <h3 className='country_detail_name'>{countryDetail.name} - {countryDetail.alpha3Code}</h3>
                    <p className="country_detail_region"><span>Region:</span> {countryDetail.region}</p>
                    <p className="country_detail_capital"><span>Capital:</span> {countryDetail.capital}</p>
                    <div className="country_detail_pop_area">
                        <p className="country_detail_area"><span>Area:</span> {countryDetail.area}</p>
                        <p className="country_detail_population"><span>Population:</span> {countryDetail.population}</p>
                    </div>
                    <p className="country_detail_currency"><span>Currency:</span> {countryDetail.currencies?.[0]?.code || "N/A"}</p>
                    <div className='borders'>{countryDetail.borders &&
                        countryDetail.borders.map(border => (
                            <Link key={countryDetail.numericCode}
                                to={`/details/${border}`}><span>{border}</span>
                            </Link>))}
                    </div>
                </div>
            </div>)
    }
}

export default Details