import React from "react";
import Console from "./Console";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/actions";

const Album = ({ deleteEntry, album, clienttag }) => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(70,184,167", height: "100vh" }}>
        <h2 className="flex1">Album for {clienttag}</h2>
        <div className="">
          {album.map((item) => (
            <Console
              id={item.id}
              isLiked={true}
              deleteEntry={deleteEntry}
              date={item.date}
              copyright={item.copyright}
              title={item.title}
              url={item.url}
              description={item.description}
              key={item.id}
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
