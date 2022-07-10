import React from "react";
import Console from "../components/Console";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/actions";

const Album = ({ deleteEntry, album, clienttag }) => {
  return (
    <>
      <h2 className="content_flexbox" >Album for {clienttag} </h2>
      <div style={{ backgroundImage: "linear-gradient(to right, #46b8a7 , rgb(66,170,177))", height: "100vh", width: "150vh", opacity: ".45" }}>

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
