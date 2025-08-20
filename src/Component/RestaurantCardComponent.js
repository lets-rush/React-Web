export const RestaurantCardComponent = (props) => {
  // props ==> these are the attributes or arguments passed to the component or function
  const {
    title = props?.info?.name || "title not found",
    cuisine = props?.info?.cuisines.join(", ") || "Biryani, North India",
    rating = props?.info?.avgRating || "4.4 stars",
    eta = props?.info?.sla?.deliveryTime || "38 minutes",
    imgSrc = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
      props?.info?.cloudinaryImageId || "default-image.jpg",
  } = props;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img src={imgSrc} className="res-logo" alt="Food" />
      <h3>{title}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};