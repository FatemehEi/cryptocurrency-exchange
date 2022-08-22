import React, {useEffect, useState} from 'react';

import { getCoins } from '../services/api';

const Landing = () => {

    const [coins, setCoins] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoins();    
            console.log(data);
            setCoins(data);
        }
        
        fetchAPI();
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Landing;