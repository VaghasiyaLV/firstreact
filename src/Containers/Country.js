import React, { useState, usestate } from 'react';

function Country(Props) {
    const [country, setCountry] = useState('India');
    return (
        <div>
            <h1>My Country is {country}.</h1>
            <button onClick={() => setCountry('US')}>change</button>
        </div>
    );
}

export default Country;