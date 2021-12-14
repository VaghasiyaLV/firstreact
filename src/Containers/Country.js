import React, { useEffect, useState} from 'react';

function Country(Props) {
    const [country, setCountry] = useState('');
    useEffect(
        ()=>{
            console.log("country componentDidMount")
        },
    [country])
    return (
        <div>
            <h1>My Country is {country}.</h1>
            <button onClick={() => setCountry('US')}>change</button>
        </div>
    );
}

export default Country;