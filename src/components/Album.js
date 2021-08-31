import React from "react";
import Console from "./Console";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/actions";

const Album = ({ deleteEntry, album, clienttag }) => {
  return (
    <>
      <h2 className="content">Album for {clienttag}</h2>
      <div className="flex-wrap">
        {album.map((pic) => (
          <Console
            id={pic.id}
            isFav={true}
            deleteEntry={deleteEntry}
            title={pic.title}
            url={pic.url}
            key={pic.id}
          />
        ))}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag,
    album: state.album,
  };
}

const mapDispatchToProps = {
  deleteEntry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
