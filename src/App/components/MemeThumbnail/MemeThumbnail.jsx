import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { change } from "../../store/current";
import FlexThumbnail from "../layout/FlexThumbnail/FlexThumbnail";
import MemeViewer from "../ui/MemeViewer/MemeViewer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const memeThumbnailInitialState = {};
const MemeThumbnail = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      <FlexThumbnail>
        {props.memes.map((m, mposition) => (
          <Link to={'/editor/'+m.id} key={'link-thumb-'+mposition}>
            <MemeViewer
              meme={m}
              image={props.images.find((i) => i.id === m.imageId)}
              basePath=""
            />
        </Link>
        ))}
      </FlexThumbnail>
    </div>
  );
};

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;
export const MemeThumbnailStoredDatas = (props) => {
  const dispatch = useDispatch();
  const images = useSelector((s) => s.ressources.images);
  const memes = useSelector((s) => s.ressources.memes);
  return (
    <MemeThumbnail
      {...props}
      memes={memes}
      images={images}
      onMemeClick={(id) => {
        dispatch(change(memes.find((m) => m.id === id)));
      }}
    />
  );
};
