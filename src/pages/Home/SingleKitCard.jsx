import React from 'react';

const SingleKitCard = ({singleKit}) => {
    const {_id, toyName, sellerName, sellerEmail, rating, price, picURL, discountPercentage, description, availableStock } = singleKit;
    return (
        <div>
            <h2>
                {toyName}
            </h2>
        </div>
    );
};

export default SingleKitCard;