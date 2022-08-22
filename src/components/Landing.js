import React, {useEffect, useState} from 'react';

//API
import { getCoins } from '../services/api';

//components
import Coin from './Coin';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoins(); 
            console.log("fetch")   
            console.log(data);
            setCoins(data);
        }
        
        fetchAPI();
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={searchHandler} />
            { coins.length ? 
                <div>
                {
                    searchedCoins.map(coin => <Coin 
                        key={coin.id} 
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h} />)
                }
                </div> :
                <h1>Loading ...</h1>
            }
            
        </div>
    );
};

export default Landing;