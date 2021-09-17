import React from "react";
import Console from "./Console";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/actions";

const Album = ({ deleteEntry, album, clienttag }) => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(70,184,167", height: "100vh", width: "150vh" }}>
        <h2 className="flex1">Album for {clienttag}</h2>
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
