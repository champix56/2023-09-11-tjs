import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexThumbnail.module.css";

const FlexThumbnail = (props) => {
  return (
    <div className={styles.FlexThumbnail} data-testid="FlexThumbnail">
      {props.children}
    </div>
  );
};

FlexThumbnail.propTypes = {
  children: PropTypes.any.isRequired,
};
FlexThumbnail.defaultProps = {
  children: <div>FlexThumbnail layout empty component</div>,
};

export default FlexThumbnail;
