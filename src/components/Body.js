import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

// not using keys (not acceptable) <<<< index as key <<<<<<<< unique id (best practice)
const Body = () => { 
  // Local State Variable - Super powerful variable
  const [newResList, setNewResList] =  useState(resList);

  // another way of declaring state
  // const arr = useState(resList);
  // const newResList = arr[0];
  // const setNewResList = arr[1];

  // Normal JS Variable
  let newResList1 = [];

  return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
              // filter logic
              const filtered = newResList.filter((res) => res.info.rating.value > 4.0);
              setNewResList(filtered);
              console.log(filtered);
            }}>Top Rated Restaurants</button>
        </div>
      <div className="search">Search</div>
      <div className="res-container">
       {/* <ResCard resData={resObj[0]} /> */}
       {newResList.map((r) => {
          return <ResCard resData={r} key={r.info.id} />
        })}
      </div>
    </div>
  )
}

export default Body