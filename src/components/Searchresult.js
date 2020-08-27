import React, { useState } from "react";
import "../css/searchresult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const [toggle, setToggle] = useState(true);
  const clickheart = () => {
    setToggle(!toggle);
    // searchResult__heartred
  };

  return (
    <div className="searchResult">
      <img src={img} alt="" />
      {toggle ? (
        <FavoriteBorderIcon
          className="searchResult__heart"
          onClick={clickheart}
        />
      ) : (
        <FavoriteIcon className="searchResult__heartred" onClick={clickheart} />
      )}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResult;
