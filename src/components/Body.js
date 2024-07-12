import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body =() => {
    const [listOfResto, setListOfResto] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredResto, setFilteredResto] = useState([]);

    console.log("br");
    useEffect (() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0330488&lng=73.0296625&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResto(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfResto.length === 0 ? <Shimmer /> :  (
        <div className="body-container">
            <div className="searchbar">
                <input type="text" value={search} onChange={
                    (e) => {
                        setSearch(e.target.value); 
                    }}
                ></input>
                <button onClick={ () => {
                    const filteredResto = listOfResto.filter(
                    (restaurant) => restaurant.info.name.toLowerCase().includes(search.toLowerCase())
                    );
                    setFilteredResto(filteredResto);
                    }}>Search</button>
            </div>
            <div className="resto-container">
               {filteredResto.map((restaurant)=> <Link key ={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>)}  
                {/*{filteredResto.map((restaurant)=> <RestaurantCard key ={restaurant.info.id} resData = {restaurant}/>)}  */}
            </div>
        </div>
    );
}

export default Body;