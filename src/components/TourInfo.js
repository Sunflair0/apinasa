import React from 'react';
    import {Link, useParams} from 'react-router-dom';
  
    const TourInfo = () => {
      const {tourId} = useParams();
    
      return (
        <section className="products">
          <h2>{tourId}</h2>
          <Link to='/venturetours'>back to TOURS</Link>
        </section>
      )
    }

export default TourInfo;
