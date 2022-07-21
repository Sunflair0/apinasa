import React from 'react';
import {Link, useParams} from 'react-router-dom';

const TourAddOns = () => {
	const {addOnsID} = useParams();

	return (
		<div className="content_flexbox">
		<section className="products">
			<h2>{addOnsID}</h2>
			<Link to='/venturetours'>back to TOURS</Link>
		</section>
		</div>
	)
}

export default (TourAddOns);