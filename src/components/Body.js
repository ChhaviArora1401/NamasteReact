import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Body = () => { 
  // Local State Variable - Super powerful variable
  const [newResList, setNewResList] =  useState([]);
  const [filterResList, setFilterResList] =  useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    // Optional chaining
    setNewResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStaus();

  if(onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
  )

  // Conditional Rendering
  return newResList?.length === 0 ? ( <Shimmer /> ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center"> 
          <input type="text" className="border border-solid border-black" value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
            // FIlter the res cards and update Ui
            //search text
            console.log(searchText);
            const filteredRes = newResList.filter((res) => 
              {return res.info.name.toLowerCase().includes(searchText)}
            );
            setFilterResList(filteredRes);
          }}>Search</button>
        </div>
        <div className="search m-4 p-4">
          <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onClick={() => {
            const filtered = newResList.filter((res) => res.info.avgRating > 4.5);
            setFilterResList(filtered);
          }}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
       {filterResList?.map((r) => {
          return <Link to={"/restaurants/" + r.info.id} key={r.info.id}><ResCard resData={r} /></Link>
        })}
      </div>
    </div>
  )
}

export default Body