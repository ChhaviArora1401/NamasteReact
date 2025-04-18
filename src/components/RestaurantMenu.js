import React from 'react';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>

        <h2>Menu</h2>
        <ul>
            {itemCards.map((i) => {
              return <li key={i.card.info.id}>{i.card.info.name} - Rs. {i.card.info.price/100 || i.card.info.defaultPrice/100}</li>
            })}
        </ul>
    </div>
  )
}

export default RestaurantMenu