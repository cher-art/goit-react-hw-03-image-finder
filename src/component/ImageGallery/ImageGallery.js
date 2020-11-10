import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

const ImageGallery = ({ cards, openCard, image }) => {
  return (
    <ul className="ImageGallery">
      {cards.map((card) => (
        <ImageGalleryItem {...card} openCard={openCard} image={image} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;
