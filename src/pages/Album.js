import React from "react";
import AlbumArray from "../components/AlbumArray";
import { connect } from "react-redux";
import { removeEntry } from "../redux/actions";
import { Outlet } from "react-router-dom";

function Album({
  user,
  liked,
  removeEntry
}) {
  return (
    <>
      <div className="content_flexbox">
        <h2>  Album for {user} </h2>
        <section className="album">
          {liked.map((entry) => (
            <AlbumArray
              key={entry.id}
              id={entry.id}
              item={entry}
              isLiked={true}
              removeEntry={removeEntry}
              title={entry.title}
              date={entry.date}
              url={entry.url}
              copyright={entry.copyright}
              description={entry.description}
            />
          ))};
        </section>
      </div>
      <Outlet />
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    liked: state.nasa.liked,
  };
}

const mapDispatchToProps = {
  removeEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
