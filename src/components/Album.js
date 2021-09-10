import React from "react";
import Console from "./Console";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/actions";

const Album = ({ deleteEntry, album, clienttag }) => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(70,184,167", height: "100vh" }}>
        <h2 className="flex1">Album for {clienttag}</h2>
        <div className="flex3">
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
  deleteEntry
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
