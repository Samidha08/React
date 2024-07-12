import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
   
    const {name, avgRating, cloudinaryImageId, costForTwo, cuisines} = props.resData?.info;
    return (
        <div className="resto-card">
            <h3 className="resto-name">{name}</h3>  
            <img className="resto-logo" src={CDN_URL+cloudinaryImageId} />
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

export default RestaurantCard;