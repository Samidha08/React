import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useStatus from "../utils/useStatus";


const RestaurantMenu = (props) => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    const onlineStatus = useStatus();

    if (onlineStatus === false) return <h1>Looks like you're offline</h1>;
    console.log(onlineStatus);
    if (menu === null ) {
        return <Shimmer />;
    }
    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = menu?.cards[2]?.card?.card?.info;
    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
       
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item)=> (<li key={item.card.info.id}>{item.card.info.name}</li>))} 
            </ul>
        </div>
    );
}

export default RestaurantMenu;