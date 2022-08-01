import React from "react";
import { connect } from "react-redux";
import AlbumArray from "../components/AlbumArray";
import { add, remove } from "../redux/features/albumSlice";

function Album({
  album,
  add,
  remove,
  loggedInUser
}) {
  return (
    <>
      <div className="content_flexbox">
        <h2>  Album for {loggedInUser} </h2>
        <section className="album">
{album &&
album.length > 0 &&
album.map((val) => (
            <AlbumArray
              key={val.id}              
              liked={val}
              isLiked={true}
              add={add}
              remove={remove}
              title={val.title}
              date={val.date}
              url={val.url}
              copyright={val.copyright}
              description={val.description}
            />
          ))}
               {album.length === 0 && (
         <h3>
            Your Album is empty. Visit NASA to fill here!
          </h3>
             )}
        </section>
      </div>    
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (entry) => dispatch(add(entry)),
    remove: (id) => dispatch(remove(id)),
  };
};

const mapStateToProps = (state) => ({
  album: state.album,
  loggedInUser: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
