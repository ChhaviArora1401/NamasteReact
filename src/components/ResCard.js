import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {mediaFiles, name, cuisines, rating, costForTwo, locationInfo} = resData?.info;
  return <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
    <img className="res-logo" src={ CDN_URL + mediaFiles[0].url}></img>
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{rating.value} Stars</h4>
    <h4>{costForTwo}</h4>
    <h4>{locationInfo.distanceString}</h4>
  </div>
}

export default ResCard