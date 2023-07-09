import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { contextData } from "../Context/ContextWrapper";
import "../Style/Style.css";

const PlaceDetail = () => {
  const { placeId } = useParams();
  const { placesArr, nagivateFunc } = useContext(contextData);

  const destinationObj = placesArr.find((item) => item.id === Number(placeId));

  const {name, image, description, ratings, reviews, location,ticketPrice, openingHours, website} = destinationObj

  return (
    <>
      <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/back-button-icon.png" alt="" srcset="" width={"80px"} onClick={nagivateFunc} className='back-btn'/>
      <h1>{name}</h1>

      <div className="details-main">
        <img
          src={image}
          alt=""
          height={"600px"}
          width={"500px"}
          style={{ objectFit: "cover" }}
          className="card-img"
        />
        <div className="details">
          <p>
            <strong>Description : </strong>
            {description}
          </p>
          <p>
            <strong>Ratings : </strong>
            {ratings}
          </p>
          <p>
            <strong>Reviews : </strong>
            {reviews}
          </p>
          <p>
            <strong>Location : </strong>
            {location}
          </p>
          <p>
            <strong>Ticket price : </strong>
            {ticketPrice}
          </p>
          <p>
            <strong>Opening Hours : </strong>
            {openingHours}
          </p>
          <a href={website} target="_blank" rel="noopener noreferrer">Website</a>
        </div>
      </div>
    </>
  );
};

export default PlaceDetail;
