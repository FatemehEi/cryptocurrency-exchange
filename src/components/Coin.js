import React from 'react';

const Coin = (props) => {
    const {name, symbol, image, price, marketCap, priceChange} = props;
    return (
        <div>
            <img src={image} alt="coin" />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{priceChange}</span>
            <span>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;