import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, openCard }) => {
  return (
    <li className="ImageGalleryItem" onClick={openCard}>
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        data-source={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
