import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';




const TourInfo = () => {
 const [ventures, setVentures] = useState(false)
 const { callAPI: getventures } = useState("")

// useFetch("GET");

  const { tourId } = useParams();
// useEffect(() => {
//   async function call() {
//     const res = await getventures(`http://localhost:3306/api/ventures/tour/all`);
//     if (!res.success) {
//       return console.error(res.error);
//     }
//     setVentures(res.data);
//   }
//   call();
// }, []);


  return (
    <>
    <div className="content_flexbox">
      <section className="products">
        <h2>{tourId}</h2>
        <Link to='/purchases'>back to Purchases</Link>
      </section>

      <div className="venture-menu">
        <Link to="#" className="menu-bars1">

        </Link>
      </div>

      <ul className="venture-menu-items">
        <li className="venture-toggle">
          <Link to="#" className="menu-bars1"></Link>
        </li>
        {/* {ventures.map((item, index) => {
          return (
            <li key={index} ><img alt="right sidebar with planets as index holders" src={item.icon} />

              <Link to={item.path}>

                <span>{item.title}</span>

              </Link>
            </li>
          );
        })} */}
      </ul>
      </div>
    </>
  );
}

export default (TourInfo);
