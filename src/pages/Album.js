import React from "react";
import Console from "../components/Console";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/actions";
import { Outlet } from "react-router-dom";

const Album = ({ deleteEntry, album, user }) => {
  return (
    <>
      <div className="content_flexbox">
      <h2>  Album for {user} </h2>
      <div className="album">

        <div className="">
          {album.map((item) => (
            <Console
              id={item.id}
              key={item.id}
              isLiked={true}
              deleteEntry={deleteEntry}
              title={item.title}
              date={item.date}
              url={item.url}
              copyright={item.copyright}
              description={item.description}
            />
            
          ))};

        </div>
      </div>
      </div> 
      <Outlet />
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    album: state.album,
  };
}

const mapDispatchToProps = {
  deleteEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
