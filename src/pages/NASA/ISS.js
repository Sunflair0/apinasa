import React from 'react';
import {Outlet} from 'react-router-dom';

function ISS() {
  return (
    <>
   <div className="content_flexbox">
    <div>International Space Station. If you see the LIVE tag, the feed is live.</div>
    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/86YLFOog4GM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
    <Outlet />
     </>
  )
}

export default ISS