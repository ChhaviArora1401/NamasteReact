import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {name, cuisines, costForTwo, cloudinaryImageId, sla, avgRating} = resData?.info;
  return <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
    <img className="rounded-lg" alt="res-logo" src={ CDN_URL + cloudinaryImageId}></img>
    <h3 className="font-bold py-4 text-lg">{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} Stars</h4>
    <h4>{costForTwo}</h4>
    <h4>{sla?.deliveryTime} min</h4>
  </div>
}

export default ResCard