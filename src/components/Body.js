import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => { 
  // Local State Variable - Super powerful variable
  // const [newResList, setNewResList] =  useState(resList);
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

  // Conditional Rendering
  return newResList?.length === 0 ? ( <Shimmer /> ) : (
    <div className="body">
        <div className="filter">
          <div className="search"> 
            <input type="text" className="searchbox" value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }} />
            <button onClick={() => {
              // FIlter the res cards and update Ui
              //search text
              console.log(searchText);
              const filteredRes = newResList.filter((res) => 
                {return res.info.name.toLowerCase().includes(searchText)}
              );
              setFilterResList(filteredRes);
            }}>Search</button>
          </div>
            <button className="filter-btn" onClick={() => {
              const filtered = newResList.filter((res) => res.info.avgRating > 4.5);
              setFilterResList(filtered);
            }}>Top Rated Restaurants</button>
        </div>
      <div className="res-container">
       {filterResList?.map((r) => {
          return <ResCard resData={r} key={r.info.id} />
        })}
      </div>
    </div>
  )
}

export default Body