import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarImageList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} cols={4} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={4} style={{ height: "auto" }}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </ImageListItem>
        {props.moviesData.map((movie) => (
          <ImageListItem className="homePageImage" key={movie.title}>
            <Link to="/details" state={{ movie: movie }}>
              <img src={movie.poster_url} alt={movie.title} />
            </Link>
            <ImageListItemBar
              title={movie.title}
              subtitle={
                <span>
                  Release Date: {new Date(movie.release_date).toDateString()}
                </span>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
