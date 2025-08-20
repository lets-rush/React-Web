import { useState } from "react";
import { res } from "../../res";
import { RestaurantCardComponent } from "./RestaurantCardComponent";

export const Bodly = () => {
  const [state, setState] = useState(res);
  const highRatedRes = () => {
    const highRated = res.filter((item) => item?.info?.avgRating > 4.2);
    setState(highRated);
    console.log(highRated);
  };
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={() => highRatedRes()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-list">
        {state.map((item, index) => {
          return (
            <RestaurantCardComponent key={item?.info?.id || index} {...item} />
          );
        })}
      </div>
    </div>
  );
};
