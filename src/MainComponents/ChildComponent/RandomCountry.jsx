import { useState, useEffect } from 'react';
import "../../CSS/randomCountry.css"
import { Link } from 'react-router-dom';

function RandomCountry({ countries }) {

    const [randCountry, setRandCountry] = useState(null)

    useEffect(() => {
        if (countries && countries.length > 0) {
            const randNum = Math.floor(Math.random() * countries.length);
            setRandCountry(countries[randNum])
        }
    }, [countries])

    if (!randCountry) {
        return <div className='loading_randCountry'>Loading Random Country</div>
    }

    return (
        <Link key={randCountry.numericCode} to={`details/${randCountry.alpha3Code}`}>
            <div className="rand_country">
                <div key={randCountry.numericCode} className="rand_country_card">
                    <div className='rand_country_img'>
                        {randCountry.flags
                            && randCountry.flags.png
                            && <img src={randCountry.flags.png} alt={`${randCountry.name} flag`} />}
                    </div>
                    <div className="rand_country_info">
                        <h3 className='rand_country_name'>{randCountry.name} - {randCountry.alpha3Code}</h3>
                        <p className="rand_country_region"><span>Region:</span> {randCountry.region}</p>
                        <p className="rand_country_capital"><span>Capital:</span> {randCountry.capital}</p>
                        <div className="rand_country_pop_area">
                            <p className="rand_country_area"><span>Area:</span> {randCountry.area} km²</p>
                            <p className="rand_country_population"><span>Population:</span> {randCountry.population}</p>
                        </div>
                        <p className="rand_country_currency"><span>Currency:</span> {randCountry.currencies?.[0]?.code || "N/A"}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RandomCountry