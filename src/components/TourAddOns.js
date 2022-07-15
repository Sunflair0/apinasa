import React from 'react';
import {Link, useParams} from 'react-router-dom';

const TourAddOns = () => {
	const {addOnsID} = useParams();

	return (
		<section className="products">
			<h2>{addOnsID}</h2>
			<Link to='/venturetours'>back to TOURS</Link>
		</section>
	)
}

export default (TourAddOns);