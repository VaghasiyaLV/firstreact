import React, { useEffect, useState } from 'react';

function Timerfun(props) {
    const [time , setTime] = useState(new Date());
    const tick = (
        () =>(
            setTime(new Date)
        )
    )
    useEffect( 
        () => {
           setInterval(
               () => 
                    tick(),
                    1000
            )
        },
    [])
    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Timerfun;